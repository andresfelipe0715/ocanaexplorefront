import { Component } from '@angular/core';
import { ServiceCreatorService } from 'src/app/services/service-creator.service';

@Component({
  selector: 'app-service-creator',
  templateUrl: './service-creator.component.html',
  styleUrls: ['./service-creator.component.scss']
})
export class ServiceCreatorComponent {

  imagenBase64_2: string | null = null;

  productoNuevo: any = {
    typeName: '',
    serviceName: '',
    description: '',
    serviceHour: '',
    contact: '',
    location: '',
    serviceImg: '',
    rating: '',
    room: 0,
    doubleRoom: 0,
    foodPrice: 0,
    priceTrans: 0,        
    entranceFee: 0,    
    personalGuide: 0      
  };

  constructor(
    private serviceCreatorService: ServiceCreatorService
  ) { }


  // Añadir servicio
  anadirServicio() {
    // if (
    //   !this.productoNuevo.typeName ||
    //   !this.productoNuevo.serviceName ||
    //   !this.productoNuevo.description ||
    //   !this.productoNuevo.serviceHour ||
    //   !this.productoNuevo.contact ||
    //   !this.productoNuevo.location ||
    //   !this.productoNuevo.serviceImg ||
    //   !this.productoNuevo.rating ||
    //   !this.productoNuevo.room ||
    //   !this.productoNuevo.doubleRoom
    // ) {
    //   alert('Por favor, complete todos los campos obligatorios.');
    //   return;
    // }
    // if (!this.productoNuevo.serviceImg) {
    //   alert('Por favor, seleccione una imagen para el servicio.');
    //   return;
    // }

    this.serviceCreatorService.createService(this.productoNuevo).subscribe(
      (response) => {
        console.log('Servicio creado:', response);
        alert('Éxito: el servicio se creó correctamente');
        // this.productoEncontrado = response;
        // this.imagenBase64_1 = this.productoNuevo.serviceImg;
        // this.limpiarCamposNuevoServicio();
        // this.cargarProductos(); // Actualiza la lista de productos
        // this.mostrarNuevoContenido = false;

      },
      (error) => {
        console.error('Error al crear el servicio:', error);
        alert('Error al crear el servicio');
      }
    );
  }


  // Para la imagen de Nuevo Producto
  upload_image_nuevo(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Convierte la imagen a base64
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenBase64_2 = e.target.result;
        this.productoNuevo.serviceImg = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


}
