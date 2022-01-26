var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hamburguesa = 'Hamburguesa';
var calorias = 300;
var sabor = true;
function informar(comida, energia) {
    document.querySelector("#informar").innerHTML = "Tu ".concat(comida, " tiene ").concat(energia, " calorias");
}
informar(hamburguesa, calorias);
var Menu = /** @class */ (function () {
    function Menu(item_list) {
        this.display = '';
        this.items = item_list;
    }
    Menu.prototype.listar = function () {
        this.display = '<h3> Nuestro menu para hoy:</h3>';
        this.display = '<ul>';
        for (var i = 0; i < this.items.length; i++) {
            this.display += "<li> ".concat(this.items[i], " </li>");
        }
        this.display += '</ul>';
        document.querySelector("#menu").innerHTML = this.display;
    };
    return Menu;
}());
var lunesMenu = new Menu(['panqueques', 'panchos', 'jugo de neranja']);
lunesMenu.listar();
var MenuChicos = /** @class */ (function (_super) {
    __extends(MenuChicos, _super);
    function MenuChicos(item_list) {
        var _this = _super.call(this, item_list) || this;
        _this.display = '';
        return _this;
    }
    MenuChicos.prototype.listar = function () {
        this.display = "<h3>Nuestro menu especial para los chicos: </h3>";
        this.display += '<ul>';
        for (var i = 0; this.items.length; i++) {
            this.display += "<li>".concat(this.items[i], "</li>");
        }
        this.display += '</ul>';
        document.querySelector("#menuChicos").innerHTML = this.display;
    };
    return MenuChicos;
}(Menu));
var menuChicos = new MenuChicos(['caramelo', 'Coca Cola', 'juguete']);
menuChicos.listar();
