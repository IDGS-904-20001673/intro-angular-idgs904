//aqui van las librerias que se trabajan en el proyecto
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { ievnComponent } from './ievn/ievn.components';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { OperasBasComponent } from './escuela/formularios/operas-bas/operas-bas.component';
import { OperasModule } from './escuela/formularios/operas/operas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalifiacionAlumComponent } from './escuela/califiacion-alum/califiacion-alum.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';


//aqui agregamos nuestras referencias a otros htmls
@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalifiacionAlumComponent,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OperasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
