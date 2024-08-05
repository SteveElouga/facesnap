import { UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [UpperCasePipe, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title: string = "snapface";
  

  constructor(private router: Router){}

  addNewFaceSnap(): void {
    this.router.navigateByUrl('newFaceSnap')
  }
}
