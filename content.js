// FANCY TEXT NORMALIZATION MAP
const FANCY_MAP = {
    // lowercase bold script
    '𝓪': 'a', '𝓫': 'b', '𝓬': 'c', '𝓭': 'd', '𝓮': 'e', '𝓯': 'f', '𝓰': 'g',
    '𝓱': 'h', '𝓲': 'i', '𝓳': 'j', '𝓴': 'k', '𝓵': 'l', '𝓶': 'm', '𝓷': 'n',
    '𝓸': 'o', '𝓹': 'p', '𝓺': 'q', '𝓻': 'r', '𝓼': 's', '𝓽': 't', '𝓾': 'u',
    '𝓿': 'v', '𝔀': 'w', '𝔁': 'x', '𝔂': 'y', '𝔃': 'z',
    // uppercase bold script
    '𝓐': 'A', '𝓑': 'B', '𝓒': 'C', '𝓓': 'D', '𝓔': 'E', '𝓕': 'F', '𝓖': 'G',
    '𝓗': 'H', '𝓘': 'I', '𝓙': 'J', '𝓚': 'K', '𝓛': 'L', '𝓜': 'M', '𝓝': 'N',
    '𝓞': 'O', '𝓟': 'P', '𝓠': 'Q', '𝓡': 'R', '𝓢': 'S', '𝓣': 'T', '𝓤': 'U',
    '𝓥': 'V', '𝓦': 'W', '𝓧': 'X', '𝓨': 'Y', '𝓩': 'Z',
    // bold (mathematical) - upper
    '𝐀': 'A', '𝐁': 'B', '𝐂': 'C', '𝐃': 'D', '𝐄': 'E', '𝐅': 'F', '𝐆': 'G',
    '𝐇': 'H', '𝐈': 'I', '𝐉': 'J', '𝐊': 'K', '𝐋': 'L', '𝐌': 'M', '𝐍': 'N',
    '𝐎': 'O', '𝐏': 'P', '𝐐': 'Q', '𝐑': 'R', '𝐒': 'S', '𝐓': 'T', '𝐔': 'U',
    '𝐕': 'V', '𝐖': 'W', '𝐗': 'X', '𝐘': 'Y', '𝐙': 'Z',
    // Bold (mathematical) - lower
    '𝐚': 'a', '𝐛': 'b', '𝐜': 'c', '𝐝': 'd', '𝐞': 'e', '𝐟': 'f', '𝐠': 'g',
    '𝐡': 'h', '𝐢': 'i', '𝐣': 'j', '𝐤': 'k', '𝐥': 'l', '𝐦': 'm', '𝐧': 'n',
    '𝐨': 'o', '𝐩': 'p', '𝐪': 'q', '𝐫': 'r', '𝐬': 's', '𝐭': 't', '𝐮': 'u',
    '𝐯': 'v', '𝐰': 'w', '𝐱': 'x', '𝐲': 'y', '𝐳': 'z',
    // bold (mathematical) - digits
    '𝟎': '0', '𝟏': '1', '𝟐': '2', '𝟑': '3', '𝟒': '4',
    '𝟓': '5', '𝟔': '6', '𝟕': '7', '𝟖': '8', '𝟗': '9',
    // bold italic - upper
    '𝑨': 'A', '𝑩': 'B', '𝑪': 'C', '𝑫': 'D', '𝑬': 'E', '𝑭': 'F', '𝑮': 'G',
    '𝑯': 'H', '𝑰': 'I', '𝑱': 'J', '𝑲': 'K', '𝑳': 'L', '𝑴': 'M', '𝑵': 'N',
    '𝑶': 'O', '𝑷': 'P', '𝑸': 'Q', '𝑹': 'R', '𝑺': 'S', '𝑻': 'T', '𝑼': 'U',
    '𝑽': 'V', '𝑾': 'W', '𝑿': 'X', '𝒀': 'Y', '𝒁': 'Z',
    // bold italic - lower
    '𝒂': 'a', '𝒃': 'b', '𝒄': 'c', '𝒅': 'd', '𝒆': 'e', '𝒇': 'f', '𝒈': 'g',
    '𝒉': 'h', '𝒊': 'i', '𝒋': 'j', '𝒌': 'k', '𝒍': 'l', '𝒎': 'm', '𝒏': 'n',
    '𝒐': 'o', '𝒑': 'p', '𝒒': 'q', '𝒓': 'r', '𝒔': 's', '𝒕': 't', '𝒖': 'u',
    '𝒗': 'v', '𝒘': 'w', '𝒙': 'x', '𝒚': 'y', '𝒛': 'z',
    // sans-serif bold - upper
    '𝗔': 'A', '𝗕': 'B', '𝗖': 'C', '𝗗': 'D', '𝗘': 'E', '𝗙': 'F', '𝗚': 'G',
    '𝗛': 'H', '𝗜': 'I', '𝗝': 'J', '𝗞': 'K', '𝗟': 'L', '𝗠': 'M', '𝗡': 'N',
    '𝗢': 'O', '𝗣': 'P', '𝗤': 'Q', '𝗥': 'R', '𝗦': 'S', '𝗧': 'T', '𝗨': 'U',
    '𝗩': 'V', '𝗪': 'W', '𝗫': 'X', '𝗬': 'Y', '𝗭': 'Z',
    // sans serif bold - lower
    '𝗮': 'a', '𝗯': 'b', '𝗰': 'c', '𝗱': 'd', '𝗲': 'e', '𝗳': 'f', '𝗴': 'g',
    '𝗵': 'h', '𝗶': 'i', '𝗷': 'j', '𝗸': 'k', '𝗹': 'l', '𝗺': 'm', '𝗻': 'n',
    '𝗼': 'o', '𝗽': 'p', '𝗾': 'q', '𝗿': 'r', '𝘀': 's', '𝘁': 't', '𝘂': 'u',
    '𝘃': 'v', '𝘄': 'w', '𝘅': 'x', '𝘆': 'y', '𝘇': 'z',
    // sans serif bold - digits
    '𝟬': '0', '𝟭': '1', '𝟮': '2', '𝟯': '3', '𝟰': '4',
    '𝟱': '5', '𝟲': '6', '𝟳': '7', '𝟴': '8', '𝟵': '9',
    // small caps 
    'ᴀ': 'A', 'ʙ': 'B', 'ᴄ': 'C', 'ᴅ': 'D', 'ᴇ': 'E', 'ғ': 'F', 'ɢ': 'G',
    'ʜ': 'H', 'ɪ': 'I', 'ᴊ': 'J', 'ᴋ': 'K', 'ʟ': 'L', 'ᴍ': 'M', 'ɴ': 'N',
    'ᴏ': 'O', 'ᴘ': 'P', 'ǫ': 'Q', 'ʀ': 'R', 's': 'S', 'ᴛ': 'T', 'ᴜ': 'U',
    'ᴠ': 'V', 'ᴡ': 'W', 'x': 'X', 'ʏ': 'Y', 'ᴢ': 'Z',
    // squared(emoji)
    '🅰': 'A', '🅱': 'B', '🅲': 'C', '🅳': 'D', '🅴': 'E', '🅵': 'F', '🅶': 'G',
    '🅷': 'H', '🅸': 'I', '🅹': 'J', '🅺': 'K', '🅻': 'L', '🅼': 'M', '🅽': 'N',
    '🅾': 'O', '🅿': 'P', '🆀': 'Q', '🆁': 'R', '🆂': 'S', '🆃': 'T', '🆄': 'U',
    '🆅': 'V', '🆆': 'W', '🆇': 'X', '🆈': 'Y', '🆉': 'Z',
};

