import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<Array<Product>>([]);
  totalCartValue = computed(() => this.cartItems().reduce((acc, item) => acc + item.price, 0));

  public addItems(product: Product): void {
    this.cartItems.update(items => [...items, product]);
    console.log("addItems", this.totalCartValue());
  }

  public clearCart(): void {
    this.cartItems.update(items => []);
  }
}
