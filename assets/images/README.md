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