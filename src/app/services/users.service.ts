import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getUser(id): Observable<any>{
    return this.http.get(`${this.urlRoot}users/${id}.json`);
  }

  postUser(user: user){
    return this.http.post(`${this.urlRoot}users/.json`, user).pipe(
      map((res: any) =>{
        user.id_user = res.name;
        return user;
      })
    );
  }

  putUser(user: user){
    const userTemporary = {
      ...user
    }
    delete userTemporary.id_user;
    return this.http.put(`${this.urlRoot}users/${user.id_user}.json`,userTemporary).pipe(
      map((res: any) =>{
        user.id_user = res.name;
        return user;
      })
    );
  }
}
