
// const BASE_URL = "https://sonix-s830.onrender.com/api/playlists";

// // 1️⃣ Sare songs fetch karne ka function
// async function fetchSongs() {
//     try {
//         let response = await fetch(`${BASE_URL}/songs`);
//         return await response.json();
//     } catch (error) {
//         console.error("Error fetching songs:", error);
//     }
// }

// // 2️⃣ User Login API Call
// async function loginUser(email, password) {
//     let response = await fetch(`${BASE_URL}/users/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//     });
//     return response.json();
// }


// async function handleLogin() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let data = await loginUser(email, password);
//     if (data.token) {
//         localStorage.setItem("userToken", data.token);
//         window.location.href = "home.html";
//     } else {
//         alert("Login failed!");
//     }
// }

// async function loadSongs() {
//     let songs = await fetchSongs();
//     let songList = document.getElementById("song-list");
//     songList.innerHTML = "";
    
//     songs.forEach(song => {
//         songList.innerHTML += `
//             <div class="p-4 bg-gray-800 rounded">
//                 <h2 class="text-xl">${song.title}</h2>
//                 <p>${song.artist} - ${song.album}</p>
//                 <button onclick="playSong('${song.id}')">▶️</button>
//                 <button onclick="addToFavorites('${song.id}')">❤️</button>
//             </div>
//         `;
//     });
// }
// loadSongs();



// document.getElementById("search").addEventListener("input", async function (event) {
//     let query = event.target.value.toLowerCase();
//     let songs = await fetchSongs();
//     let filteredSongs = songs.filter(song =>
//         song.title.toLowerCase().includes(query) || 
//         song.artist.toLowerCase().includes(query)
//     );
//     displaySongs(filteredSongs);
// });


// async function playSong(songId) {
//     let response = await fetch(`${BASE_URL}/songs/${songId}`);
//     let song = await response.json();

//     let player = document.getElementById("audio-player");
//     player.src = song.audioUrl;
//     player.play();

//     if (song.lyrics) {
//         document.getElementById("lyrics").innerText = song.lyrics;
//     } else {
//         document.getElementById("lyrics").innerText = "Lyrics not available.";
//     }
// }


// function toggleDarkMode() {
//     document.body.classList.toggle("bg-gray-900");
//     document.body.classList.toggle("bg-white");
// }


//------------------------------ new  -----------------------------------------//

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('hidden');
        }


       
            async function fetchSongs() {


            const songContainer = document.getElementById("songs");
        
            const response = await fetch("https://sonix-s830.onrender.com/api/songs");

            const data = await response.json();
        
            songContainer.innerHTML = ""; 
        
            data.forEach(song => {

                const songCard = document.createElement("div");
                songCard.className = "bg-gray-700 p-3 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-700 transition";
                
                songCard.innerHTML = `
                    <img src="${song.previewImg}" class="rounded-lg w-full h-40 object-cover">
                    <div class="p-3 w-full">
                        <h3 class="mt-2 font-bold text-white">${song.title}</h3>
                        <p class="text-gray-400">${song.artistName}...</p>
                        <p class="text-pink-500">${song.genre}</p>
                        <audio controls class="mt-2 w-full">
                            <source src="${song.songUrl}" type="audio/mpeg">
                        </audio>
                    </div>
                `;
        
                songContainer.appendChild(songCard);
            });

            }

            fetchSongs();
        
        