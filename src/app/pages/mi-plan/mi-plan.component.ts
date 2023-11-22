import { Component } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-mi-plan',
  templateUrl: './mi-plan.component.html',
  styleUrls: ['./mi-plan.component.scss']
})
export class MiPlanComponent {

  cartId = '';  //almacena el id de cart
  suptotal = 0;  //almacena el total de carrito
  productcart: any[] = [];     // almacena los productos
  userId: string | null = ''; // Declara userId


  constructor(
    private planService: PlanService,
    // private apiService: ApiService,
    // private purchaseService: PurchaseService,
    // private router: Router
  ) { }

  //Al inicial
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');// Obtiene el userId del almacenamiento local

    if (this.userId) { //optengo el Id de card

      this.planService.getPlanByUserId(this.userId).subscribe(
        (cartItems) => {    //si trae un valor es que si tiene un cart
          if (cartItems) {
            // El usuario tiene un carrito
            this.cartId = cartItems.planId;

            this.planService.getserviceByplanId(this.cartId).subscribe( // se consultan todos sus cartProduct
              (cartProducts) => {
                this.productcart = cartProducts;
                console.log('Mi plan:', this.productcart);

              }, (error) => {
                console.log('No hay productos en el carro');
              }
            );

            // //presio Total
            // this.cartService.updateCart(this.cartId).subscribe(
            //   (data) => {
            //     if (this.userId) {
            //       this.cartService.listCartItems(this.userId).subscribe(
            //         (data) => {
            //           this.suptotal = data.subtotal;
            //         }
            //       );
            //     }

            //   }, (error) => {
            //     console.log('No hay productos en el cart');
            //   }
            // );

          }
        }
      );
    }

  }

}
