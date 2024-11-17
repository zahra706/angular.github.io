import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap-g1',
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.css']
})
export class FaceSnapG1Component implements OnInit {
  @Input() faceSnap!:FaceSnap;
  valbou!:string;

  constructor() { }

  ngOnInit(): void {
    this.valbou="ajouter";
    
  
    
  }
  onsnap():void{
    if (this.valbou==="ajouter"){
      this.faceSnap.snaps++;
      this.valbou="suprimer";
    }else{
      this.faceSnap.snaps--;
      this.valbou="ajouter";
    }
  
  }

}
