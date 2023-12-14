import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [],
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss'
})
export class SnapFaceComponent implements OnInit {
  @Input()faceSnap!: FaceSnap;

  buttonText!:string;

  ngOnInit(): void {

    this.buttonText='Oh Snap';
  }
  onAddSnap(){

    if(this.buttonText == 'Oh Snap'){
      this.faceSnap.snaps++;
      this.buttonText="Oops, Unsnap";
    }else{
      this.faceSnap.snaps--;
      this.buttonText='Oh Snap';
    }

  }
}
