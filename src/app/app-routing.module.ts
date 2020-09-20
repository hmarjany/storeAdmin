import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './Helper/auth.guard';

const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { 
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }