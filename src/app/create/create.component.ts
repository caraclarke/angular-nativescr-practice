// import angular components
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// define html page paired with ts code
@Component({
  moduleId: module.id,
  selector: 'app-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css']
})

export class CreateComponent implements OnInit {

  // define three public variables that will be bound to UI for this page
  public personList: Array<Object>;
  public firstname: string;
  public lastname: string;

  // initialize variables and pull any existing person data from local storage
  constructor(private location: Location) {
    this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    this.firstname = "";
    this.lastname = '';
  }

  ngOnInit() {}

  // check to make sure first/lastname variables not empty
  // if true push new object with them to personList []
  // re-save serialized version of that array
  // then go back in navigation stack
  save() {
    if (this.firstname != "" && this.lastname != "") {
      this.personList.push({firstname: this.firstname, lastname: this.lastname});

      localStorage.setItem("people", JSON.stringify(this.personList));
      this.location.back();
    }
  }
}
