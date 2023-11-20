import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  persona: any = {};//Objeto para almacenar la información de persona
  usuario: any = {};//Objeto para almacenar la información del usuario
  showPassword: boolean = false; //mostrar contraseña


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  //Al INICIAR MUESTRA LOS DETALLES DE PERSONA Y USUARIO
  ngOnInit() {
    const personId = localStorage.getItem('personId');
    const userId = localStorage.getItem('userId');
    // console.log('id person',personId);
    // console.log('id usuario',userId);

    if (personId) {   // Obtener los detalles de la persona
      this.authenticationService.getPersonById(personId).subscribe(
        (person: any) => {
          this.persona = person;// Asigna los detalles de la persona a propiedades en tu componente
        },
        (error) => {
          console.error('Error al obtener los detalles de la persona', error);
        }
      );
    }

    if (userId) {   // Obtener los detalles del usuario
      this.authenticationService.getUserById(userId).subscribe(
        (user: any) => {
          this.usuario = user;
          // console.log(this.usuario);
        },
        (error) => {
          console.error('Error al obtener los detalles del usuario', error);
        }
      );
    }

  }

  //VALIDAR Y FORMATEAR NUMERO DE TELEFONO
  validatePhone(event: any): void {
    const input = event.target;
    const phoneNumber = input.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    this.persona.phone = phoneNumber; // Actualizar el modelo con el número formateado
    input.value = phoneNumber; // Actualizar el valor en el campo de entrada
  }

  //CONFIRMAR CERRAR SESION
  confirmLogout(): void {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      this.logout();
    }
  }

  //CERRAR SESION
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('personId');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }
}
