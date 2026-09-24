# Frans Putra Sinaga — IT Infrastructure Portfolio

Portfolio profesional berbasis Next.js + Tailwind CSS, dengan desain dark/futuristic yang responsif.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Deploy ke GitHub

```bash
git init
git add .
git commit -m "feat: create Frans Putra Sinaga portfolio"
git branch -M main
git remote add origin https://github.com/namasayafrans/portfolio.git
git push -u origin main
```

Jika repository belum dibuat, buat repository baru di GitHub terlebih dahulu. Nama repository bebas, misalnya `portfolio`.

## Deploy ke Vercel

1. Login ke Vercel dengan GitHub.
2. Pilih **Add New Project** lalu import repository portfolio.
3. Vercel akan mendeteksi Next.js. Gunakan pengaturan default.
4. Klik **Deploy**.
5. Setiap push baru ke branch yang terhubung dapat memicu deployment baru.

## Catatan sebelum dipublikasikan

- Ganti `fransputra.sinaga@example.com` di `app/page.tsx` dengan email asli.
- Ganti link Facebook placeholder `https://facebook.com/` dengan URL profil Facebook asli.
- Isi tiga kartu sertifikasi dengan nama sertifikat, penerbit, tahun, dan link credential bila ada.
- Jika ingin menambahkan foto profil, letakkan file di `public/profile.jpg` lalu tambahkan komponen gambar pada hero.

## Dokumen sertifikat

Folder `public/certificates` berisi tiga dokumen yang ditampilkan pada portfolio:
- Surat Keterangan Lulus S1 Teknik Informatika (2026)
- Sertifikat Keahlian Teknik Komputer dan Jaringan
- Surat Keterangan PKL PT Suzuki Indomobil Motor

Preview publik telah disanitasi pada area data identitas tertentu. Jika ingin mengganti dengan versi asli, pastikan data pribadi seperti NIK/NIM/tanggal lahir memang aman untuk dipublikasikan.


### Project gallery
- Screenshot project ditampilkan dalam satu carousel/box.
- Navigasi memakai tombol kiri/kanan dan indikator slide.
- Tidak auto-slide; user mengontrol perpindahan gambar.
- Gambar menggunakan `object-contain` agar seluruh screenshot tetap terlihat.
- Klik gambar untuk membuka preview ukuran besar.