// FILTER ENGINE
class FilterEngine {
    constructor() {
        this.threshold = 50;
        this.enabled = true;
        this.hiddenCount = 0;
    }

    normalizeFancyText(text) {
        // normalisasi bullet points dan special seperators
        let preprocessed = text
            .replace(/[•·∙⋅°]/g, '') // hapus bullet points dan degree symbol yg dipake sebagai seperator
            .replace(/[\u200b\u200c\u200d\ufeff]/g, '') // hapus zero-width chars
            .replace(/[_\-\.]/g, ''); // hapus common separators

        const normalized = preprocessed.normalize('NFKD');
        let isFancy = false;
        let mapped = '';

        for (const char of normalized) {
            if (FANCY_MAP[char]) {
                mapped += FANCY_MAP[char];
                isFancy = true;
            } else if (char.codePointAt(0) > 127) {
                const stripped = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (stripped !== char) {
                    mapped += stripped;
                    isFancy = true;
                } else {
                    mapped += char;
                }
            } else {
                mapped += char;
            }
        }

        return { normalized: mapped, isFancy };
    }

    calculateScore(text, authorName = '') {
        let score = 0;
        const reasons = [];
        const { normalized, isFancy } = this.normalizeFancyText(text);

        // analisis nama channel
        if (authorName) {
            const normalizedName = this.normalizeFancyText(authorName).normalized.toLowerCase();

            // pattern: "Cari di Google" variations
            if (/(cari|cek|ketik|search|temukan)\s*(di|ke|pada)?\s*g[o0]+g[l1]e/i.test(normalizedName)) {
                score += 100;
                reasons.push(`Suspicious Channel Name: ${authorName}`);
            }

            // pattern: "google" + gambling keyword
            if (/g[o0]+g[l1]e/i.test(normalizedName) &&
                /(slot|gacor|judol|togel|maxwin|zeus|olympus|pragmatic|scatter|depo|wd|link|situs|poker|domino|qq|casino|hoki|garuda|gembira|cuanwin)/i.test(normalizedName)) {
                score += 100;
                reasons.push(`Suspicious Channel Name (Google+Keyword): ${authorName}`);
            }

            // pattern: gambling brand names/keywords in channel name
            if (/(gembira|cuanwin|mpo|hoki|jp|jackpot|slot|gacor|maxwin|scatter|77|88|4d|bet|win|sultan|dewa|raja|king|mega|super|ultra)/i.test(normalizedName)) {
                if (/\d+/.test(normalizedName) || /(gudang|uang|bos|cuan|dana|ovo|gopay|link|situs|resmi|terpercaya)/i.test(normalizedName)) {
                    score += 100;
                    reasons.push(`Suspicious Channel Name (Brand+Sth): ${authorName}`);
                }
            }

            // pattern: "Uang" / "Cuan" / "Dana" in channel name (common in spasm bots)
            if (/(bagi|gudang|sumber|pusat|bandar|agen)\s*[_\-.]?\s*(uang|cuan|dana|saldo|chip)/i.test(normalizedName)) {
                score += 100;
                reasons.push(`Suspicious Channel Name (Money Distribution): ${authorName}`);
            }
        }

        // featere 1: fancy text
        if (isFancy) {
            score += 15;
            reasons.push('Fancy Text Detected');
        }

        // feature 2: hype emoji
        const hypeEmojis = ['🔥', '⚡', '🚀', '💸', '🎰', '💰', '🤑', '💎', '👑', '👹', '👺'];
        let emojiCount = 0;
        for (const emoji of hypeEmojis) {
            if (text.includes(emoji)) emojiCount++;
        }
        if (emojiCount > 0) {
            const points = Math.min(emojiCount * 10, 40);
            score += points;
            reasons.push(`Hype Emojis (+${points})`);
        }

        // feature 3: emoji sandwich
        const trimmed = text.trim();
        if (trimmed.length > 2 && /[^\x00-\x7F]/.test(trimmed[0]) && /[^\x00-\x7F]/.test(trimmed[trimmed.length - 1])) {
            score += 30;
            reasons.push('Emoji Sandwich');
        }

        // feature 4: token anayliss
        const tokens = normalized.split(/\s+/);
        let allCapsScore = 0;

        for (const token of tokens) {
            // all caps + digit
            if (/^[A-Z]{3,}\d{1,4}$/.test(token)) {
                score += 50;
                reasons.push(`Brand Pattern (Caps+Digits): ${token}`);
            }

            // all caps + keyword
            if (/^[A-Z]{3,}(JP|SLOT|BET|WIN|DEWA|MAX|GACOR)$/.test(token)) {
                score += 50;
                reasons.push(`Brand Pattern (Caps+Keyword): ${token}`);
            }

            // leetspeak keyword
            if (/\b(g[4a@]c[0o]r|s[1l][0o]t|j[u0]d[0o][1l]|t[0o]g[3e]l|m[4a]xw[1i]n)\b/i.test(token)) {
                score += 50;
                reasons.push(`Leetspeak Keyword: ${token}`);
            }

            // all caps generics
            if (/^[A-Z]{4,}$/.test(token) && !/\d/.test(token)) {
                if (allCapsScore < 20) {
                    score += 5;
                    allCapsScore += 5;
                    reasons.push(`All Caps Token: ${token}`);
                }
            }
        }

        // disconnected brand pattern
        for (let i = 0; i < tokens.length - 1; i++) {
            const current = tokens[i];
            const next = tokens[i + 1];
            const cleanCurrent = current.replace(/[^A-Za-z0-9]/g, '');
            const cleanNext = next.replace(/[^A-Za-z0-9]/g, '');

            if (/^[A-Z]{3,}$/.test(cleanCurrent)) {
                if (/^(88|138|303|4d|69|\d{2,4})$/i.test(cleanNext)) {
                    score += 50;
                    reasons.push(`Disconnected Brand Pattern: ${cleanCurrent} ${cleanNext}`);
                }
            }
        }

        // feature 5: strong keywords
        const lower = normalized.toLowerCase();
        const cleanText = lower.replace(/[^a-z0-9]/g, '');

        // expanded strong keywords including new gambling brands
        if (/\b(slot|gacor|judol|togel|maxwin|zeus|olympus|pragmatic|scatter|depo|wd|link|situs|poker|domino|qq|casino|hoki|garuda|cuan|saldo|sultan|modal|receh|jp|jackpot|withdraw|deposit|bonus|promo|terpercaya|resmi|gembira|cuanwin|mpo|sensational|starlight|bonanza|mahjong|gates|wild|mania|spin|bet|menang|kemenangan|untung|profit|rtp|winrate|gelora)\b/.test(lower)) {
            score += 50;
            reasons.push('Strong Keyword Match');
        } else if (/(slot|gacor|judol|togel|maxwin|zeus|olympus|pragmatic|scatter|poker|domino|qq|casino|hoki|garuda|cuan|saldo|sultan|jackpot|gembira|cuanwin|mpo)/.test(cleanText)) {
            score += 50;
            reasons.push('Strong Keyword Match (Spaced/Hidden)');
        }

        // brand + 4D/numbers pattern
        if (/[A-Z]{3,}\d{1,4}/.test(normalized) || /\d{1,4}[A-Z]{3,}/.test(normalized)) {
            score += 60;
            reasons.push('Brand+Number Pattern (e.g. XXXX4D)');
        }

        // brand ending with 4D (togel term - "4 Dimensi")
        if (/[A-Z]{3,}4D\b/i.test(normalized) || /[a-z]{3,}4d\b/.test(cleanText)) {
            score += 80;
            reasons.push('Togel 4D Brand Pattern');
        }

        // gambling suffix (added 77, 99, 123, 168, 777)
        if (/\b\w*(77|88|99|123|138|168|303|777|4d|69)\b/.test(lower)) {
            score += 20;
            reasons.push('Gambling Suffix Match');
        }

        // leetspeak on nospaces
        if (/(g[4a@]c[0o]r|s[1l][0o]t|j[u0]d[0o][1l]|t[0o]g[3e]l|m[4a]xw[1i]n)/.test(cleanText)) {
            score += 50;
            reasons.push('Leetspeak Keyword (Spaced/NoSpaces)');
        }

        // obfuscated gacor patterns (geacorrz, gacorrr, g4corr, ghacor, etc)
        if (/(g[e3]?[a4@]c[o0]r+z?|g[a4@]c[o0]r{2,}|gac[0o]rr?|gh[a4]c[o0]r)/.test(cleanText)) {
            score += 60;
            reasons.push('Obfuscated Gacor Pattern');
        }

        // brand + number pattern (GEMBIRA77, HOKI88, etc)
        if (/\b(gembira|hoki|mpo|cuan|jp|jackpot|slot|bet|win|max|sultan|dewa|raja|king|mega|super|ultra)[\s•·]*\d{2,4}\b/i.test(text) ||
            /\b(gembira|hoki|mpo|cuan|jp|jackpot|slot|bet|win|max|sultan|dewa|raja|king|mega|super|ultra)\d{2,4}\b/i.test(cleanText)) {
            score += 70;
            reasons.push('Gambling Brand+Number Pattern');
        }

        // invitation patterns ("cuan mudah", "dapat cuwaan", etc)
        if (/(dapat|dpt|bisa|mudah|gampang|langsung|auto)\s*(cuan|untung|menang|jackpot|jp|wd|withdraw)/i.test(lower) ||
            /(cuan|untung|menang|jackpot|jp)\s*(mudah|gampang|langsung|auto)/i.test(lower)) {
            score += 40;
            reasons.push('Gambling Invitation Pattern');
        }

        return { score, reasons };
    }

