var hamburguesa = 'Hamburguesa';
var calorias = 300;
var sabor = true;
function informar(comida, energia) {
    document.querySelector("#informar").innerHTML = "Tu ".concat(comida, " tiene ").concat(energia, " calorias");
}
informar(hamburguesa, calorias);
