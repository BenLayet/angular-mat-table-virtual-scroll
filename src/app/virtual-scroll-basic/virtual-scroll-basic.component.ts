import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-basic',
  templateUrl: './virtual-scroll-basic.component.html',
  styleUrls: ['./virtual-scroll-basic.component.css']
})
export class VirtualScrollBasicComponent {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

}