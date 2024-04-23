import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.css'
})
export class FormHeaderComponent {
  isShow: boolean = true;

  showMenu() {
    this.isShow = !this.isShow;
  }
}
