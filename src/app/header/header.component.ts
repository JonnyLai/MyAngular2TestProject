import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  sitename = 'The Will Will Web - Jonny test';
  siteimg = '/assets/images/logo.png';
  counter = 0;
  constructor() { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.sitename = "Hello Jonny";
    //}, 1000);
  }

  changeTitle($event) {
    this.sitename = "Hello Jonny - Clicked";
    console.log($event);
    this.counter++;
  }

}
