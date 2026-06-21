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

# 📁 Panduan Lengkap Folder `assets/images/`

Folder ini berisi semua aset visual untuk website OZ Creative Agency: logo, favicon, foto founder, dan screenshot project. Dokumen ini menjelaskan **semua yang sudah ada** dan **semua yang masih perlu kamu tambahkan sendiri**.

---

## 1️⃣ Logo — SUDAH SELESAI ✅

Logo asli yang kamu kasih sudah diproses dan dipasang di seluruh website. Tidak perlu kamu apa-apakan lagi.

| File | Dipakai di mana | Ukuran |
|---|---|---|
| `logo-oz-mark-transparent.png` | Navbar (semua 11 halaman) + about-section di index.html | 400×227px |
| `favicon.ico` | Tab browser (format lama, kompatibilitas) | 16/32/48px multi-size |
| `favicon-16.png` | Tab browser | 16×16px |
| `favicon-32.png` | Tab browser | 32×32px |
| `apple-touch-icon.png` | iOS "Add to Home Screen" | 180×180px |
| `icon-192.png` | PWA / Android home screen | 192×192px |
| `icon-512.png` | PWA / Android home screen | 512×512px |
| `og-image.png` | Preview saat link di-share ke WhatsApp/Twitter/LinkedIn/Discord | 1200×630px |

**Riwayat:** Versi pertama logo ini sempat ke-crop salah (lingkaran "O" dan kaki huruf "Z" terpotong di bagian bawah). Sudah diperbaiki dengan deteksi batas logo otomatis dari file asli — sekarang semua bentuk huruf 100% utuh di semua ukuran.

### 📦 Logo Kit Tambahan
Folder `logo-kit/` berisi **11 varian logo** untuk kebutuhan di luar website (kartu nama, dokumen, media sosial, presentasi, dll). Penjelasan lengkap tiap varian ada di `logo-kit/README.md`.

---

## 2️⃣ Foto Founder — PERLU KAMU TAMBAHKAN ⚠️

**Taruh file di folder ini (`assets/images/`) dengan nama PERSIS seperti berikut:**

| Nama File | Untuk Siapa | Muncul di Halaman |
|---|---|---|
| `foto-opayy.jpg` | Naufal (Opayy) | index.html, founder-opayy.html, contact.html |
| `foto-zenn.jpg` | Reza (Zenn) | index.html, founder-zenn.html, contact.html |

**Spesifikasi yang disarankan:**
- Rasio persegi (1:1) atau potret (4:5)
- Minimal 600×600px (biar tidak pecah saat kena animasi scan-line & efek tilt 3D)
- Format `.jpg`, `.jpeg`, `.png`, atau `.webp` (kalau bukan `.jpg`, edit atribut `src=""` di file HTML terkait)

**Kalau belum sempat upload:** website otomatis menampilkan fallback berupa inisial huruf besar ("N" untuk Opayy, "R" untuk Zenn) dalam lingkaran — tetap terlihat rapi, bukan error.

---

## 3️⃣ Screenshot Project — STATUS KAMU BILANG SUDAH ADA ✅

**Nama file yang dicari sistem (taruh di folder ini juga):**

| Nama File | Untuk Project |
|---|---|
| `img-axeon.jpg` | Axeon Management Protocol |
| `img-stackblock.jpg` | Stack Block Arcade |
| `img-veritas.jpg` | VeritasVote |
| `img-sovereign.jpg` | Sovereign Intelligence |

**Spesifikasi yang disarankan:** rasio 4:3, minimal 800×600px.

Kalau filenya belum persis sama namanya dengan tabel di atas, sistem tidak akan menemukannya dan otomatis tampilkan fallback singkatan huruf (AX, SB, VV, SI). Cek dulu nama filenya sudah sama persis (termasuk huruf besar/kecil).

---

## 4️⃣ Yang TIDAK Perlu Disentuh

Semua file di folder `_source/` adalah file kerja internal (resolusi tinggi, dipakai untuk generate semua logo turunan di atas). Tidak dipanggil langsung oleh website, aman untuk diabaikan — disimpan saja sebagai arsip kalau suatu saat perlu re-generate ulang.

---

## ⚠️ 5️⃣ WAJIB DICEK SEBELUM WEBSITE GO-LIVE

Dua hal ini **di luar folder gambar**, tapi penting untuk fungsi website:

### A. Web3Forms Access Key (supaya form contact beneran terkirim)
**File:** `js/form.js`, baris ke-12:
```js
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
```
**Cara dapat key (gratis, ±1 menit, tanpa daftar akun):**
1. Buka https://web3forms.com
2. Masukkan email tujuan kamu
3. Klik "Create Access Key"
4. Copy key, paste menggantikan `'YOUR_ACCESS_KEY_HERE'`

Tanpa ini, form contact akan gagal terkirim kalau ada yang submit.

