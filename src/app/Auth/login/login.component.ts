import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router: Router = inject(Router);

  username = "testuser";
  password = "testpassword";

  onLogin(): void {
    let user: User = {
      userName: this.username,
      isLoggedIn: true
    }
    sessionStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(["/products"]);
  }
}
