📅 Jurnal Perkembangan & Troubleshooting Log

📌 MINGGU 1: SETUP DATABASE, ENVIRONMENT & DOCUMENTATION
 🗓️ 06 Oktober 2026
Kategori Work Log: Project Planning & Database Initialization
Aktivitas:
  * Menyusun dokumen PRD Mini (*Product Requirement Document*) sebagai landasan proyek.
  * Melakukan instalasi engine PostgreSQL lokal dan menginisialisasi database `TAPAKE`.
  * Membuat perancangan *wireframe* antarmuka web awal.
  * Install runtime environment Node.js pendukung proyek.
Problem & Resolution Log:
  Issue: `ERROR: syntax error at or near "(" LINE 5: harga INT (50) NOT NULL`
  Penyebab: Penulisan tipe data `INT` pada PostgreSQL tidak memerlukan presisi/panjang karakter seperti `INT(50)`.
  Solusi: Mengubah sintaks query SQL pembuatan tabel `sepatu` menjadi `harga INT NOT NULL`.

🗓️ 07 Oktober 2026
Kategori Work Log: Documentation Framework & Version Control
Aktivitas:
  * Inisialisasi framework Docusaurus untuk kebutuhan dokumentasi teknis proyek.
  * Install Git lokal dan membuat repository publik GitHub `Josjis_framework`.
  * Menghubungkan Docusaurus ke GitHub dan melakukan *initial commit/push* ke branch `main`.

📌 MINGGU 2: KOLABORASI TIM & STRUKTUR ARSITEKTUR

 🗓️ 13 Oktober 2026
Kategori Work Log: Team Collaboration Setup
Aktivitas:
  * Mengundang seluruh anggota kelompok sebagai kolaborator repository GitHub dan mengonfigurasi hak akses tim.

 🗓️ 14 Oktober 2026
Kategori Work Log: Project Task Management
Aktivitas:
  * Mengonfigurasi papan *Kanban Board* di Trello (`josjis_framework`) untuk alur pembagian tugas tim.

 🗓️ 18 Oktober 2026
Kategori Work Log: Directory Architecture & Git Branching
Aktivitas:
  * Menyusun struktur folder utama (`frontend`, `backend`, `database`, `tests`) dan merapikan alur branching Git.

---

📌 MINGGU 3: DEBUGGING BACKEND API & FRONTEND INTEGRATION

 🗓️ 20 Oktober 2026
Kategori Work Log: API Testing & Backend Debugging
Aktivitas: Pengujian endpoint API backend menggunakan Postman/API Client.
Problem & Resolution Log:
  1. Issue 1: `Could not send request - Error: Connection refused at [::1]:3000`
     Solusi: Menjalankan (*start*) server backend Express lokal terlebih dahulu sebelum testing.
  2. Issue 2: `404 Not Found - Cannot POST /login`
     Penyebab: Endpoint `/login` pada kode backend masih menggunakan routing method `app.get()`.
     Solusi: Mengubah routing kode backend dari `app.get('/login')` menjadi `app.post('/login')`.
  3. Issue 3: `Could not get response / Syntax Error`
     Solusi: Melakukan *debugging* sintaks (menambahkan titik koma `;` yang kurang dan mengoreksi struktur variabel response).

 🗓️ 23 Oktober 2026
Kategori Work Log: Frontend Initialization & UI/UX Design Finalization
Aktivitas:
  * Inisialisasi project React frontend (`npx create-react-app` / Vite) dan verifikasi tampilan di `localhost`.
  * Menyelesaikan perancangan *Final UI/UX Design* secara lengkap di Figma.
Problem & Resolution Log:
  1. Issue 1: `PSSecurityException: npx.ps1 cannot be loaded because running scripts is disabled`
     Penyebab: Eksekusi script `.ps1` diblokir oleh kebijakan keamanan Windows PowerShell.
     Solusi: Menjalankan perintah `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` pada PowerShell Administrator.
  2. Issue 2: `Blank Screen (Tampilan Browser Kosong/Putih)`
     Penyebab: Komponen routing dari React Router belum di-import dan membungkus komponen utama.
     Solusi: Menambahkan import rute:
       `import { BrowserRouter, Routes, Route } from "react-router-dom";`