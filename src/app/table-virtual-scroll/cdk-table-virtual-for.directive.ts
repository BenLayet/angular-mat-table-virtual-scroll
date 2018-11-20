import { CdkVirtualForOf, CdkVirtualForOfContext, CdkVirtualScrollViewport } from '@angular/cdk/scrolling/';
import {ArrayDataSource, CollectionViewer, DataSource, ListRange} from '@angular/cdk/collections';
import {animationFrameScheduler, Observable, Subject, Observer} from 'rxjs';
import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  IterableChangeRecord,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  NgIterable,
  NgZone,
  OnDestroy,
  SkipSelf,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
} from '@angular/core';
@Directive({
  selector: '[cdkTableVirtualFor]',
})
export class CdkTableVirtualForDirective<T> extends CdkVirtualForOf<T> {

  @Input()
  get cdkTableVirtualForOf(): DataSource<T> | Observable<T[]> | NgIterable<T> {
    return this.cdkVirtualForOf
  }
 set cdkTableVirtualForOf(value:DataSource<T> | Observable<T[]> | NgIterable<T> ){
   this.cdkVirtualForOf = value;
}


  constructor(
      /** The view container to add items to. */
      _viewContainerRef: ViewContainerRef,
      /** The template to use when stamping out new items. */
      _template: TemplateRef<CdkVirtualForOfContext<T>>,
      /** The set of available differs. */
      _differs: IterableDiffers,
      /** The virtual scrolling viewport that these items are being rendered in. */
      viewport: CdkVirtualScrollViewport,
      ngZone: NgZone) {
        super(_viewContainerRef, _template, _differs, viewport, ngZone);
  }

}