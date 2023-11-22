import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}


  //verificar usuario registrado
  verifySession() {
    if (localStorage.getItem("userId")) {// Si existe localStorage, redirige a /user
      this.router.navigate(["/profileUser"]);
      //forma 2: window.location.href = "/user";
    } else if (sessionStorage.getItem("userId")) {// Si existe en sessionStorage, redirige a /admin
      this.router.navigate(["/profileadmin"]);// Si no existe, redirige a /login
    } else {
      this.router.navigate(["/login"]);
    }
  }


  //inicio
  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectPlan(): void {
    this.router.navigate(['/miPlan']);
  }

}
