import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotoService } from 'src/app/services/moto.service';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-marque',
  templateUrl: './moto-marque.component.html',
  styleUrls: ['./moto-marque.component.css']
})
export class MotoMarqueComponent implements OnInit {
 
  motoTable: Moto[] = [];
  display: string = 'none';

  constructor(private motoService: MotoService, private router: Router) { }

  ngOnInit(): void {
  }

  getMotoByMarque(marque: string) {
    this.motoService.getByMarque(marque).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'true';
    })
  }



}