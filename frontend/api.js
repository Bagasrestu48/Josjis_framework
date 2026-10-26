const API_URL = "https://dotted-germicide-liquefy.ngrok-free.dev";

// 1. BERANDA
export const getBeranda = async () => {
    const response = await fetch(`${API_URL}/`);
    return await response.text();
};

// 2. KATALOG SEMUA SEPATU
export const getKatalog = async () => {
    const response = await fetch(`${API_URL}/katalog`);
    return await response.text();
};

// 3. KATALOG CASUAL
export const getCasual = async () => {
    const response = await fetch(`${API_URL}/katalog/casual`);
    return await response.text();
};

// 4. KATALOG SPORT
export const getSport = async () => {
    const response = await fetch(`${API_URL}/katalog/sport`);
    return await response.text();
};

// 5. DETAIL SEPATU CASUAL
export const getDetailCasual = async (id) => {
    const response = await fetch(
        `${API_URL}/katalog/casual/detail/${id}`
    );
    return await response.text();
};

// 6. DETAIL SEPATU SPORT
export const getDetailSport = async (id) => {
    const response = await fetch(
        `${API_URL}/katalog/sport/detail/${id}`
    );
    return await response.text();
};

// 7. TENTANG KAMI
export const getTentangKami = async () => {
    const response = await fetch(`${API_URL}/tentangkami`);
    return await response.text();
};

// 8. KONTAK
export const getKontak = async () => {
    const response = await fetch(`${API_URL}/kontak`);
    return await response.text();
};