# Logo OZ Creative Agency

Logo asli sudah terpasang di seluruh website — desain monogram "OZ" dengan motif circuit-board hijau moss dan titik merah rust, dipakai konsisten di navbar, about section, dan semua social-share image.

| File | Dipakai di | Catatan |
|---|---|---|
| `logo-oz-mark-transparent.png` | Navbar (semua halaman) + about-stamp di index.html | Background transparan, siap pakai di atas warna apa pun |
| `favicon.ico`, `favicon-16.png`, `favicon-32.png` | Tab browser | Auto-generated dari logo asli, background bone-white |
| `apple-touch-icon.png` | iOS "Add to Home Screen" | 180×180px |
| `icon-192.png`, `icon-512.png` | PWA / Android home screen | Dari `site.webmanifest` |
| `og-image.png` | Preview saat link di-share ke WhatsApp/Twitter/LinkedIn/Discord | 1200×630px, logo di atas card bone-white supaya kontras tetap jelas di background gelap |

Folder `_source/` berisi file resolusi tinggi asli (logo master, full lockup dengan wordmark, mark-only sebelum dikompres) — disimpan untuk arsip kalau suatu saat perlu generate ulang asset dengan ukuran/treatment berbeda. Tidak ada file di `_source/` yang dipanggil langsung oleh halaman web manapun, jadi aman dihapus kalau mau menghemat ruang.

**Kalau mau ganti logo di masa depan:** ganti `logo-oz-mark-transparent.png` dengan versi baru (background transparan, mark-only tanpa wordmark teks), lalu jalankan ulang proses crop/resize serupa untuk regenerate favicon & OG image — atau cukup minta bantuan re-generate dari source baru.

---

# Foto Founder

Taruh file di folder ini (`assets/images/`) dengan nama PERSIS seperti berikut:

| Nama File | Dipakai untuk |
|---|---|
| `foto-opayy.jpg` | Foto Naufal (Opayy) — index.html, founder-opayy.html, contact.html. Animasi scan-line moss green. |
| `foto-zenn.jpg` | Foto Reza (Zenn) — index.html, founder-zenn.html, contact.html. Animasi scan-line rust orange. |

# Screenshot Project

| Nama File | Dipakai untuk |
|---|---|
| `img-axeon.jpg` | Screenshot/mockup Axeon Management Protocol |
| `img-stackblock.jpg` | Screenshot Stack Block Arcade |
| `img-veritas.jpg` | Screenshot VeritasVote |
| `img-sovereign.jpg` | Visual Sovereign Intelligence |

## Catatan
- Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp` (kalau pakai ekstensi selain `.jpg`, edit `src=""` di file HTML terkait)
- Kalau file belum ada, website otomatis tampilkan fallback inisial huruf besar — tetap rapi meski belum ada gambar
- Disarankan ukuran foto founder: persegi (1:1) atau potret (4:5), minimal 600×600px — biar tidak pecah saat di-scan-animasi & tilt 3D
- Disarankan ukuran screenshot project: rasio 4:3, minimal 800×600px

---

# ⚠️ WAJIB DIGANTI SEBELUM GO-LIVE

### 1. Web3Forms Access Key (supaya form contact beneran terkirim)
Form contact pakai [Web3Forms](https://web3forms.com) — gratis, tanpa backend sendiri.

**Cara setup (± 1 menit):**
1. Buka https://web3forms.com
2. Masukkan email tujuan kamu
3. Klik "Create Access Key" — tidak perlu daftar akun
4. Copy access key, buka `js/form.js`, cari:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
   ```
5. Ganti dengan key asli kamu

### 2. Domain asli di SEO files
`robots.txt`, `sitemap.xml`, dan meta tag `og:url`/`canonical` di setiap halaman HTML memakai domain placeholder `https://ozcreative.agency`. Kalau deploy ke domain lain, cari-ganti semua kemunculannya dengan domain asli kamu di:
- `robots.txt`
- `sitemap.xml`
- Tag `<link rel="canonical">` dan `<meta property="og:url">` di setiap file `.html`


# Logo Kit — OZ Creative Agency

Semua varian logo yang diturunkan dari logo asli kamu, siap pakai untuk kebutuhan di luar website (kartu nama, dokumen, media sosial, dll). Logo yang dipakai DI WEB sendiri ada di `../logo-oz-mark-transparent.png` (satu folder di atas), tidak perlu diutak-atik.

## 📋 Daftar lengkap & kapan dipakai

| File | Ukuran | Kapan dipakai |
|---|---|---|
| `logo-mark-color-transparent.png` | 900×431px | Mark "OZ" saja (tanpa wordmark), background transparan, warna asli. Paling fleksibel — bisa ditaruh di atas apa saja. |
| `logo-mark-mono-black.png` | 900×431px | Versi hitam solid. Untuk dokumen hitam-putih, cetak 1 warna, watermark, stempel. |
| `logo-mark-mono-white.png` | 900×431px | Versi putih solid (transparan di belakang). Untuk dipakai di atas foto atau background gelap/berwarna. |
| `logo-mark-color-on-dark.png` | 1000×555px | Mark warna asli, sudah dengan background ink solid — siap pakai langsung tanpa perlu mikirin kontras. |
| `logo-mark-color-on-light.png` | 1000×555px | Mark warna asli, sudah dengan background bone-white solid — siap pakai langsung. |
| `logo-full-color-transparent.png` | 939×725px | Mark + tulisan "CREATIVE AGENCY" + garis bawah, background transparan. Versi paling formal/lengkap. |
| `logo-horizontal-transparent.png` | 1000×234px | Mark di kiri, "OZ Creative Agency" + tagline di kanan. Background transparan. Cocok untuk kop surat, header dokumen, banner lebar. |
| `logo-horizontal-on-light.png` | 1000×234px | Sama seperti di atas, tapi sudah ada background bone-white solid. |
| `logo-stacked-transparent.png` | 704×508px | Mark di atas, teks di tengah-bawah. Background transparan. Cocok untuk poster, cover dokumen, slide presentasi. |
| `logo-stacked-on-light.png` | 704×508px | Sama seperti di atas, dengan background bone-white solid. |
| `logo-social-profile-square.png` | 800×800px | Khusus untuk foto profil media sosial (Twitter/X, Telegram, Discord, LinkedIn, GitHub org) — mark diposisikan aman di tengah supaya tidak terpotong saat di-crop bulat oleh platform. |

## 🎯 Rekomendasi penggunaan cepat

- **Foto profil Twitter/Telegram/Discord/LinkedIn** → `logo-social-profile-square.png`
- **Kop surat / proposal / dokumen Word/PDF** → `logo-horizontal-transparent.png`
- **Cover slide presentasi / pitch deck** → `logo-stacked-transparent.png`
- **Watermark di foto/video** → `logo-mark-mono-white.png` (kalau di atas foto gelap) atau `logo-mark-mono-black.png` (kalau di atas foto terang)
- **Kartu nama** → `logo-mark-color-transparent.png` (taruh manual di desain kartu nama kamu)
- **Stiker/merchandise 1 warna** → `logo-mark-mono-black.png`

## ⚠️ Catatan
Semua background "transparent" sebenarnya punya area dalam huruf **O** dan garis ganda di **Z** yang TIDAK transparan (tetap solid) — ini supaya bentuk hurufnya tidak "bolong" kalau ditaruh di atas foto atau warna apa pun. Itu memang desain aslinya, bukan bug.