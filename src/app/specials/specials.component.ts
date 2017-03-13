import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Component({
  styleUrls: [ './specials.component.css' ],
  templateUrl: './specials.component.html'
})
export class SpecialsComponent {

 

  public constructor() {
    this.intervalObs = Observable.interval(1000);
    
  }

  public intervalObs: Observable<number>;

  public rangeObs: Observable<number>;
  public rangeClick() {
    this.rangeObs = Observable.range(10, 5);
    this.rangeObs.subscribe((val) => { console.log(val);});
  }

  public timerObs: Observable<any>;
  private timerPauser = new Subject();
  private currentlyPaused = false;
  public timerClick() {
    if (this.timerObs == undefined) {
      let timer = Observable.timer(1000, 5);
      this.timerObs = this.timerPauser.switchMap(paused => paused ? Observable.never() : timer);
      this.timerPauser.next(true);
    }
    else{
      this.timerPauser.next(this.currentlyPaused);
      this.currentlyPaused = !this.currentlyPaused;
    }
  }

}
