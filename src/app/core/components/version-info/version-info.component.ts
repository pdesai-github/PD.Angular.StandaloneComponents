import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';

@Component({
  selector: 'app-version-info',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './version-info.component.html',
  styleUrl: './version-info.component.scss'
})
export class VersionInfoComponent {

}
