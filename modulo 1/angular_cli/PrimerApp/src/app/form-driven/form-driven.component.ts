import { Component, OnInit } from '@angular/core';
class Pelicula {
  constructor(
    public id: number,
    public nombre: string,
    public genero: string,
    public director: string
  ){}
}
@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit {
  generos = ["Accion" , "Terror", "Aventura", "Fantacia", "Misterio", "Drama"];
  model = new Pelicula(1,'Grim', this.generos[3],'Mark Buckland')
  constructor() { }

  ngOnInit(): void {
  }

}