### B. Domain asli di file SEO
File `robots.txt`, `sitemap.xml`, dan tag `<link rel="canonical">` / `<meta property="og:url">` di setiap halaman HTML masih pakai domain placeholder `https://ozcreative.agency`. Kalau sudah deploy ke domain asli, cari-ganti semua kemunculannya.

Boleh dilewati dulu kalau website ini masih untuk keperluan tugas kuliah dan belum di-deploy ke domain publik.

---

## 📋 Ringkasan Checklist

- [x] Logo OZ Creative Agency (sudah terpasang, sudah diperbaiki)
- [x] Favicon & icon (sudah otomatis dari logo)
- [x] OG image untuk share link (sudah otomatis dari logo)
- [ ] Foto Opayy → `foto-opayy.jpg`
- [ ] Foto Zenn → `foto-zenn.jpg`
- [ ] Screenshot 4 project → `img-axeon.jpg`, `img-stackblock.jpg`, `img-veritas.jpg`, `img-sovereign.jpg`
- [ ] Web3Forms access key di `js/form.js`
- [ ] (opsional) Ganti domain placeholder kalau sudah deploy


# Logo Kit — OZ Creative Agency

Semua varian logo diturunkan dari logo asli kamu (sudah di-crop ulang dengan benar — lingkaran "O" dan huruf "Z" sekarang utuh 100%, tidak ada bagian yang terpotong). Logo yang dipakai DI WEB sendiri ada di `../logo-oz-mark-transparent.png` (satu folder di atas), tidak perlu diutak-atik.

## 📋 Daftar lengkap & kapan dipakai

| File | Ukuran | Kapan dipakai |
|---|---|---|
| `logo-mark-color-transparent.png` | 900×510px | Mark "OZ" saja (tanpa wordmark), background transparan, warna asli. Paling fleksibel — bisa ditaruh di atas apa saja. |
| `logo-mark-mono-black.png` | 900×510px | Versi hitam solid. Untuk dokumen hitam-putih, cetak 1 warna, watermark, stempel. |
| `logo-mark-mono-white.png` | 900×510px | Versi putih solid (transparan di belakang). Untuk dipakai di atas foto atau background gelap/berwarna. |
| `logo-mark-color-on-dark.png` | 1000×640px | Mark warna asli, sudah dengan background ink solid — siap pakai langsung tanpa perlu mikirin kontras. |
| `logo-mark-color-on-light.png` | 1000×640px | Mark warna asli, sudah dengan background bone-white solid — siap pakai langsung. |
| `logo-full-color-transparent.png` | ~1000×777px | Mark + tulisan "CREATIVE AGENCY" + garis bawah rust, background transparan. Versi paling formal/lengkap. |
| `logo-horizontal-transparent.png` | 1000×245px | Mark di kiri, "OZ Creative Agency" + tagline di kanan. Background transparan. Cocok untuk kop surat, header dokumen, banner lebar. |
| `logo-horizontal-on-light.png` | 1000×245px | Sama seperti di atas, tapi sudah ada background bone-white solid. |
| `logo-stacked-transparent.png` | 632×508px | Mark di atas, teks di tengah-bawah. Background transparan. Cocok untuk poster, cover dokumen, slide presentasi. |
| `logo-stacked-on-light.png` | 632×508px | Sama seperti di atas, dengan background bone-white solid. |
| `logo-social-profile-square.png` | 800×800px | Khusus untuk foto profil media sosial (Twitter/X, Telegram, Discord, LinkedIn, GitHub org) — mark diposisikan aman di tengah supaya tidak terpotong saat di-crop bulat oleh platform. |

## 🎯 Rekomendasi penggunaan cepat

- **Foto profil Twitter/Telegram/Discord/LinkedIn** → `logo-social-profile-square.png`
- **Kop surat / proposal / dokumen Word/PDF** → `logo-horizontal-transparent.png`
- **Cover slide presentasi** → `logo-stacked-transparent.png`
- **Watermark di atas foto gelap** → `logo-mark-mono-white.png`
- **Watermark di atas foto terang** → `logo-mark-mono-black.png`
- **Kartu nama / desain bebas** → `logo-mark-color-transparent.png`
- **Stiker/merchandise 1 warna** → `logo-mark-mono-black.png`

## ⚠️ Catatan
Semua background "transparent" sebenarnya punya area dalam huruf **O** dan garis ganda di **Z** yang TIDAK transparan (tetap solid) — ini supaya bentuk hurufnya tidak "bolong" kalau ditaruh di atas foto atau warna apa pun. Itu memang desain aslinya, bukan bug.

## ✅ Riwayat perbaikan
Versi sebelumnya dari kit ini punya bug crop — bagian bawah lingkaran "O" dan kaki huruf "Z" terpotong karena garis potong (crop line) salah hitung. Sudah diperbaiki dengan deteksi gap otomatis dari source logo asli; sekarang semua bentuk huruf 100% utuh di semua varian.