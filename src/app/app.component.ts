import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { FormPageComponent } from './Components/form-page/form-page.component';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MainPageComponent,
    FormPageComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Goldenia';
}
