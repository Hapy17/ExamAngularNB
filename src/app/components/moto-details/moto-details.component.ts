import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.css']
})
export class MotoDetailsComponent implements OnInit {

  moto !: Moto

  constructor( private activatedRoute : ActivatedRoute, private motoService:MotoService) { }

  ngOnInit(): void {
    let id: number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.motoService.getById(id).subscribe(data=>{
      this.moto=data;
    })
  }

}
