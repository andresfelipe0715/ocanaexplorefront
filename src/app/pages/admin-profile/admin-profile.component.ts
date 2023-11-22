import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {

  persona: any = {};//Objeto para almacenar la información de persona
  usuario: any = {};//Objeto para almacenar la información del usuario
  showPassword: boolean = false; //mostrar contraseña


  messagePerson = 0;
  messageUser = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }


  //Al ingresar a perfil muestra los detalles de  la persona
  ngOnInit() {
    const personId = sessionStorage.getItem('personId');
    const userId = sessionStorage.getItem('userId');
    console.log(personId);
    console.log(userId);

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
        },
        (error) => {
          console.error('Error al obtener los detalles del usuario', error);
        }
      );
    }

  }


  // // VERIFICAR CAMPOS VACIOS
  // updatePersonaYUsuario() {
  //   if (!this.camposPersonaVacios() && !this.camposUsuarioVacios()) {
  //     this.updatePersona();
  //     this.updateUsuario();
  //   } else {
  //     alert('Por favor, complete todos los campos requeridos antes de actualizar.');
  //   }
  // }


  // VALIDAR Y FORMATEAR NUMERO DE TELEFONO
  validatePhone(event: any): void {
    const input = event.target;
    const phoneNumber = input.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    this.persona.phone = phoneNumber; // Actualizar el modelo con el número formateado
    input.value = phoneNumber; // Actualizar el valor en el campo de entrada
  }


  // // ACTUALIZA PERSONA
  // updatePersona() {
  //   const personId = sessionStorage.getItem('personId');
  //   if (personId) {
  //     this.userService.updatePerson(personId, this.persona).subscribe(
  //       (response) => {
  //         this.messagePerson = 1;
  //       },
  //       (error) => {
  //         this.messagePerson = 2;
  //       }
  //     );
  //   } else {
  //     console.error('No se pudo obtener el personId del almacenamiento local');
  //   }
  // }


  // // ACTUALIZAR USUARIO
  // updateUsuario() {
  //   const userId = sessionStorage.getItem('userId');

  //   if (userId) {
  //     this.userService.updateUser(userId, this.usuario).subscribe(
  //       (response) => {
  //         this.messageUser = 1;
  //         this.mostrarMensaje();
  //       },
  //       (error) => {
  //         this.messageUser = 2;
  //         this.mostrarMensaje();
  //       }
  //     );
  //   } else {
  //     console.error('No se pudo obtener el userId del almacenamiento local');
  //   }
  // }


  //CONFIRMAR CERRAR SESION
  confirmLogout(): void {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      this.logout();
    }
  }


  //CERRAR SESION
  logout() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('personId');
    sessionStorage.removeItem('currentComponent');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }


  // //MOSTRAR CONTRASEÑA
  // showPassword: boolean = false;
  // togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }


  // // Verificar si alguno de los campos de la persona está vacío
  // camposPersonaVacios(): boolean {
  //   return (
  //     !this.persona.first_name ||
  //     !this.persona.last_name ||
  //     !this.persona.email ||
  //     !this.persona.address ||
  //     !this.persona.phone
  //   );
  // }


  // // Verificar si alguno de los campos del usuario está vacío
  // camposUsuarioVacios(): boolean {
  //   return (
  //     !this.usuario.username ||
  //     !this.usuario.password
  //   );
  // }


  // //mensajes
  // mostrarMensaje() {
  //   if (this.messagePerson === 1 && this.messageUser === 1) {
  //     alert('Datos actualizados'); // Ambos mensajes son exitosos
  //   } else if (this.messageUser === 2) {
  //     alert('Error: El usuario ya existe'); // Mensaje de error de usuario existente
  //   } else if (this.messagePerson === 2) {
  //     alert('Error al actualizar la persona'); // Mensaje de error de actualización de persona
  //   }
  // }

  createservice(): void {
    this.router.navigate(['/creator']);
  }


}
