import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../model/coach';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private api = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():Observable<Coach[]>{
    return  this.http.get<Coach[]>(this.api+"/coach/");
  }
  getById(id:any):Observable<Coach>{
    return  this.http.get<Coach>(this.api+"/coach/"+id);
  }

  deleteCoach(id :any){
    return this.http.delete(this.api+"/coach/"+id);
  }

  addCoach(coach :Coach){
    return this.http.post(this.api+"/coach/", coach);
  }
  updatCoach(id:any,coach : Coach){
    return this.http.put(this.api+"/coach/"+id,coach);
  }
}
