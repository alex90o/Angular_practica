import { Component, OnInit } from '@angular/core';

class Alumno {
  nombre: string;
  apellido: string;
  curso: string;
  constructor(nombre:string, apellido:string, curso: string){
    this.nombre = nombre;
    this.curso = curso;
    this.apellido = apellido;
  }
}

const Alumnos = [
  new Alumno('Jose', 'Perez', 'PHP'),
  new Alumno ('Mariela', 'Gonzalez', 'Angular'),
  new Alumno ('tito', 'ovejero', 'saltos')
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
