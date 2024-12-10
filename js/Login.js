const valUser = "admin";
const valPassword = "12345";

function login(event) {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user === valUser && password === valPassword) {
        alert("Inicio de sesión exitoso");
        window.location.href = "/secundario.html";
    } else {
        alert("Inicio de sesión incorrecto");
    }
}
