import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.componet';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
