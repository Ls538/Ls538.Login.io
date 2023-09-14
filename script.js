var usuario = "fox_mulder@gmail.com";
var password = "161803399";

function check_login() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (usuario == email && password == senha) {
    document.location.href = "login.html";
  } else {
    alert("usuário ou senha errados");
    document.getElementById("forget").style.display = "flex";
    1803399;
  }
}
