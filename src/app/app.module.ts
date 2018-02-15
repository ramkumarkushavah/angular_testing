import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZoomButtonComponent } from './zoom-button/zoom-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
