import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsService } from "./services/products/products.service";

export const PRODUCT_ROUTES: Routes = [
    {
        path: "",
        component: ProductListComponent,
        providers:[
            ProductsService
        ]
    }
]