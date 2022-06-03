import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from '../models/moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  apiUrl = environment.api + "motos";

  constructor(private httpClient : HttpClient) { }

  getMotosPhares():Observable<Moto[]>{
    return this.httpClient.get<Moto[]>(this.apiUrl+".json")
  }

  getById(id:number):Observable<Moto>{
    return this.httpClient.get<Moto>(this.apiUrl + '/' + id)
  }

  getByMarque(marque: string) :Observable<Moto[]> {
    return this.httpClient.get<Moto[]>(this.apiUrl+'.json?marque='+marque)
  }

  getByType(type: string): Observable<Moto[]> {
    return this.httpClient.get<Moto[]>(this.apiUrl+'.json?type='+type)
  }


}
