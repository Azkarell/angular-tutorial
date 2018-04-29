import { Component, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {routes} from './app.routes'
import { Routes } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'Angular Tutorial';
  links: Routes;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private iconReg: MatIconRegistry) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.iconReg.addSvgIcon("logo","assets/images/angular.svg");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.links = routes.filter(p => p.path !== '' && p.path !== '\*\*');
    console.log(this.links);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
