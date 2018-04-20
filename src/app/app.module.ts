import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routing } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/Header/Header.component';
import { FooterComponent } from './modules/Footer/Footer.component';

import { HomePageComponent } from './page/HomePage/HomePage.component'; 
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from './typescripts/free/index';
import { MDBBootstrapModulePro } from './typescripts/pro/index';

@NgModule({
    declarations: [
        AppComponent,       
        HeaderComponent,
        FooterComponent,       
        HomePageComponent
       
         ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        Routing,
        NgbModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        MDBBootstrapModulePro.forRoot(),       
        HttpModule,
        HttpClientModule,
        
    ],
    
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],    
})
export class AppModule {
    constructor(private injector: Injector) {
       
    }
}
