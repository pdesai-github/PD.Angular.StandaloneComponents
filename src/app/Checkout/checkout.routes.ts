import { Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";

export const CHECKOUT_ROUTES: Routes = [
    {
        path: "",
        component: CartComponent
    }
]