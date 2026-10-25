# Nama Project Anda

Dokumentasi ini berisi panduan untuk menyiapkan dan menjalankan project secara lokal.

## ⚙️ Cara Menjalankan Project

### 1. Clone Repository
Pastikan Anda sudah melakukan clone repository ini ke komputer lokal:
\`\`\`bash
git clone <url-repository-anda>
cd <nama-folder-project>
\`\`\`

### 2. Setup Backend
1. Masuk ke direktori backend:
   \`\`\`bash
   cd backend
   \`\`\`
2. Salin file environment dan sesuaikan isinya:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
3. Install dependencies dan jalankan server backend:
   \`\`\`bash
   npm install
   npm run dev  # atau npm start / nodemon index.js
   \`\`\`
   *(Backend akan berjalan di port yang ditentukan, contoh: `http://localhost:4000`)*[cite: 8, 9]

### 3. Setup Frontend
1. Buka terminal baru, lalu masuk ke direktori frontend:
   \`\`\`bash
   cd ../frontend
   \`\`\`
2. Salin file environment jika ada:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
3. Install dependencies dan jalankan server development frontend:
   \`\`\`bash
   npm install
   npm run dev  # atau npm run start
   \`\`\`
   *(Frontend biasanya berjalan di `http://localhost:5173` atau `http://localhost:3000`)*[cite: 9]