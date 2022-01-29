import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar-reactivo',
  templateUrl: './validar-reactivo.component.html',
  styleUrls: ['./validar-reactivo.component.css']
})
export class ValidarReactivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registroForm = new FormGroup({
    'nombre': new FormControl ('',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
    'apellido': new FormControl ('',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
    'email': new FormControl ('',[Validators.required, Validators.email])
  });
  onSubmit(){
    console.log(this.registroForm.value);
  }
}
