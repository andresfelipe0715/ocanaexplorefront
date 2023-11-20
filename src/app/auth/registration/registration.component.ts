import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  personData: any = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    document: null,
    user: {
      user_name: '',
      password: '',
    }
  };

  confirmPassword: string = '';

  isEmptyField: boolean = false;  //mensaje error
  comparePassword: boolean = false; //mensaje error
  mensajeDesdeBackend: boolean = false; //mensaje error
  mensajeDesdeBack: string = ""; //mensaje error
  successMessage: boolean = false;  //mensaje registro

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }



  //REGISTAR PERSONA
  registerPerson() {
    if (    // Verificar campos vacíos
      !this.personData.first_name ||
      !this.personData.last_name ||
      !this.personData.email ||
      !this.personData.address ||
      !this.personData.phone ||
      !this.personData.document ||
      !this.personData.user.user_name ||
      !this.personData.user.password
    ) {

      // mensaje de error campos vacios
      this.isEmptyField = true;
      setTimeout(() => {
        this.isEmptyField = false;
      }, 3000); // Oculta el mensaje después de 3 segundos
      return;

    }

    if (this.personData.user.password !== this.confirmPassword) {  //validar contraseña

      //mensaje de error comparar contraseña
      this.comparePassword = true;
      setTimeout(() => {
        this.comparePassword = false;
      }, 3000); //tiempo
      return; // Detiene la ejecución

    }

    this.authService.registerPerson(this.personData)//Registrar persona
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status) {
            const errorMessage = error.error.message; // tomo el mensaje
            this.mensajeDesdeBack = errorMessage; // lo guardo en

            //mensaje de error back
            this.mensajeDesdeBackend = true;
            setTimeout(() => {
              this.mensajeDesdeBackend = false;
            }, 3000); //tiempo

          } else {
            alert('Ocurrió un error al registrar el usuario');
          }
          return throwError('Error en la solicitud HTTP');
        })
      )
      .subscribe(
        (response) => {

          //mensaje persona registrada
          this.successMessage = true;
          setTimeout(() => {
            this.successMessage = false;

            setTimeout(() => {// Redirigir a la otra vista
              this.router.navigate(['/login']);
            });

          }, 800); //tiempo

        }
      );
  }


  //validar entrada numerica
  validateNumericInput(event: any): void {
    const input = event.target;
    const number = input.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
    input.value = number; // Actualiza el valor en el campo de entrada
  }

}
