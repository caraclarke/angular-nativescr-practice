// import dependency components for use
import { Component, OnInit } from '@angular/core';
// include router so we can navigate to next page
import { Router } from '@angular/router';
// include location to listen for pop events in navigation stack (going backwards)
import { Location } from '@angular/common';

// @Component tells us which HTML file to pair with this logic
@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit {
  // make personList public
  // allows list to bind to HTML UI --> render on front end
  public personList: Array<Object>;

  // initializes list
  // using localStorage to store data
  // parse localStorage data if it exists of use an empty array if it doesnt exist
  constructor(private router: Router, private location: Location) {
    this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    // using subscribe method on location object
    // listening for pop (backwards) events in navigation stack
    // when it happends we can reload from localStorage
      this.location.subscribe((path) => {
          this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
      });
    }

    ngOnInit() {}

    // create method that will navigate to page/route
    create() {
      this.router.navigate(["/create"]);
    }
  }
