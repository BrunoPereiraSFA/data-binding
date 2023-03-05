import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent2Component } from './primeiro-component2/primeiro-component2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { FunilComponent } from './funil/funil.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    FunilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    BrowserModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
