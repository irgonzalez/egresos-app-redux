import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        IngresoEgresoComponent,
        EstadisticaComponent,
        DetalleComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
