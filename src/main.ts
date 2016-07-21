import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent, environment } from './app/';

import { ListComponent } from './app/list/list.component';
import { CreateComponent } from './app/create/create.component';

if (environment.production) {
  enableProdMode();
}

export const AppRoutes: RouterConfig = [
  { path: "", component: ListComponent },
  { path: "create", component: CreateComponent }
]

bootstrap(AppComponent, [provideRouter(AppRoutes)]);

/*

import every component we want to link
when routes are defined, route with blank path is default component
inject routes when boostrapping

*/
