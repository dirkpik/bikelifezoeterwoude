// contact.js

// Functie om het contactformulier te openen
function openContactForm() {
    alert("Dit is het contactformulier. Vul uw gegevens in.");
}

// Voeg een event listener toe aan de knop
document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openContactForm");
    openButton.addEventListener("click", openContactForm);
});
