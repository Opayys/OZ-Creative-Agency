# OZ Creative Agency — Website

Website resmi OZ Creative Agency (Opayy × Zenn) — Fullstack, AI Engineering, dan Blockchain. Dibangun dengan HTML/CSS/JS murni (tanpa framework, tanpa build step), siap deploy ke hosting statis manapun.

**Konsep desain:** "Build Log" — palet bone-white + ink hitam + moss green + burnt rust, tipografi Space Grotesk/IBM Plex, layout flat tanpa gradient, terinspirasi dari commit log / ledger on-chain. Bilingual (Indonesia/English), full animasi, 3D node network di canvas, dan dua founder profile + empat halaman detail project.

---

## 📁 STRUKTUR FOLDER LENGKAP

```
oz-creative-agency/
│
├── index.html                      ← Beranda
├── projects.html                   ← Daftar 4 project (index, link ke detail)
├── services.html                   ← Layanan, tech stack, alur kerja
├── contact.html                    ← Form kontak + info founder
├── founder-opayy.html              ← Profil lengkap Naufal (Opayy)
├── founder-zenn.html               ← Profil lengkap Reza (Zenn)
├── project-axeon.html              ← Detail Axeon Management Protocol
├── project-stackblock.html         ← Detail Stack Block Arcade
├── project-veritasvote.html        ← Detail VeritasVote
├── project-sovereign.html          ← Detail Sovereign Intelligence
├── 404.html                        ← Halaman error custom
│
├── robots.txt                      ← Aturan crawler search engine
├── sitemap.xml                     ← Peta situs untuk SEO
├── site.webmanifest                ← Konfigurasi PWA/home-screen
│
├── css/
│   ├── tokens.css                  ← Variabel warna, font, spacing
│   ├── base.css                    ← Reset & typography dasar
│   ├── components.css              ← Nav, button, chip, ledger, cursor, footer
│   └── pages.css                   ← Style spesifik tiap halaman
│
├── js/
│   ├── nav.js                      ← Scroll state navbar + menu mobile
│   ├── transition.js               ← Efek curtain transisi antar halaman
│   ├── reveal.js                   ← Scroll reveal animation
│   ├── counter.js                  ← Animasi angka statistik
│   ├── tilt.js                     ← Efek 3D tilt + glare di card
│   ├── cursor.js                   ← Custom cursor dot magnetik
│   ├── scramble.js                 ← Efek decode/scramble di headline
│   ├── magnetic.js                 ← Tombol "menempel" ke kursor
│   ├── scene3d.js                  ← 3D wireframe node network (canvas, no library)
│   ├── i18n.js                     ← Sistem dwi-bahasa ID/EN
│   ├── filter.js                   ← Filter tab di halaman projects
│   └── form.js                     ← Validasi & submit form contact (Web3Forms)
│
└── assets/images/
    │
    ├── README.md                            ← Panduan lengkap folder gambar
    │
    ├── foto-opayy.jpg                       ⚠️ BELUM ADA — kamu upload sendiri
    ├── foto-zenn.jpg                        ⚠️ BELUM ADA — kamu upload sendiri
    ├── img-axeon.jpg                        ⚠️ BELUM ADA — kamu upload sendiri
    ├── img-stackblock.jpg                   ⚠️ BELUM ADA — kamu upload sendiri
    ├── img-veritas.jpg                      ⚠️ BELUM ADA — kamu upload sendiri
    ├── img-sovereign.jpg                    ⚠️ BELUM ADA — kamu upload sendiri
    │
    ├── logo-oz-mark-transparent.png         ✅ Logo utama (navbar + about-section)
    ├── favicon.ico                          ✅ Favicon (multi-size)
    ├── favicon-16.png                       ✅ Favicon 16px
    ├── favicon-32.png                       ✅ Favicon 32px
    ├── apple-touch-icon.png                 ✅ iOS home-screen icon
    ├── icon-192.png                         ✅ PWA icon kecil
    ├── icon-512.png                         ✅ PWA icon besar
    ├── og-image.png                         ✅ Preview saat link di-share
    │
    ├── logo-kit/                            ← Logo untuk kebutuhan DI LUAR web
    │   ├── README.md                        ← Penjelasan tiap varian
    │   ├── logo-mark-color-transparent.png  ← Mark warna, transparan
    │   ├── logo-mark-mono-black.png         ← Mark hitam solid
    │   ├── logo-mark-mono-white.png         ← Mark putih solid
    │   ├── logo-mark-color-on-dark.png      ← Mark + background ink siap pakai
    │   ├── logo-mark-color-on-light.png     ← Mark + background paper siap pakai
    │   ├── logo-full-color-transparent.png  ← Mark + wordmark "CREATIVE AGENCY"
    │   ├── logo-horizontal-transparent.png  ← Lockup horizontal (kop surat)
    │   ├── logo-horizontal-on-light.png     ← Sama, dengan background
    │   ├── logo-stacked-transparent.png     ← Lockup vertikal (slide/poster)
    │   ├── logo-stacked-on-light.png        ← Sama, dengan background
    │   └── logo-social-profile-square.png   ← Foto profil medsos (800×800px)
    │
    └── _source/                             ← Arsip resolusi tinggi (jangan diapa-apakan)
        ├── logo-oz-master.png                ← Logo asli yang kamu upload
        ├── logo-mark-rgb.png                 ← Mark hasil crop, background masih solid
        ├── logo-mark-transparent-fullres.png ← Mark transparan, resolusi penuh
        └── logo-full-transparent-fullres.png ← Full lockup transparan, resolusi penuh
```

