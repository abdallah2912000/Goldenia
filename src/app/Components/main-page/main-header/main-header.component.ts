import { Component, HostListener, viewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormHeaderComponent } from '../../form-page/form-header/form-header.component';



@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    FormHeaderComponent
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  isShow: boolean = true;

  showMenu() {
    this.isShow = !this.isShow;
  }


  butoonVisible: boolean = true;

  @HostListener('window:scroll', ['$event'])
  scrolling() {
    if (window.scrollY > 200) {
      this.butoonVisible = false;
    } else {
      this.butoonVisible = true
    }
  }
}
