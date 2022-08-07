import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 username='';
 loginElement!:ElementRef;
  constructor(private http:HttpClient) { }
 getUsers():Observable<Login[]>{
  return this.http.get<Login[]>('./assets/users/users.json');
 }
}
