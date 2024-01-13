import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService = inject(CartService);

}
