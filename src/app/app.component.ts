import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/login', icon: 'home' },
    { title: 'Diagnosticos', url: '/diagnosticos', icon: 'time' },
    { title: 'Centro de Salud', url: '/centrosalud', icon: 'compass' },
    { title: 'Medicamentos', url: '/medicamentos', icon: 'medkit' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
