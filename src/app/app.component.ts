/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./ng2form'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Reactive Forms
      </a>
      <a [routerLink]=" ['./observables'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Hand rolled observables
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  public angularclassLogo = 'assets/img/bluemetal-logo.png';
  public name = 'BLUEMETAL An Insight Company';
  public url = 'https://bluemetal.com';

}
