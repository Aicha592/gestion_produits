import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private api = "http://localhost:8000";

  constructor(private http:HttpClient) { }

  getAll():Observable<Categories[]>{
    return  this.http.get<Categories[]>(this.api+"/categorie/");
  }
  getById(id:any):Observable<Categories>{
    return  this.http.get<Categories>(this.api+"/categorie/"+id);
  }

  deleteCategorie(id :any){
    return this.http.delete(this.api+"/categorie/"+id);
  }
  addCategorie(categorie :Categories){
    return this.http.post(this.api+"/categorie/", categorie);
  }
  updatCategorie(id:any,categorie : Categories){
    return this.http.put(this.api+"/categorie/"+id,categorie);
  }
}
