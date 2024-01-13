import { Injectable, signal } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable()
export class ProductsService {

  products = signal<Array<Product>>([])

  public getProducts(): void {
    let products: Array<Product> = [
      { name: "iPhone", price: 80000 },
      { name: "Samsung", price: 90000 },
      { name: "TV", price: 50000 }
    ];
    this.products.set(products);
  }
}
