import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-motos-phares',
  templateUrl: './motos-phares.component.html',
  styleUrls: ['./motos-phares.component.css']
})
export class MotosPharesComponent implements OnInit {


  motoPhares: Moto[] = [];

  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotosPhares().subscribe(data => {
      data.forEach(moto => {
        if (moto.venteFlash) {
          this.motoPhares.push(moto)
        }
      });
    })
    console.log(this.motoPhares)  
  } 
    
}
