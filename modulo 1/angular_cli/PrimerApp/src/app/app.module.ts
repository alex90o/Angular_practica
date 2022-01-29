import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.componet';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDrivenComponent } from './form-driven/form-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAlumnosComponent,
    ReactivoComponent,
    FormDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
