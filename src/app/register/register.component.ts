import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected username: string="";
  protected password: string="";
  protected passwordVerify: string="";
  private  authService= inject (AuthService);

  
  register() {
   // console.log("Register:: ",this.username,"  ",this.password, " ",this.passwordVerify);
    if(this.password == this.passwordVerify){
      this.authService.register(this.username,this.password)
    }else{
      //TODO error de contraseñas no son iguales
    }
  }

}