**Total: 55 file** (11 halaman HTML, 4 CSS, 12 JS, 8 asset sistem di root images, 12 file logo-kit, 4 file source, 3 file config, 3 README).

---

## ⚠️ APA YANG WAJIB KAMU LAKUKAN SEBELUM GO-LIVE

### 1. Upload foto founder & screenshot project
Taruh di `assets/images/`, nama file **harus persis**:

| File | Isi |
|---|---|
| `foto-opayy.jpg` | Foto Naufal (Opayy) |
| `foto-zenn.jpg` | Foto Reza (Zenn) |
| `img-axeon.jpg` | Screenshot Axeon Management Protocol |
| `img-stackblock.jpg` | Screenshot Stack Block Arcade |
| `img-veritas.jpg` | Screenshot VeritasVote |
| `img-sovereign.jpg` | Visual Sovereign Intelligence |

Tanpa file ini, website tetap jalan normal — otomatis fallback ke inisial huruf dalam kotak/lingkaran, bukan error.

### 2. Aktifkan form contact (Web3Forms)
**File:** `js/form.js`, baris ke-12:
```js
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
```
**Cara dapat key (gratis, ±1 menit, tanpa daftar akun):**
1. Buka https://web3forms.com
2. Masukkan email tujuan kamu
3. Klik "Create Access Key"
4. Copy key, paste menggantikan `'YOUR_ACCESS_KEY_HERE'`

Tanpa ini, form contact akan gagal terkirim.

### 3. (Opsional) Ganti domain placeholder
File `robots.txt`, `sitemap.xml`, dan tag `<link rel="canonical">` / `<meta property="og:url">` di setiap halaman HTML memakai domain placeholder `https://ozcreative.agency`. Setelah deploy dan punya domain asli (termasuk domain gratis dari Vercel seperti `nama-project.vercel.app`), cari-ganti semua kemunculannya. Boleh dilewati dulu — tidak bikin website error, cuma SEO belum 100% optimal.

---

## 🚀 CARA DEPLOY KE VERCEL (Gratis, ±5 Menit)

Vercel cocok untuk project ini karena website ini murni HTML/CSS/JS statis — tidak butuh server, database, atau build process apa pun.

### Opsi A — Lewat Website Vercel (Tanpa Install Apa-apa, Paling Gampang)

1. **Siapkan folder project**
   Pastikan semua file (termasuk folder `css/`, `js/`, `assets/`) ada dalam satu folder bernama `oz-creative-agency` di komputer kamu.

2. **Buat akun Vercel**
   Buka https://vercel.com → klik **Sign Up** → daftar pakai email atau akun GitHub (disarankan pakai GitHub kalau kamu punya, supaya lebih gampang update nanti).

3. **Upload project**
   - Setelah login, klik **Add New...** → **Project**
   - Kalau pakai GitHub: push folder project ke repository GitHub baru dulu, lalu klik **Import** repository tersebut di Vercel
   - Kalau tanpa GitHub: scroll ke opsi **Deploy without Git** atau drag-and-drop folder project langsung ke halaman upload Vercel

