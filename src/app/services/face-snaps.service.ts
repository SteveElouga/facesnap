import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { snapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
 private facesnaps: FaceSnap[] = [
    new FaceSnap(
      "Archibald",
      "assets/images/pexels-vladalex94-1402787.jpg",
      "Mon meilleur ami depuis toujours !",
      new Date(),
      100
    ),
    new FaceSnap(
      "Maxence",
      "assets/images/pexels-christian-heitz-285904-842711 (1).jpg",
      "Mon pote depuis toujours !",
      new Date(),
      255
    ).withLocation('A Newyork'),
    new FaceSnap(
      "Mbondo",
      "../../assets/images/pexels-francesco-ungaro-1525041.jpg",
      "Ma syster!",
      new Date(),
      700
    )
  ]

  getFaceSnaps(): FaceSnap[]{
    return [...this.facesnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap{
    const foundSnapFace: FaceSnap | undefined= this.facesnaps.find(facesnap => facesnap.id === faceSnapId)

    if(!foundSnapFace){
      throw new Error("This snapFace does not exist !");
    }
    console.log(foundSnapFace)
    return foundSnapFace
  }

  foundSnapFaceById(faceSnapId : string, snaptype: snapType): void{
    const facesnap: FaceSnap | undefined= this.getFaceSnapById(faceSnapId)

    facesnap.snap(snaptype)
  }
}