import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';

@Component({
  styleUrls: ['./observables.component.css'],
  templateUrl: './observables.component.html'
})
export class ObservablesComponent implements AfterViewInit {
  @ViewChild('subjectButton') public subjectButton: ElementRef;
  @ViewChild('errorButton') public errorButton: ElementRef;
  public timedObservable: Observable<Date>;
  public currentDateTime: Date | string;

  public constructor() {
    this.timedObservable = Observable.create((observer) => {
      var interval = setInterval(() => {
        observer.next(new Date());
      }, 1000);
      var stopper = setTimeout(() => {
        observer.complete();
        clearInterval(interval);
      }, 1000000);
    })
  }

  public ngAfterViewInit() {

    let x = this.timedObservable.subscribe(
      (value) => { this.currentDateTime = value; },
      undefined,
      () => { this.currentDateTime = "Clock terminated"; }
    );

    // Subject example.
    
    this.subjectObservable = Observable.fromEvent(this.subjectButton.nativeElement, 'click');
    this.subjectObservable.subscribe(this.subject);
    this.subject.subscribe((value) => {
      this.subjectData.push(new Date().getMilliseconds());
    });

    this.errorSubject.subscribe(
      (val) => { this.errorString = val},
      (error) => { this.errorString = "Problem: " + error},
      () => { this.errorString = "Terminated"}
    );

  }

  // Subject example
  public subjectData: Array<number> = new Array<number>();
  private subject: Subject<number> = new Subject();
  private subjectObservable: Observable<any>;
  private isHot:boolean = false;

  doOnNext() {
    this.subject.next(new Date().getMilliseconds());
  }

  clearSubject() {
    this.subjectData = new Array<number>();
  }

  // error example
  private errorCount: number = 0;
  private errorSubject: Subject<string> = new Subject();
  public errorString: string;
  private errorClick(): void{
    this.errorCount++;
    if (this.errorCount === 3) { this.errorSubject.error("Nope"); }
    else 
    if(this.errorCount == 5){ this.errorSubject.complete();}
    else{
      this.errorSubject.next(this.errorCount.toString());
    }

  }

}
