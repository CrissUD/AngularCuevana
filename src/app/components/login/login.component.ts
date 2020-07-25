import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  estado = new EventEmitter<boolean>();

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {

  }

  crearFormulario(){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get validacionUsuario(){
    return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }

  get validacionClave(){
    return this.form.get('clave').invalid && this.form.get('clave').touched
  }
  guardar(){
    if(!this.form.get('usuario').invalid && !this.form.get('clave').invalid)
      console.log(this.form.value);
  }

  enviarEstado(){
    this.estado.emit(false);
  }
}
