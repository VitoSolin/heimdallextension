# Unduh Cepat
https://cdn.jasasolin.com/projects/heimdall/heimdall-extension.zip

# HeimdallScan - YouTube Judol Filter Extension

Chrome extension untuk menyembunyikan komentar judi online (judol) di YouTube secara otomatis.

## Fitur

- **Filter Otomatis**: Menyembunyikan komentar yang terdeteksi sebagai judol berdasarkan scoring system
- **Deteksi Canggih**: 
  - Fancy text/unicode (𝓪𝓫𝓬, 𝐀𝐁𝐂, dll)
  - Leetspeak & Obfuscation (g4c0r, ghacor, geacorrz, dll)
  - Brand patterns (XXXX4D, SLOT88, GEMBIRA77, dll)
  - Separator removal (GEMBIRA•7•7, GEMBIRA°7°7)
  - Emoji spam detection
  - Suspicious channel names (@BRAND77_Gudang_Uang, dll)
- **Ringan**: Tidak ada request ke server, murni DOM manipulation
- **Dapat Disesuaikan**: Atur sensitivitas filter sesuai kebutuhan

## Instalasi (Developer Mode)

1. Buka Chrome dan navigasi ke `chrome://extensions/`
2. Aktifkan **Developer mode** di pojok kanan atas
3. Klik **Load unpacked**
4. Pilih folder `extension` dari repository ini
5. Extension siap digunakan!

## Cara Penggunaan

1. Kunjungi halaman video YouTube
2. Extension akan otomatis memfilter komentar judol
3. Klik icon extension untuk:
   - Melihat jumlah komentar yang disembunyikan
   - Toggle filter on/off
   - Mengatur sensitivitas (threshold)

## Struktur File

```
extension/
├── manifest.json    # Konfigurasi extension (Manifest V3)
├── content.js       # Script yang diinject ke YouTube
├── styles.css       # Styling untuk hidden comments
├── popup.html       # UI popup extension
├── popup.js         # Logic popup
└── icons/
    └── icon.svg     # Icon extension
```

## Cara Kerja

Extension ini **TIDAK** melakukan scraping atau request API. Ini murni manipulasi DOM:

1. Content script (`content.js`) diinject ke halaman YouTube
2. `MutationObserver` memantau komentar baru yang di-load
3. Setiap komentar diperiksa dengan scoring system
4. Komentar dengan score >= threshold disembunyikan (`display: none`)

### Scoring System

| Fitur | Poin |
|-------|------|
| Fancy text | +15 |
| Hype emojis (🔥💰🎰) | +10 each (max 40) |
| Emoji sandwich | +30 |
| Brand+digits (SLOT88, GEMBIRA77) | +50-70 |
| Strong keywords (slot, gacor, togel) | +50 |
| Leetspeak (g4c0r) / Obfuscation (geacorrz) | +50-60 |
| Suspicious channel name | +100 |

Default threshold: **50 poin** = komentar disembunyikan

## Privacy

- Tidak ada data yang dikirim ke server manapun
- Semua processing dilakukan lokal di browser
- Hanya memerlukan akses ke youtube.com

## License

MIT License