    shouldHide(text, authorName) {
        const { score } = this.calculateScore(text, authorName);
        return score >= this.threshold;
    }
}

// MAIN CONTENT SCRIPT
const filterEngine = new FilterEngine();
let processedComments = new WeakSet();
let statsUpdateCallback = null;

// load settings from storage
chrome.storage.sync.get(['enabled', 'threshold'], (result) => {
    filterEngine.enabled = result.enabled !== false; // default true
    if (result.threshold) filterEngine.threshold = result.threshold;
});

// listen for setting changes
chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) filterEngine.enabled = changes.enabled.newValue;
    if (changes.threshold) filterEngine.threshold = changes.threshold.newValue;

    // re-process all comments when settings change
    if (changes.enabled || changes.threshold) {
        resetAndReprocess();
    }
});

function resetAndReprocess() {
    // show all previously hidden comments first
    document.querySelectorAll('.heimdall-hidden').forEach(el => {
        el.classList.remove('heimdall-hidden');
    });

    // reset counter and processed set
    filterEngine.hiddenCount = 0;
    processedComments = new WeakSet();

    // re-process
    processComments();
}

function processComments() {
    if (!filterEngine.enabled) return;

    // youTube comment selectors (multiple for different layouts)
    const commentSelectors = [
        'ytd-comment-renderer',
        'ytd-comment-view-model',
        'ytd-comment-thread-renderer'
    ];

    for (const selector of commentSelectors) {
        const comments = document.querySelectorAll(selector);

        comments.forEach(commentEl => {
            if (processedComments.has(commentEl)) return;
            processedComments.add(commentEl);

            // get comment text
            const textEl = commentEl.querySelector('#content-text, .yt-core-attributed-string');
            const authorEl = commentEl.querySelector('#author-text, .ytd-channel-name');

            if (!textEl) return;

            const text = textEl.innerText || textEl.textContent || '';
            const authorName = authorEl ? (authorEl.innerText || authorEl.textContent || '') : '';

            if (filterEngine.shouldHide(text, authorName)) {
                commentEl.classList.add('heimdall-hidden');
                filterEngine.hiddenCount++;
                updateStats();
            }
        });
    }
}

function updateStats() {
    // send stats to popup if it's open
    chrome.runtime.sendMessage({
        type: 'statsUpdate',
        hiddenCount: filterEngine.hiddenCount
    }).catch(() => {
        // popup not open, ignore error
    });
}

// MUTATION OBSERVER
const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;

    for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
            shouldProcess = true;
            break;
        }
    }

    if (shouldProcess) {
        // debounce processing
        clearTimeout(window.heimdallProcessTimeout);
        window.heimdallProcessTimeout = setTimeout(processComments, 100);
    }
});

// start observing
function startObserver() {
    // observe the main content area
    const targetNode = document.querySelector('ytd-app') || document.body;

    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });

    // initial process
    processComments();
}

// wait for page to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
} else {
    startObserver();
}

// process on scroll (for infinite loading)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(processComments, 200);
}, { passive: true });

// listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getStats') {
        sendResponse({ hiddenCount: filterEngine.hiddenCount });
    }
    return true;
});

console.log('HeimdallScan: YouTube Judol Filter aktif!');
