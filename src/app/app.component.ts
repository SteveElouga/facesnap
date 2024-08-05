import { AsyncPipe, NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FacsSnapListComponent } from "./facs-snap-list/facs-snap-list.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FacsSnapListComponent,
    HeaderComponent,
    RouterOutlet,
    AsyncPipe,
    NgStyle
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
