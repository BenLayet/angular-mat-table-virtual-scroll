import { Component, OnInit, ViewChild} from '@angular/core';
import {ArrayDataSource, CollectionViewer, DataSource, ListRange} from '@angular/cdk/collections';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-table-virtual-scroll',
  templateUrl: './table-virtual-scroll.component.html',
  styleUrls: ['./table-virtual-scroll.component.css']
})
export class TableVirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewPort: CdkVirtualScrollViewport;

  items = Array.from({length: 100}).map( (_ ,i) => {return {name: "item #"+i, number:i};});

  renderedItems:any[];

  constructor() { }

  ngOnInit() {
  }

}