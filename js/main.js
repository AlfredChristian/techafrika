// Fonction pour le formulaire de contact
function envoyerMessage() {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const confirmation = document.getElementById('confirmation');

    if (nom === '' || email === '' || message === '') {
        confirmation.style.color = 'red';
        confirmation.textContent = '⚠️ Veuillez remplir tous les champs !';
    } else {
        confirmation.style.color = 'green';
        confirmation.textContent = '✅ Message envoyé avec succès ! Nous vous répondrons bientôt.';
    }
}