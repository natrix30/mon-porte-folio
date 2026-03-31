// ===== DRAG FENÊTRE (Inchangé) =====
const win = document.getElementById("mainWindow");
if (win) {
    const titleBar = win.querySelector(".title-bar");
    let offsetX = 0, offsetY = 0, isDragging = false;

    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            win.style.left = (e.clientX - offsetX) + "px";
            win.style.top = (e.clientY - offsetY) + "px";
        }
    });
    document.addEventListener("mouseup", () => { isDragging = false; });
}

// ===== OUVRIR FENÊTRE =====
function openWindow(type) {
    const win = document.getElementById("mainWindow");
    const content = document.getElementById("window-content");
    const title = document.getElementById("window-title");

    win.style.display = "block";
    content.innerHTML = ""; // On vide le contenu précédent (arrête la musique)

    // --- TEXTES (.txt) ---
    if (type === "code" || type === "code2") {
        // On définit quel fichier charger selon le type
        const fichier = (type === "code") ? "nainjaune.txt" : "explication.txt";
        
        title.textContent = fichier;
        content.innerHTML = "<pre id='codeDisplay'>Chargement du fichier...</pre>";

        fetch(fichier) // <--- C'est ici qu'on utilise la variable
            .then(response => {
                if (!response.ok) throw new Error("Fichier non trouvé");
                return response.text();
            })
            .then(data => {
                document.getElementById("codeDisplay").innerText = data;
            })
            .catch(err => {
                document.getElementById("codeDisplay").innerText = "Erreur : " + err.message;
            });
    }

    // --- IMAGES ---
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

    // --- MUSIQUES ---
    else if (type === "music1") {
        title.textContent = "Musique 1";
        content.innerHTML = `<audio controls autoplay><source src="music/song1.mp3" type="audio/mpeg"></audio>`;
    }
    else if (type === "music2") {
        title.textContent = "Musique 2";
        content.innerHTML = `<audio controls autoplay><source src="music/song2.mp3" type="audio/mpeg"></audio>`;
    }
}

// ===== FERMER =====
function closeWindow() {
    const win = document.getElementById("mainWindow");
    const content = document.getElementById("window-content");
    win.style.display = "none";
    content.innerHTML = ""; // Coupe le son quand on ferme
}
