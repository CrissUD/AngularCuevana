import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get validacionUsuario(){
    return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }

  get validacionClave(){
    return this.form.get('clave').invalid && this.form.get('clave').touched
  }
  
  get validacionCorreo(){
    return this.form.get('correo').invalid && this.form.get('correo').touched
  }

  guardar(){
    if(
      !this.form.get('usuario').invalid && !this.form.get('clave').invalid 
      && !this.form.get('correo').invalid
    )
      console.log(this.form.value);
  }

  enviarEstado(){
    this.estado.emit(false);
  }
}
