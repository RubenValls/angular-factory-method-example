import { Injectable } from '@angular/core';
import { NotificationService } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmailNotificationService implements NotificationService {
  send(message: string): string {
    return `Correo enviado: ${message}`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class SmsNotificationService implements NotificationService {
  send(message: string): string {
    return `SMS enviado: ${message}`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService implements NotificationService {
  send(message: string): string {
    return `Push Notification enviada: ${message}`;
  }
}
