import { Injectable, signal } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable()
export class ProductsService {

  products = signal<Array<Product>>([])

  public getProducts(): void {
    let products: Array<Product> = [
      { name: "iPhone", price: 80000, imagePath:"assets/images/iphone.jpg", description:"This is iPhone" },
      { name: "Samsung", price: 90000, imagePath:"assets/images/samsung.jpg", description:"This is iPhone" },
      { name: "TV", price: 50000, imagePath:"assets/images/tv.jpg", description:"This is iPhone" }
    ];
    this.products.set(products);
  }
}
