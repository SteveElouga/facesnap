import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-facs-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, RouterOutlet],
  templateUrl: './facs-snap-list.component.html',
  styleUrl: './facs-snap-list.component.scss'
})
export class FacsSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService, private route: Router) { }
  
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();

  }

  onBack():void{
    this.route.navigateByUrl('')
  }
}
