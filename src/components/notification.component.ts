import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NotificationFactory } from '../providers';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf],
  styleUrls: ['./notification.css'],
  template: `
    <div class="container">
      <header>
        <h1>Factory Method Example</h1>
      </header>
      <section class="info">
        <h2>Información sobre la aplicación</h2>
        <p>
          Esta aplicación es un ejemplo del patrón de diseño <strong>Factory Method</strong>. 
          El Factory centraliza la lógica de creación de servicios para gestionar 
          diferentes tipos de notificaciones: correo, SMS y notificación push.
        </p>
        <p>
          Se han construido servicios independientes para cada tipo de notificación, 
          y el <code>NotificationFactory</code> se encarga de decidir cuál usar basado en un tipo proporcionado.
        </p>
        <p>
          Haz clic en los botones de abajo para probar las notificaciones.
        </p>
      </section>
    <div>
      <button (click)="sendNotification('email')">Enviar Correo</button>
      <button (click)="sendNotification('sms')">Enviar SMS</button>
      <button (click)="sendNotification('push')">Enviar Push</button>
      <button (click)="sendNotification('error')">Enviar Error</button>
      <p *ngIf="notificationMessage">{{ notificationMessage }}</p>
    </div>
    <div>
  `,
})
export class NotificationComponent {
  notificationMessage: string | null = null;

  constructor(private notificationFactory: NotificationFactory) {}

  sendNotification(type: string): void {
    try {
      const notificationService =
        this.notificationFactory.getNotificationService(type);
      this.notificationMessage = notificationService.send(
        'Tipo de notificación seleccionada correctamente'
      );
    } catch (error) {
      this.notificationMessage = 'Error: Tipo de notificación no soportado.';
    }
  }
}
