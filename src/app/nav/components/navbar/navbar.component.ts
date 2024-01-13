import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../Checkout/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  router = inject(Router);
  cartService = inject(CartService);

  onLogout():void{
    sessionStorage.removeItem("user");
    this.cartService.clearCart();
    this.router.navigate(["/auth"]);
  }
}
