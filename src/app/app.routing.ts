import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { HomeworkComponent } from './Page/Homework/Homework.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'homework', component: HomeworkComponent }
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
