import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.componet';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAlumnosComponent,
    ReactivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
