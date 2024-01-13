import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summery',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './cart-summery.component.html',
  styleUrl: './cart-summery.component.scss'
})
export class CartSummeryComponent {

  cartService = inject(CartService);
  router = inject(Router);

  onGoToCart(): void {
    this.router.navigate(["/checkout"]);
  }

}
