import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { verifyTokenGuard } from './guards/verify-token.guard';

export const routes: Routes = [
    
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent,canActivate:[verifyTokenGuard]},
    {path: '', component: LoginComponent },
    {path:"**",component:ErrorPageComponent}
];
