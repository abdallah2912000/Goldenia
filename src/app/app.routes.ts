import { Routes } from '@angular/router';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { FormPageComponent } from './Components/form-page/form-page.component';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: "Home Page"
  },
  {
    path: 'join',
    component: FormPageComponent,
    title: 'Join Page'
  }
];
