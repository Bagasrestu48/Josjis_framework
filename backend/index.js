
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

// 1. ENDPOINT BERANDA
app.get('/', (req, res) => {
    res.send('Selamat datang di website TAPAKE!');
});

// 2. ENDPOINT KATALOG
app.get('/katalog', (req, res) => {
    res.send('Halaman katalog semua sepatu TAPAKE.');
});

// 3. ENDPOINT CASUAL
app.get('/katalog/casual', (req, res) => {
    res.send('Halaman koleksi sepatu casual TAPAKE.');
});

// 4. ENDPOINT SPORT
app.get('/katalog/sport', (req, res) => {
    res.send('Halaman koleksi sepatu sport TAPAKE.');
});

// 5. ENDPOINT DETAIL SEPATU CASUAL
app.get('/katalog/casual/detail/:id', (req, res) => {
    res.send('Halaman detail spesifikasi sepatu casual TAPAKE.');
});

// 6. ENDPOINT DETAIL SEPATU SPORT
app.get('/katalog/sport/detail/:id', (req, res) => {
    res.send('Halaman detail spesifikasi sepatu sport TAPAKE.');
});

// 7. ENDPOINT TENTANG KAMI
app.get('/tentang-kami', (req, res) => {
    res.send('Selamat datang di halaman tentang kami TAPAKE.');
});

// 8. ENDPOINT KONTAK
app.get('/kontak', (req, res) => {
    res.send('Silakan hubungi kami melalui halaman kontak TAPAKE.');
});

// MENJALANKAN SERVER
app.listen(port, () => {
    console.log(`API TAPAKE berjalan di http://localhost:${port}`);
});
