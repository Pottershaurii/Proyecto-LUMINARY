const valUser = "admin"
const valPassword = "123456789"

function login(){

  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  if (user == valUser && password == valPassword){

    alert("Inicio de sesion exitoso");
    window.location.href = "index.html"

  }else{
    alert("Inicio de sesion incorrecto")
  }
}