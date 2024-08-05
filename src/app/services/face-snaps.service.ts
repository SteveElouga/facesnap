import { inject, Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { snapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FaceSnapsService {
  // http = inject(HttpClient)

  constructor(private http: HttpClient) {}

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps");
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  snapById(faceSnapId: number, snaptype: snapType): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((facesnap) => ({
        ...facesnap,
        snaps: facesnap.snaps + (snaptype === "snap" ? 1 : -1),
      })),
      switchMap((facesnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          facesnap
        )
      )
    );
  }

  addFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap> {
    return this.getFaceSnaps().pipe(
      map((faceTap) => faceTap.sort((a, b) => a.id - b.id)),
      map((sortedFaceSnap) => sortedFaceSnap[sortedFaceSnap.length - 1]),
      map((face) =>
        new FaceSnap(
          face.id + 1,
          faceSnap.title,
          faceSnap.imageUrl,
          faceSnap.description,
          new Date(),
          0
        ).withLocation(faceSnap.location)
      ),
      switchMap((newFace) =>
        this.http.post<FaceSnap>("http://localhost:3000/facesnaps", newFace)
      )
    );
  }
}
