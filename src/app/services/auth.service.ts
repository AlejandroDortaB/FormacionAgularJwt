import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../intefaces/login-response';
import { GeneralResponse } from '../intefaces/general-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) {}

  login(username:string,password:string){
    this.http.post<LoginResponse>('http://localhost:8080/auth/login',{username:username,password:password}).pipe(
      tap((result:LoginResponse)=>{
        console.log(result);
        sessionStorage.setItem("token",result.token)
        this.router.navigateByUrl('home');
      })
    ).subscribe();
  }
  register(username:string,password:string){
    this.http.post<GeneralResponse>('http://localhost:8080/auth/register',{username:username,password:password}).subscribe((result:GeneralResponse)=>{
      console.log("result",result)
      alert("registrado exitosamente")
    })
  }
  logout(){
    sessionStorage.removeItem("token");
    this.router.navigateByUrl('login');
  }

  retrictedPetition():Observable<GeneralResponse>{
    return this.http.post<GeneralResponse>('http://localhost:8080/api/v1/demo',{})
  }
}
