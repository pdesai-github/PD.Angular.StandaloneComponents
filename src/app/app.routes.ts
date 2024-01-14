import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import('./Auth/login/auth.routes')
            .then(r => r.AUTH_ROUTES)
    },
    {
        path: "profile",
        loadChildren: () => import('./User/user.routes')
            .then(r => r.USER_ROUTES)
    },
    {
        path: "products",
        loadChildren: () => import('./Products/products.routes')
            .then(r => r.PRODUCT_ROUTES)
    },
    {
        path: "checkout",
        loadChildren: () => import('./Checkout/checkout.routes')
            .then(r => r.CHECKOUT_ROUTES)
    },
    {
        path: "",
        pathMatch:"full",
        redirectTo: "auth"
    }
];
