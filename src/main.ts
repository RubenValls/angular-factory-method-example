import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NotificationComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [NotificationComponent],
  template: `
      <app-notification></app-notification>
  `,
})
export class App {}

bootstrapApplication(App);
