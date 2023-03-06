import { Component, OnInit } from '@angular/core';
import { Plan, PlanesService } from '../servicios/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  planes:Plan[]=[];
  constructor( private _planesService:PlanesService) { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.planes=this._planesService.getPlanes();
    console.log(this.planes);
  }
  
}
