import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private  authService= inject (AuthService);
  protected text:string="";

  retricted(){
    this.authService.retrictedPetition().subscribe((result:any)=>{
      console.log(result);
      this.text=result.status;
    });
  }
  logOut(){
    this.authService.logout();
  }
}
