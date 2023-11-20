import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';
import { ServiceCreatorService } from 'src/app/services/service-creator.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  datosServicios: any;
  userId: string | null = ''; // Declara userId

  constructor(
    private route: ActivatedRoute,
    private serviceCreatorService: ServiceCreatorService,
    private planService: PlanService) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');// Obtiene el userId del almacenamiento local

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

  //agregar al plan
  addPlan(serviceId: string): void {

    if (this.userId) {
      this.planService.getPlanByUserId(this.userId!).subscribe((plan) => {
        const planId = plan.planId;
        console.log(" ya tiene ", planId);

        const planDetail = {
          serviceId: serviceId,
          planId: planId,
          date: '2023-08-08',
          tripAmount: 4,
          time: '8pm',
          foodAmount: 4
        };

        this.planService.savePlanDetail(planDetail).subscribe(
          (data) => {
            // Manejar la respuesta del servidor
            console.log('Detalles del plan guardados:', data);
          },
          (error) => {
            // Manejar errores
            console.error('Error al guardar detalles del plan:', error);
          }
        );


      }, (error) => {
        console.log('no tiene plan. lo crea', error);
        this.planService.savePlan(this.userId!).subscribe((data) => {
          const planId = data.planId;
          console.log(" creado ", planId);
        });
      }
      );
    } else {
      alert("Inicia sesión");
    }

  }

}
