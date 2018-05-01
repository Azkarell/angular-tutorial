import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { RouterModule } from '@angular/router';
import { routes } from './introduction.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntroductionComponent]
})
export class IntroductionModule { }
