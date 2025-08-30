document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const leafColor = document.getElementById('leaf-color').value;
    const flowerColor = document.getElementById('flower-color').value;
    const stemColor = document.getElementById('stem-color').value;
    // Ici, vous pouvez ajouter la logique pour générer et télécharger l'illustration
    alert(`Votre illustration est personnalisée avec feuilles: ${leafColor}, fleurs: ${flowerColor}, tiges: ${stemColor}`);
});