import { Component } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes = routes;
  icons = {
    "menu": faBars
  }
}
