import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { Ng2FormComponent } from './ng2form';
import { ObservablesComponent } from './observables';
import { SpecialsComponent } from './specials';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'ng2form',  component: Ng2FormComponent },
  { path: 'observables',  component: ObservablesComponent },
  { path: 'specials',  component: SpecialsComponent },
  { path: '**',    component: NoContentComponent },
];
