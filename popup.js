/**
 * skrip popup HeimdallScan
 */

// elemen - pengaturan
const enableToggle = document.getElementById('enableToggle');
const thresholdSlider = document.getElementById('thresholdSlider');
const thresholdValue = document.getElementById('thresholdValue');
const hiddenCount = document.getElementById('hiddenCount');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

// elemen - tab
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// elemen - navigasi
const judolList = document.getElementById('judolList');
const emptyState = document.getElementById('emptyState');
const navControls = document.getElementById('navControls');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// state
let judolItems = [];
let currentIndex = -1;
let currentMode = 'hide';

// muat pengaturan dan set tab aktif sesuai mode tersimpan
chrome.storage.sync.get(['enabled', 'threshold', 'mode'], (result) => {
    enableToggle.checked = result.enabled !== false;
    thresholdSlider.value = result.threshold || 50;
    thresholdValue.textContent = thresholdSlider.value;
    updateStatus(enableToggle.checked);

    // set tab aktif sesuai mode tersimpan
    currentMode = result.mode || 'hide';
    setActiveTab(currentMode);

    // muat daftar judol kalau di mode cek
    if (currentMode === 'check') {
        loadJudolList();
    }
});

// set tab aktif
function setActiveTab(mode) {
    tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `tab-${mode}`);
    });
}

// ganti tab - juga ganti mode
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        const mode = btn.dataset.mode;

        // update tombol tab aktif
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // update konten tab aktif
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `tab-${tabId}`) {
                content.classList.add('active');
            }
        });

        // simpan mode ke storage - ini bakal trigger content.js buat reprocess
        currentMode = mode;
        chrome.storage.sync.set({ mode });

        // muat daftar judol waktu pindah ke mode cek
        if (mode === 'check') {
            // delay dikit biar content.js sempat reprocess
            setTimeout(loadJudolList, 300);
        }
    });
});

// ambil stats
async function getStats() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url && tab.url.includes('youtube.com')) {
            const response = await chrome.tabs.sendMessage(tab.id, { type: 'getStats' });
            if (response) {
                hiddenCount.textContent = response.hiddenCount || 0;
            }
        }
    } catch (e) {
        hiddenCount.textContent = '-';
    }
}

// muat daftar judol buat navigasi
async function loadJudolList() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab || !tab.url || !tab.url.includes('youtube.com')) {
            showEmptyState('buka video youtube dulu');
            return;
        }

        const response = await chrome.tabs.sendMessage(tab.id, { type: 'getJudolList' });

        if (response && response.judolList && response.judolList.length > 0) {
            judolItems = response.judolList;
            renderJudolList();
        } else {
            showEmptyState('gak ada judol terdeteksi');
        }
    } catch (e) {
        showEmptyState('gagal muat daftar');
    }
}

// render daftar judol
function renderJudolList() {
    judolList.innerHTML = '';
    emptyState.style.display = 'none';
    navControls.style.display = 'flex';

    judolItems.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'judol-item';
        itemEl.innerHTML = `
            <div class="judol-info">
                <div class="judol-author">${escapeHtml(item.author)}</div>
                <div class="judol-preview">${escapeHtml(item.preview)}</div>
                <div class="judol-score">skor: ${item.score}</div>
            </div>
            <button class="scroll-btn" data-index="${index}">lihat</button>
        `;

        const scrollBtn = itemEl.querySelector('.scroll-btn');
        scrollBtn.addEventListener('click', () => scrollToComment(index));

        judolList.appendChild(itemEl);
    });

    updateNavButtons();
}

// scroll ke komentar tertentu
async function scrollToComment(index) {
    if (index < 0 || index >= judolItems.length) return;

    currentIndex = index;
    const item = judolItems[index];

    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        await chrome.tabs.sendMessage(tab.id, {
            type: 'scrollToComment',
            id: item.id
        });

        // highlight item aktif di daftar
        document.querySelectorAll('.judol-item').forEach((el, i) => {
            el.style.borderColor = i === index ? '#d4a017' : '#e2e8f0';
            el.style.background = i === index ? '#fffbeb' : '#f8fafc';
        });

        updateNavButtons();
    } catch (e) {
        console.error('gagal scroll ke komentar:', e);
    }
}

// tampilkan state kosong
function showEmptyState(message) {
    judolList.innerHTML = '';
    emptyState.querySelector('.empty-state-text').textContent = message;
    emptyState.style.display = 'block';
    navControls.style.display = 'none';
    judolItems = [];
    currentIndex = -1;
}

// update state tombol nav
function updateNavButtons() {
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= judolItems.length - 1;
}

// escape HTML buat cegah XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateStatus(enabled) {
    if (enabled) {
        statusDot.classList.remove('inactive');
        statusText.textContent = 'aktif';
    } else {
        statusDot.classList.add('inactive');
        statusText.textContent = 'nonaktif';
    }
}

// event listener - pengaturan
enableToggle.addEventListener('change', () => {
    const enabled = enableToggle.checked;
    chrome.storage.sync.set({ enabled });
    updateStatus(enabled);
});

thresholdSlider.addEventListener('input', () => {
    thresholdValue.textContent = thresholdSlider.value;
});

thresholdSlider.addEventListener('change', () => {
    chrome.storage.sync.set({ threshold: parseInt(thresholdSlider.value) });
});

// event listener - navigasi
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        scrollToComment(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < judolItems.length - 1) {
        scrollToComment(currentIndex + 1);
    }
});

// dengarkan update stats
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'statsUpdate') {
        hiddenCount.textContent = message.hiddenCount || 0;
    }
});

// muat awal
getStats();
setInterval(getStats, 2000);
