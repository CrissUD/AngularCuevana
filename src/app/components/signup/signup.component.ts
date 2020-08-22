import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output()
  estado = new EventEmitter<boolean>();
  
  form: FormGroup;
  user: user = new user();

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.form = this.fb.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      key: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get validationUser(){
    return this.form.get('user').invalid && this.form.get('user').touched
  }

  get validationKey(){
    return this.form.get('key').invalid && this.form.get('key').touched
  }
  
  get validationEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  guardar(){
    if(!this.form.invalid){
      console.log(this.form.value);
      swal.fire({
        title: 'Espere',
        icon: 'info',
        text: 'Guardando Información',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.user.name = this.form.value.user;
      this.user.email = this.form.value.email;
      this.user.key = this.form.value.key;
      let petition: Observable<any>;
      // petition = this.usersService.postUser(this.user);
      petition.subscribe(res =>{
        swal.fire({
          title: `Éxito al guardar a ${res.name}`,
          icon: 'success',
          text: 'Información Guardada correctamente'
        });
      })
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún dato quedo incompleto'
      })
    }
  }

  enviarEstado(){
    this.estado.emit(false);
  }
}
