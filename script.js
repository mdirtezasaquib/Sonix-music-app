        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('hidden');
        }

        let allSongs = []; 

        async function fetchSongs() {
            const songContainer = document.getElementById("songs");
        
            const response = await fetch("https://sonix-s830.onrender.com/api/songs");
            allSongs = await response.json(); 
        
            displaySongs(allSongs); 
        }
        
        function displaySongs(songs) {
            const songContainer = document.getElementById("songs");
            songContainer.innerHTML = ""; 
        
            songs.forEach(song => {
                const songCard = document.createElement("div");
                songCard.className = "bg-gray-700 p-3 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition";
                
                songCard.innerHTML = `
                    <img src="${song.previewImg}" class="rounded-lg w-full h-40 object-cover">
                    <div class="p-3 w-full text-center">
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
        
        function searchSongs() {
            let query = document.getElementById("input").value.toLowerCase();
            let filteredSongs = allSongs.filter(song => song.title.toLowerCase().includes(query));
            displaySongs(filteredSongs); 
        }
        
        document.getElementById("input").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchSongs(); 
            }
        });
        
        
        fetchSongs();
        
