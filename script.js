document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos! Hemos recibido tu mensaje.");
    this.reset();
});