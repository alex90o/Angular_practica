var hamburguesa : string = 'Hamburguesa';
var calorias : number = 300;
var sabor : boolean = true;

function informar(comida: string, energia: number){
   document.querySelector("#informar").innerHTML = `Tu ${comida} tiene ${energia} calorias`;
      
}
informar(hamburguesa,calorias);

class Menu {
    items: Array<string>;
    display: string = '';
    constructor(item_list: Array<string>){
        this.items = item_list;
    }

    listar() : void {
        this.display = '<h3> Nuestro menu para hoy:</h3>';
        this.display = '<ul>';
        for(var i=0; i<this.items.length; i++){
            this.display += `<li> ${this.items[i]} </li>`;
        }
        this.display += '</ul>';
        document.querySelector("#menu").innerHTML = this.display;
    }
}

var lunesMenu = new Menu (['panqueques', 'panchos', 'jugo de neranja']);
lunesMenu.listar();

class MenuChicos extends Menu {
    display : string = '';

    constructor(item_list : Array<string>){
        super(item_list);
    }
    listar(): void {
        this.display = `<h3>Nuestro menu especial para los chicos: </h3>`;
        this.display += '<ul>';
        for(var i=0;i< this.items.length; i++){
            this.display += `<li>${this.items[i]}</li>`;
        }
        this.display += '</ul>';
        document.querySelector("#menuChicos").innerHTML = this.display;
    }
}
var menuChicos = new MenuChicos (['caramelo', 'Coca Cola', 'juguete']);
menuChicos.listar();

interface MenuEmpleado {
    nombre: string;
    calorias: number;
}

function obtenerMenuEmpleado (comida: MenuEmpleado): void {
    let display = '';
    display = `<p>El Menú de los empleados teiene ${comida.calorias} calorias. Y está compuesta por ${comida.nombre} </p>`;
    document.querySelector("#interface").innerHTML = display;
}
const helado = {
    nombre: 'Helado',
    calorias: 400
}
obtenerMenuEmpleado(helado);
