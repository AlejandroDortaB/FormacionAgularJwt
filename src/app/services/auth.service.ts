import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username:string,password:string){
    this.http.post('http://localhost:8080/auth/login',{username:username,password:password}).pipe(
      tap((result:any)=>{
        sessionStorage.setItem("token",result.token)
      })
    ).subscribe();
  }
  register(username:string,password:string){
    this.http.post('http://localhost:8080/auth/register',{username:username,password:password}).subscribe((result:any)=>{
      console.log("result",result)
    })
  }
  logout(){
    sessionStorage.removeItem("token")
  }

  retrictedPetition(){
    this.http.post('http://localhost:8080/api/v1/demo',{}).subscribe((result:any)=>{
      console.log("result",result)
    })
  }
}
