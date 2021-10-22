document.getElementById("wallet").addEventListener("click", function () {
  window.location.href = "https://ucami98.github.io/Easy_Wallet/bolsillos";

  var user = document.getElementById("user").value;
  var psw = document.getElementById("psw").value;
  var cantidad = document.getElementById("cantidad").value;
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  localStorage.setItem(user, [user, psw, cantidad,b1, b2, b3]);
  alert("Sus datos se han guardado");


});
