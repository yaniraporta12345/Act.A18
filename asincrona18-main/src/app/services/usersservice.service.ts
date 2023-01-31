import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  //crear una instancia de httpClient

  constructor(private http:HttpClient) {
  }
  //definir la url del la api (la baseURL de la api estara en enviroment.ts )
  apiUser = environment.apiURL+'users/';
  //metodo get para obtener datos de la api user
  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUser)
  }
  getUserId(userId:string):Observable<Users>{
    const url = this.apiUser+userId;
  return this.http.get<Users>(url);
  }

  postUser(usuario:Users):Observable<Users>{
    return this.http.post<Users>(this.apiUser,usuario)
  }

  //metodo get interceptor
  getUsersAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser,{observe:'response'});
  }
}
