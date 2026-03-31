// ===== OUVRIR FENÊTRE =====
function openWindow(type) {
    const win = document.getElementById("mainWindow");
    const content = document.getElementById("window-content");
    const title = document.getElementById("window-title");

    win.style.display = "block";
    content.innerHTML = ""; 

// --- SECTION TEXTE (Correction Finale) ---
    if (type === "code") {
        title.textContent = "NainJaune.py";
        content.innerHTML = "<pre id='codeDisplay'>Chargement du fichier...</pre>";

        // On cherche "code.txt" directement à la racine
        fetch("code.txt") 
            .then(response => {
                if (!response.ok) throw new Error("Fichier code.txt non trouvé");
                return response.text();
            })
            .then(data => {
                document.getElementById("codeDisplay").innerText = data;
            })
            .catch(err => {
                document.getElementById("codeDisplay").innerText = "Erreur : " + err.message;
            });
    }

    if (type === "code2") {
        title.textContent = "Explications.txt";
        content.innerHTML = "<pre id='codeDisplay'>Chargement du fichier...</pre>";

        // On cherche "code2.txt" directement à la racine
        fetch("code2.txt") 
            .then(response => {
                if (!response.ok) throw new Error("Fichier code2.txt non trouvé");
                return response.text();
            })
            .then(data => {
                document.getElementById("codeDisplay").innerText = data;
            })
            .catch(err => {
                document.getElementById("codeDisplay").innerText = "Erreur : " + err.message;
            });
    }
    // --- SECTION IMAGES ---
    // Tous tes noms sont en minuscules sans double .png sur ta capture
    else if (type === "img1") {
        title.textContent = "Plateau";
        content.innerHTML = `<img src="images/plateau.png" style="max-width:100%;">`;
    }
    else if (type === "img2") {
        title.textContent = "Mise";
        content.innerHTML = `<img src="images/mise.png" style="max-width:100%;">`;
    }    
    else if (type === "img3") {
        title.textContent = "Bienvenu";
        content.innerHTML = `<img src="images/bienvenu.png" style="max-width:100%;">`;
    }    
    else if (type === "img4") {
        title.textContent = "Jeton";
        content.innerHTML = `<img src="images/jeton.png" style="max-width:100%;">`;
    }    

    // --- SECTION MUSIQUE ---
    else if (type === "music1") {
        title.textContent = "Musique 1";
        content.innerHTML = `<audio controls autoplay><source src="music/song1.mp3" type="audio/mpeg"></audio>`;
    }
    else if (type === "music2") {
        title.textContent = "Musique 2";
        content.innerHTML = `<audio controls autoplay><source src="music/song2.mp3" type="audio/mpeg"></audio>`;
    }
}
