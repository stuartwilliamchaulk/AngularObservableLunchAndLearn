import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('button1') public button1: ElementRef;
  private  button1Obs: Observable<any>;

  public ngAfterViewInit() {
    this.button1Obs = Observable.fromEvent(this.button1.nativeElement, 'click');
    this.button1Obs.subscribe((event) => {
      console.log(event);
    });
  }

  public doCount: number = 0;
  private doObs: Observable<any>;
  public wireDo(): void {
    this.doObs = this.button1Obs.map((event) => {
        return this.doCount++;
    })
  }

  public takeCount: number = 0;
  private takeObs: Observable<number>;
  public wireTake(): void {
    this.takeObs = this.button1Obs.map((event) => {
        return this.takeCount++;
    }).take(5);
  }

  public reduceObs: Observable<number>;
  public wireReduce(): void {
    this.reduceObs = this.button1Obs
    .map((event) => { return 1; })
    .reduce((x,y)=>{
      console.log("Reduce:" + (x+y));
      return x+y;
    });
  }

  public scanObs: Observable<number>;
  public scanReduce(): void {
    this.scanObs = this.button1Obs
    .scan((x,y)=>{
      if (Number.isInteger(x)) return x + 1;
      return 0;
    });
  }
}
