import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  isEmptyField: boolean = false;    //mensaje error
  incorrectUser: boolean = false;  //mensaje error
  incorrectPassword: boolean = false;  //mensaje error
  successMessage: boolean = false;  //mensaje inicio

  messageWelcome: string = ""; // mensaje de bienvenida

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  //INICIAR SESION
  onSubmit() {
    //Verificar campos
    if (this.username.trim() === '' || this.password.trim() === '') {

      //mensaje campos vacios
      this.isEmptyField = true;
      setTimeout(() => {
        this.isEmptyField = false;
      }, 3000); // Oculta el mensaje
      return;

    }

    // Verificar el usuario al enviar el formulario
    this.authService.login(this.username).subscribe(
      (userData) => {
        if (this.password === userData.password) {// Verificar si la contraseña es correcta

          this.messageWelcome = "¡Bienvenido, " + userData.username + '!'; //menaje bienvenida

          //mensaje inicio
          this.successMessage = true;
          setTimeout(() => {
            this.successMessage = false;

            setTimeout(() => {// Redirigir a la otra vista
              if (userData.profileName === 'user') {
                localStorage.setItem('userId', userData.userId);// Almacena el ID del usuario en localStorage
                localStorage.setItem('personId', userData.personId);
                sessionStorage.setItem('userRole', userData.profileName);
                this.router.navigate(['/profileUser']);
              } else {
                sessionStorage.setItem('userId', userData.userId);// Almacena el ID del usuario en sessionStorage
                sessionStorage.setItem('personId', userData.personId);
                sessionStorage.setItem('userRole', userData.profileName);
                this.router.navigate(['/admin']);
              }
            });

          }, 800); //tiempo

        } else {

          //mensaje contraseña incorrecta
          this.incorrectPassword = true;
          setTimeout(() => {
            this.incorrectPassword = false;
          }, 3000); // Oculta el mensaje
          return;

        }

      },
      (error) => {

        //mensaje usuario incorrecto
        this.incorrectUser = true;
        setTimeout(() => {
          this.incorrectUser = false;
        }, 3000); // Oculta el mensaje
        return;

      }
    );

  }

}
