import { Routes } from '@angular/router'
import { Home } from '../public/page/home/home'
import { Login } from '../public/page/login/login'
import { Register } from '../public/page/register/register'

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', redirectTo: '/login'},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    
];
