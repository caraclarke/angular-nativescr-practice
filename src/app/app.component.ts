import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = 'app works!';
}

/*

code says we want this ts file to act as main routing outlet
all child pages and routes will flow through this file
this is because of <router-outlet> tag above

still need to configure routes

*/
