import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  item: any;

  @Input()
  keyword:string;

  //@Output()
  //delete = new EventEmitter<any>();

  constructor(public datasvc:DataService) { }

  ngOnInit() {
  }

  //doDelete() {
  //  this.delete.emit(this.item);
  //}
}
