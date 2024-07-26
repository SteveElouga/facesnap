import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import {
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { Title } from "@angular/platform-browser";
import { FaceSnapsService } from "../services/face-snaps.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-single-face-snap",
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    RouterLink,
  ],
  templateUrl: "./single-face-snap.component.html",
  styleUrl: "./single-face-snap.component.scss",
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  btn!: string;
  snapped: Boolean = true;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.btn = "Oh Snap";

    this.getFaceSnap();
  }

  onAddSnap(): void {
    if (this.snapped) {
      this.faceSnapService.foundSnapFaceById(this.faceSnap.id, "snap");
      this.btn = "Oops Snapped";
      this.snapped = false;
    } else {
      this.faceSnapService.foundSnapFaceById(this.faceSnap.id, "unsnap");
      this.btn = "Oh Snapps";
      this.snapped = true;
    }
  }

  private getFaceSnap() {
    const facesnapId = this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFaceSnapById(facesnapId);
  }
}
