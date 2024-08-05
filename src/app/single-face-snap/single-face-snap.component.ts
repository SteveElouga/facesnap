import {
  AsyncPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgIf,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable, tap } from "rxjs";
import { FaceSnap } from "../models/face-snap";
import { FaceSnapsService } from "../services/face-snaps.service";

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
    NgIf,
    AsyncPipe,
  ],
  templateUrl: "./single-face-snap.component.html",
  styleUrl: "./single-face-snap.component.scss",
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;

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

  onAddSnap(faceSnapId: number): void {
    if (this.snapped) {
      this.faceSnap$  = this.faceSnapService
        .snapById(faceSnapId, "snap")
        .pipe(
          tap(() => {
            (this.btn = "Oops Snapped"), (this.snapped = false);
          })
        )
    } else {
      this.faceSnap$ = this.faceSnapService.snapById(faceSnapId, "unsnap").pipe(
        tap(() => {
          this.btn = "Oh Snapps",
          this.snapped = true
        })
      );
    }
  }

  private getFaceSnap() {
    const facesnapId = this.route.snapshot.params["id"];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(facesnapId);
  }
}
