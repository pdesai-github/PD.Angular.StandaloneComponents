import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CartSummeryComponent } from '../../../Checkout/components/cart-summery/cart-summery.component';
import { CartService } from '../../../Checkout/services/cart/cart.service';
import { Product } from '../../../models/product.model';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CartSummeryComponent, NavbarComponent],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productsService = inject(ProductsService);
  products = this.productsService.products;
  cartService = inject(CartService);

  constructor() {
    this.productsService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log("onAddToCart", product);
    this.cartService.addItems(product);
  }

}