4. **Konfigurasi build (PENTING — untuk static HTML)**
   Saat Vercel tanya soal *Framework Preset*, pilih **Other** (bukan Next.js/React/dll). Kosongkan bagian:
   - **Build Command** → kosongkan
   - **Output Directory** → kosongkan / biarkan default (`.`)
   - **Install Command** → kosongkan

   Karena ini static site murni, Vercel tidak perlu build apa pun — tinggal serve file apa adanya.

5. **Klik Deploy**
   Tunggu ±30 detik–1 menit. Vercel otomatis kasih kamu URL gratis seperti:
   ```
   https://oz-creative-agency.vercel.app
   ```

6. **Cek hasilnya**
   Buka URL itu, pastikan semua halaman (navbar, animasi, form) jalan normal.

### Opsi B — Lewat Command Line (Vercel CLI)

Kalau kamu familiar dengan terminal:

```bash
# 1. Install Vercel CLI (sekali saja)
npm install -g vercel

# 2. Masuk ke folder project
cd oz-creative-agency

# 3. Jalankan deploy
vercel

# Ikuti instruksi di terminal:
# - Login/daftar kalau belum
# - "Set up and deploy?" → Y
# - "Which scope?" → pilih akun kamu
# - "Link to existing project?" → N (kalau project baru)
# - "What's your project's name?" → oz-creative-agency (atau nama lain)
# - "In which directory is your code located?" → ./ (folder saat ini)
# - Vercel akan deteksi otomatis ini static site, langsung deploy

# 4. Untuk deploy ke production (URL permanen, bukan preview)
vercel --prod
```

### Setelah Deploy: Custom Domain (Opsional)
Kalau kamu punya domain sendiri (misal `ozcreative.agency` beneran):
1. Buka project kamu di dashboard Vercel
2. Masuk tab **Settings** → **Domains**
3. Masukkan domain kamu, ikuti instruksi untuk update DNS record di registrar domain kamu (biasanya tambah CNAME atau A record)
4. Tunggu propagasi DNS (bisa beberapa menit sampai 24 jam)

### Update Website Setelah Deploy
- **Kalau pakai GitHub:** tinggal `git push` perubahan baru, Vercel otomatis re-deploy
- **Kalau pakai drag-and-drop/CLI:** ulangi proses upload/`vercel --prod` setiap ada perubahan

---

## 🌐 Alternatif Hosting Gratis Lain (Kalau Tidak Pakai Vercel)

Karena ini static site murni, semua platform berikut juga bisa dipakai dengan cara serupa:

| Platform | Cara | Catatan |
|---|---|---|
| **Netlify** | Drag-and-drop folder ke https://app.netlify.com/drop | Sama gampangnya dengan Vercel |
| **GitHub Pages** | Push ke repo GitHub → Settings → Pages → pilih branch | Gratis, tapi URL formatnya `username.github.io/repo` |
| **Cloudflare Pages** | Connect repo GitHub atau upload langsung | Performa CDN bagus |

---

## 🛠️ Menjalankan di Lokal (Sebelum Deploy, untuk Testing)

Karena tidak ada build process, kamu bisa langsung buka `index.html` di browser. Tapi untuk fitur yang butuh server (seperti routing relative path yang konsisten), disarankan pakai local server sederhana:

```bash
# Kalau punya Python:
cd oz-creative-agency
python3 -m http.server 8000
# Buka http://localhost:8000

# Atau kalau punya Node.js:
npx serve .
```

---

## 📋 CHECKLIST FINAL

- [x] 11 halaman HTML — semua tag seimbang, semua link resolve
- [x] 4 file CSS — semua brace seimbang
- [x] 12 file JS — semua lolos syntax check
- [x] Logo lengkap (web + logo-kit + source) — sudah diperbaiki, tidak ada yang terpotong
- [x] Favicon, OG image, PWA manifest — sudah otomatis dari logo
- [x] SEO dasar (robots.txt, sitemap.xml, meta tags) — sudah terpasang
- [x] Aksesibilitas dasar (alt text, skip-link, aria-label) — sudah terpasang
- [ ] Foto founder & screenshot project — **kamu upload manual**
- [ ] Web3Forms access key — **kamu isi manual**
- [ ] Deploy ke Vercel — **ikuti panduan di atas**
- [ ] (Opsional) Domain asli & ganti placeholder URL

---

**Dibangun oleh Opayy × Zenn — OZ Creative Agency, Jambi, Indonesia.**
