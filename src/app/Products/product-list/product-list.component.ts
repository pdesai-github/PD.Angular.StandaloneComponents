import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productsService = inject(ProductsService);
  products= this.productsService.products;

  constructor(){
    this.productsService.getProducts();
  }

}
