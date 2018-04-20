import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/HomePage/HomePage.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent }   
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
