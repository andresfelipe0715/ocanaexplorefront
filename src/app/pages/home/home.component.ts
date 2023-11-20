import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCreatorService } from 'src/app/services/service-creator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  obtenerDatosYRedirigir(tipoServicio: string): void {
    this.router.navigate(['/servicios', tipoServicio]);
  }

}
