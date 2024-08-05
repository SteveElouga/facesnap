import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Observable } from "rxjs";
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnap } from "../models/face-snap";
import { FaceSnapsService } from "../services/face-snaps.service";
import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  selector: "app-facs-snap-list",
  standalone: true,
  imports: [FaceSnapComponent, RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: "./facs-snap-list.component.html",
  styleUrl: "./facs-snap-list.component.scss",
})
export class FacsSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();
  }

  onBack(): void {
    this.route.navigateByUrl("");
  }
}
