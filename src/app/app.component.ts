import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ocana';

  constructor(private router: Router) {}
  isEditProductRoute(): boolean {   // no muestra el footer ni el header
    const hiddenRoutes = ['/admin', '/login', '/registro'];
    return hiddenRoutes.includes(this.router.url);
  }

}
