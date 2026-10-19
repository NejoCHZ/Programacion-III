import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  registeredUsers: number = 12;
  registeredPeople: number = 48;
  pendingActivities: number = 6;
  systemStatus: string = 'Operativo';
}
