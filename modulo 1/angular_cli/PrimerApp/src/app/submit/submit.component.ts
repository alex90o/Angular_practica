import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  formulario: any;
  constructor() { }

  ngOnInit(): void {
  }

 /*
  enviarFormulario(){
    console.log(document.querySelector("#nombre-registrar"));
  }
 */
  Registrar(formulario: any){
   console.log(formulario);
 }
}
