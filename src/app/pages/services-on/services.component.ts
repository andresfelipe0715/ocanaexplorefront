import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCreatorService } from 'src/app/services/service-creator.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  datosServicios: any;

  constructor(
    private route: ActivatedRoute,
    private serviceCreatorService: ServiceCreatorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const tipoServicio = params['tipoServicio'];
      console.log('Tipo de servicio:', tipoServicio);
      // Ahora puedes hacer lo que quieras con el tipo de servicio
      this.serviceCreatorService.obtenerDatos(tipoServicio).subscribe((datos) => {
        this.datosServicios = datos
        console.log(datos);
      });
    });
  }

}
