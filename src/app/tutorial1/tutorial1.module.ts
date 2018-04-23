import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tutorial1Component } from './tutorial1.component';
import { RouterModule } from '@angular/router';
import { routes } from './tutorial1.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tutorial1Component]
})
export class Tutorial1Module { }
