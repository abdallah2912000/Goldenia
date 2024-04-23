import { Component } from '@angular/core';
import { MainHeaderComponent } from './main-header/main-header.component';
import { OurBusinessComponent } from './our-business/our-business.component';
import { GoldeniaServisesComponent } from './goldenia-servises/goldenia-servises.component';
import { OurTeamComponent } from './our-team/our-team.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainHeaderComponent,
    OurBusinessComponent,
    GoldeniaServisesComponent,
    OurTeamComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
