import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registroForm = new FormGroup ({
    nombre: new FormControl(),
    apellido: new FormControl()
  });

  onSubmit(){
    console.log (this.registroForm.value);
  }
}
