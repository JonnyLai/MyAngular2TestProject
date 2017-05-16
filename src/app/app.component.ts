import { Component } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public datasvc:DataService){

  }
  ngOnInit() {

  }

  doSearch(input: HTMLInputElement) {
    this.title = input.value;
  }

  doClearn(input: HTMLInputElement) {
    this.title = input.value = "";
  }

  doDelete(item) {
    let idx = this.datasvc.data.indexOf(item);
    this.datasvc.data.splice(idx, 1);
  }
}


