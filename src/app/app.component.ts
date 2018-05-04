import { Component, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {routes} from './app.routes'
import { Routes } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { ObservableMedia, MediaChange  } from "@angular/flex-layout";
import { Subscription } from 'rxjs/Subscription';
import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/de";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'Angular Tutorial';
  links: Routes;
  observableMedia: ObservableMedia
  watcher: Subscription
  mediachange: MediaChange
  date: Date;
  private _mobileQueryListener: () => void;

  constructor(private obsmed: ObservableMedia ,changeDetectorRef: ChangeDetectorRef) {
    this.watcher = obsmed.subscribe(n => {
      this.mediachange = n;
    });
    this.links = routes.filter(route => route.path !== '' && route.path !== '**' && route.path !== 'overview');
    this.date = new Date();
    registerLocaleData(localeDe);
    
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }
}
