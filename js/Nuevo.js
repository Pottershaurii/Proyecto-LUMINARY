document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const eventSelection = document.getElementById("event").value;
    const cardName = document.getElementById("name").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    setTimeout(function() {
        document.getElementById("paymentForm").reset();
        document.getElementById("confirmationMessage").classList.remove("hidden");
    }, 2000);
});
