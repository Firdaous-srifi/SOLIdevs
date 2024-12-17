const express = require('express');
const app = express();

app.use(express.json());




let utilisateurs = [
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" },
];

// Récupérer tous les utilisateurs
app.get('/utilisateurs', (req, res) => {
    res.send(utilisateurs);
});
//    // Ajouter un utilisateur
//    app.post('/utilisateurs', (req, res) => {
//     const nouvelUtilisateur = { id: Date.now(), nom: req.body.nom };
//     utilisateurs.push(nouvelUtilisateur);
//     res.status(201).json(nouvelUtilisateur);
//    });
//    // Modifier un utilisateur
//    app.put('/utilisateurs/:id', (req, res) => {
//     const utilisateur = utilisateurs.find(u => u.id ===
//    parseInt(req.params.id));
//     if (!utilisateur) return res.status(404).send('Utilisateur non
//    trouvé');
   
//     utilisateur.nom = req.body.nom;
//     res.json(utilisateur);
//    });
//    // Supprimer un utilisateur
//    app.delete('/utilisateurs/:id', (req, res) => {
//     const index = utilisateurs.findIndex(u => u.id ===
//    parseInt(req.params.id));
//     if (index === -1) return res.status(404).send('Utilisateur non
//    trouvé');
   
//     utilisateurs.splice(index, 1);
//     res.sendStatus(204); // Pas de contenu
//    });