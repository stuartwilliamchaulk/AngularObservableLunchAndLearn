import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';

@Component({
  styleUrls: [ './observables.component.css' ],
  templateUrl: './observables.component.html'
})
export class ObservablesComponent implements AfterViewInit {

  public timedObservable: Observable<Date>;
  public currentDateTime: Date | string;

  public constructor() {
    this.timedObservable = Observable.create((observer) => {
      var interval =  setInterval(() => {
          observer.next(new Date());
        }, 1000);
      var stopper = setTimeout(() => {
        observer.complete();
        clearInterval(interval);
      }, 10000);
    })
  }

  public ngAfterViewInit() { 
    let x = this.timedObservable.subscribe(
      (value) => {this.currentDateTime = value;},
      undefined,
      () => {this.currentDateTime = "Clock terminated";}
     );

  }
}
