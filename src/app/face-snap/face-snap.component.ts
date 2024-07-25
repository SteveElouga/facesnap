import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, LowerCasePipe, UpperCasePipe, RouterLink],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {



  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) { }

  onView() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`)
  }
}
