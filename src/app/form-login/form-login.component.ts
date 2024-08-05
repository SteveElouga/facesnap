import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-form-login",
  standalone: true,
  imports: [],
  templateUrl: "./form-login.component.html",
  styleUrl: "./form-login.component.scss",
})
export class FormLoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  onLogin() {
    this.auth.login();

    this.router.navigateByUrl("facesnaps");
  }
}
