import { Component } from '@angular/core';

// import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import { Routes, RouterModule} from '@angular/router';
// import {NotFoundComponent} from './404/404.component'

const appRouter: Routes = [
    {path: 'login', component:LoginComponent}
    // {path: 'signup', component:SignupComponent},
    // {path: '**', component:NotFoundComponent}
];

export const routing = RouterModule.forRoot(appRouter);