import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path: '', component: LoginComponent },
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"home",component:HomeComponent},
    {path:"**",component:ErrorPageComponent}
];
