document.getElementById("btnIndex").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/EasyWallet/index.html";
});

document.getElementById("btnDisp").addEventListener("click", function () {
  var usuario = document.getElementById("userb").value;
  var dataConsultada = localStorage.getItem(usuario);
  var array = dataConsultada.split(",");
  var pElement = document.getElementById("disp");
  pElement.innerHTML =
    "En este momento usted tiene " + array[2] + " disponibles" + "<br>";

  var b1Element = document.getElementById("lBol1");
  b1Element.innerHTML = array[3];
  var b2Element = document.getElementById("lBol2");
  b2Element.innerHTML = array[4];
  var b3Element = document.getElementById("lBol3");
  b3Element.innerHTML = array[5];
});

document.getElementById("resetB1").addEventListener("click", function () {
  var saldo1 = deposito * 0;
  var pElement = document.getElementById("montoB1");
  pElement.innerHTML = "Su nuevo saldo es 0";
});

document.getElementById("resetB2").addEventListener("click", function () {
  var saldo2 = deposito * 0;
  var pElement = document.getElementById("montoB2");
  pElement.innerHTML = "Su nuevo saldo es 0";
});

document.getElementById("resetB3").addEventListener("click", function () {
  var saldo3 = deposito * 0;
  var pElement = document.getElementById("montoB3");
  pElement.innerHTML = "Su nuevo saldo es 0";
});

document.getElementById("enviar").addEventListener("click", function () {
  var usuario = document.getElementById("userb").value;
  var dataConsultada = localStorage.getItem(usuario);
  var array = dataConsultada.split(",");
  var cantidad2 = document.getElementById("cantidad2").value;
  var lista = document.getElementById("listaBtn").value;
  var bol1= document.getElementById("bolsillo1").value;
  var bol2 = document.getElementById("bolsillo2").value;
  var bol3 = document.getElementById("bolsillo3").value;

 console.log(lista)
 console.log(bol1)

if (lista === bol1) {
     var saldo1 = parseInt(cantidad2);
    var dep1Element = document.getElementById("montoB1")
  dep1Element.innerHTML = "El saldo de su bolsillo 1 es " + cantidad2} else 
if (lista === bol2) {
        var saldo2 = parseInt(cantidad2);
       var dep2Element = document.getElementById("montoBo2")
     dep2Element.innerHTML = "El saldo de su bolsillo 2 es " + saldo2} else {
        if (lista === bol3) 
        var saldo3 = parseInt(cantidad2);
       var dep2Element = document.getElementById("monto3")
     dep2Element.innerHTML = "El saldo de su bolsillo 3 es " + saldo3}  });
