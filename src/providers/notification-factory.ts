import { Injectable } from '@angular/core';
import { NotificationService } from '../interfaces';
import {
  EmailNotificationService,
  PushNotificationService,
  SmsNotificationService,
} from '../services';

@Injectable({
  providedIn: 'root',
})
export class NotificationFactory {
  private notificationMap: { [key: string]: NotificationService };

  constructor(
    private emailService: EmailNotificationService,
    private smsService: SmsNotificationService,
    private pushService: PushNotificationService
  ) {
    this.notificationMap = {
      email: this.emailService,
      sms: this.smsService,
      push: this.pushService,
    };
  }

  getNotificationService(type: string): NotificationService {
    const service = this.notificationMap[type];
    if (!service) {
      throw new Error('Tipo de notificación no soportado');
    }
    return service;
  }
}
