import {Component , OnInit} from '@angular/core';

@Component ({
    selector: 'app-eventos',
    templateUrl: '.eventos.component.html',
    styleUrls: [ 'eventos.component.css']
})

export class EventComponent implements OnInit {
    mensajeClick:string;
    valorUno:string;
    constructor() {}

    ngOnInit(){

    }

    hicisteClick():void{
        this.mensajeClick = "hola, que bueno verte!";
    }

    onKey(event : any) : void {
        this.valorUno += event.target.value + '---';
        
    }

    onKeyBoard() : void {
        
    }
}

