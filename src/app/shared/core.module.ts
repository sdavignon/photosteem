import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

import {HeaderComponent} from "../components/header/header.component";
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {LazyLoadImageModule} from 'ng2-lazyload-image';
import {SteemService} from "../services/steem/steem.service";
import {PostCardComponent} from "../components/post-card/post-card.component";
import {LoaderComponent} from "../components/loader/loader.component";
import {DialogComponent} from "../components/dialog/dialog.component";

import 'hammerjs';

const FastClick = require('fastclick');
FastClick.attach(document.body);

import {AuthService} from "../services/auth/auth.service";
import {ParametersService} from "../services/parameters/parameters.service";
import {SlideshowComponent} from "../components/slideshow/slideshow.component";
import {GoogleAnalyticsService} from "../services/analytics/google-analytics.service";
import {AlertService} from "../services/alert/alert.service";
import {ContentComponent} from "../components/content/content.component";
import {WarningComponent} from "../components/warning/warning.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    RouterModule
  ],
  declarations: [
    ContentComponent,
    HeaderComponent,
    PostCardComponent,
    LoaderComponent,
    DialogComponent,
    SlideshowComponent,
    WarningComponent
  ],
  providers: [
    SteemService,
    AuthService,
    ParametersService,
    GoogleAnalyticsService,
    AlertService
  ],
  entryComponents: [DialogComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ContentComponent,
    LoaderComponent,
    LazyLoadImageModule,
    HeaderComponent,
    DialogComponent,
    InfiniteScrollModule,
    PostCardComponent,
    SlideshowComponent,
    WarningComponent
  ]
})
export class SharedModule { }
