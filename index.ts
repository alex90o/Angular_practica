var hamburguesa : string = 'Hamburguesa';
var calorias : number = 300;
var sabor : boolean = true;

function informar(comida: string, energia: number){
   document.querySelector("#informar").innerHTML = `Tu ${comida} tiene ${energia} calorias`;
      
}
informar(hamburguesa,calorias);
