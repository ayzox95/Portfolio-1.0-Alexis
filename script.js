// JavaScript pour la validation du formulaire de contact
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message !');
});

// Fonction pour changer la photo de profil
document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // On change la source de l'image avec l'URL de la nouvelle image
            document.getElementById('profile-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});