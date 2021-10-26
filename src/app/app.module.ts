import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdresaComponent } from './components/adresa/adresa.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditFormComponent,
    AdresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
