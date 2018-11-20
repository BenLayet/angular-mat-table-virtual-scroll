import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { VirtualScrollBasicComponent } from './virtual-scroll-basic/virtual-scroll-basic.component';
import { TableVirtualScrollComponent } from './table-virtual-scroll/table-virtual-scroll.component';
import { CdkTableVirtualForDirective } from './table-virtual-scroll/cdk-table-virtual-for.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollDispatchModule, CdkTableModule ],
  declarations: [ AppComponent,  TableBasicExampleComponent, VirtualScrollBasicComponent, TableVirtualScrollComponent, CdkTableVirtualForDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
