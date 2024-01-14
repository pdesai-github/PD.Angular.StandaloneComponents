import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { JobHistoryComponent } from '../job-history/job-history.component';
import { EducationComponent } from '../education/education.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, PersonalDetailsComponent, JobHistoryComponent, EducationComponent, ContactDetailsComponent, AddressComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  loadAddress = false;
  
  onLoadAddress(): void {
    this.loadAddress = true;
  }
}
