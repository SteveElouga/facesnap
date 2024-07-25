import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  constructor(private router: Router){}

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

}
