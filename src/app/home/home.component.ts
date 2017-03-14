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
}
