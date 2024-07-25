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
      "https://images.pexels.com/photos/2171277/pexels-photo-2171277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Mon meilleur ami depuis toujours !",
      new Date(),
      100
    ),
    new FaceSnap(
      "Maxence",
      "https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg",
      "Mon pote depuis toujours !",
      new Date(),
      255
    ).withLocation('A Newyork'),
    new FaceSnap(
      "Mbondo",
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Ma syster!",
      new Date(),
      700
    )
  ]

  getFaceSnaps(): FaceSnap[]{
    return [...this.facesnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap{
    const foundSnapFace: FaceSnap | undefined= this.facesnaps.find(facesnap => facesnap.id = faceSnapId)

    if(!foundSnapFace){
      throw new Error("This snapFace does not exist !");
    }
    return foundSnapFace
  }

  foundSnapFaceById(faceSnapId : string, snaptype: snapType): void{
    const facesnap: FaceSnap | undefined= this.getFaceSnapById(faceSnapId)

    facesnap.snap(snaptype)
  }
}