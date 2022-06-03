import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-type',
  templateUrl: './moto-type.component.html',
  styleUrls: ['./moto-type.component.css']
})
export class MotoTypeComponent implements OnInit {
 
  motoTable!: Moto[] ;
  display: string = 'none';

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
  }

  getMotosType(type: string) {
    this.motoService.getByType(type).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'true';
    })
  }



}
