import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EsqueceusenhaComponent } from './pages/esqueceusenha/esqueceusenha.component';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    EsqueceusenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAQyL8792TsXuFPhddRx_e-uIPTdIQcc7Y",
      authDomain: "singularteste-cece9.firebaseapp.com",
      projectId: "singularteste-cece9",
      storageBucket: "singularteste-cece9.appspot.com",
      messagingSenderId: "39436609152",
      appId: "1:39436609152:web:e3c6f46a8c7330f8d72865"
    })
 
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
