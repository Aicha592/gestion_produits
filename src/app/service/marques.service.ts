import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marques } from '../model/marques';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarquesService {

  private api = "http://localhost:8000";

  constructor(private http:HttpClient) { }

  getAll():Observable<Marques[]>{
    return  this.http.get<Marques[]>(this.api+"/marque/");
  }
  getById(id:any):Observable<Marques>{
    return  this.http.get<Marques>(this.api+"/marque/"+id);
  }

  deleteMarque(id :any){
    return this.http.delete(this.api+"/marque/"+id);
  }
  addMarque(marque :Marques){
    return this.http.post(this.api+"/marque/", marque);
  }
  updatMarque(id:any,marque : Marques){
    return this.http.put(this.api+"/marque/"+id,marque);
  }
}
