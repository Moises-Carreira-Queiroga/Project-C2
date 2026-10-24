const formulaire = document.getElementById("loginform");
const identifiant = document.getElementById("identifiant");
const mdp = document.getElementById("motdepasse");
const erreur = document.getElementById("errormessage");

const utilisateurs = [
    { identifiant: "Seth", email: "seth@exemple.com", motdepasse: "Seth123" }
];

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const saisieIdentifiant = identifiant.value;
    const saisieMdp = mdp.value;

    const utilisateurTrouve = utilisateurs.find(function (u) {
        return (u.identifiant === saisieIdentifiant || u.email === saisieIdentifiant)
            && u.motdepasse === saisieMdp;
    });

    if (utilisateurTrouve) {
        window.location.href = "accueil.html";
        return;
    } else {
        erreur.textContent = "Identifiant ou mot de passe incorrect";
    }
});