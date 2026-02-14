const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration CORS pour Render
app.use(cors({
    origin: '*',  // En production, remplacez * par votre domaine
    credentials: true
}));

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Dashboard démarré sur le port ${PORT}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
});