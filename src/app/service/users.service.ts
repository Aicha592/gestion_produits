import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api = "http://localhost:8000";

  constructor(private http:HttpClient) { }

  getAll():Observable<Users[]>{
    return  this.http.get<Users[]>(this.api+"/user/");
  }
  getById(id:any):Observable<Users>{
    return  this.http.get<Users>(this.api+"/user/"+id);
  }

  deleteUser(id :any){
    return this.http.delete(this.api+"/user/"+id);
  }
  addUser(user :Users){
    return this.http.post(this.api+"/user/", user);
  }
  updatUser(id:any,user : Users){
    return this.http.put(this.api+"/user/"+id,user);
  }
}
