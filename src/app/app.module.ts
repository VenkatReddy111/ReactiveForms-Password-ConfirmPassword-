import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { HelloPipe } from './hello.pipe';
import {FormsModule}  from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    HelloPipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
