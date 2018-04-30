import { Component, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {routes} from './app.routes'
import { Routes } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { ObservableMedia, MediaChange  } from "@angular/flex-layout";
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
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
  private _mobileQueryListener: () => void;

  constructor(private obsmed: ObservableMedia ,changeDetectorRef: ChangeDetectorRef) {
    this.watcher = obsmed.subscribe(n => {
      this.mediachange = n;
    });
    this.links = routes.filter(p => p.path !== '' && p.path !== '\*\*');
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }
}
