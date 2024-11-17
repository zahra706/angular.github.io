import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
providedIn: 'root'
})
export class FaceSnapsService {
    mySnaps: FaceSnap[]=[
        new FaceSnap(
      'archi',
      "my BFF",
      new Date(),
      6,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      ),
      new FaceSnap(
        'baby',
        "beiber",
        new Date(),
        5,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/tedd-bear-792273_1280.jpg',
        ),
    ];
}