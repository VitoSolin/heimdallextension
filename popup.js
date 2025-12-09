/**
 * HeimdallScan Popup Script
 */

// Elements
const enableToggle = document.getElementById('enableToggle');
const thresholdSlider = document.getElementById('thresholdSlider');
const thresholdValue = document.getElementById('thresholdValue');
const hiddenCount = document.getElementById('hiddenCount');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

chrome.storage.sync.get(['enabled', 'threshold'], (result) => {
    enableToggle.checked = result.enabled !== false;
    thresholdSlider.value = result.threshold || 50;
    thresholdValue.textContent = thresholdSlider.value;
    updateStatus(enableToggle.checked);
});

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

function updateStatus(enabled) {
    if (enabled) {
        statusDot.classList.remove('inactive');
        statusText.textContent = 'Aktif';
    } else {
        statusDot.classList.add('inactive');
        statusText.textContent = 'Nonaktif';
    }
}

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

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'statsUpdate') {
        hiddenCount.textContent = message.hiddenCount || 0;
    }
});

getStats();

setInterval(getStats, 2000);
