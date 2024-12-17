
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()); // Permet de traiter les données JSON dans

app.get('/', (req, res) => {
 res.send('Bienvenue sur mon API!');
});
app.listen(PORT, () => {
 console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
