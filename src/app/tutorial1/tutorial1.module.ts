import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tutorial1Component } from './tutorial1.component';
import { RouterModule } from '@angular/router';
import { routes } from './tutorial1.routes';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tutorial1Component]
})
export class Tutorial1Module { }
