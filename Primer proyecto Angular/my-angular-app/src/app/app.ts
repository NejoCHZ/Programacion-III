import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-angular-app';
}
