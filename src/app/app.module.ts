import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightModule } from "ngx-highlightjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { LayoutModule } from '@angular/cdk/layout';
import {routes} from './app.routes'
@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    HighlightModule.forRoot({ theme: 'atom-one-dark'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
