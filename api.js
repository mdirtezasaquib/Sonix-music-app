const BASE_URL = 'https://sonix-s830.onrender.com/api/playlists';

// 1️⃣ Sare songs fetch karne ka function
async function fetchSongs() {
    try {
        let response = await fetch(BASE_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
}

// 2️⃣ User Login API Call
async function loginUser(email, password) {
    let response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    return response.json();
}
