# Angular Factory Method Example

Este proyecto es una implementación práctica del patrón de diseño **Factory Method** en una aplicación Angular. El propósito del proyecto es demostrar cómo se puede aplicar este patrón para centralizar la lógica de creación de objetos, mejorar la escalabilidad y mantener la modularidad del código.

---

## 📚 ¿Qué es el patrón Factory Method?

El **Factory Method** es un patrón de diseño creacional que permite delegar la lógica de creación de objetos a subclases o métodos especializados. Esto elimina la necesidad de instanciar objetos directamente con `new` y facilita la extensión del sistema sin modificar el código existente.

En el contexto de Angular, el Factory Method es útil para decidir qué servicio, componente o clase utilizar en función de las necesidades del sistema. 

---

## 🎯 Objetivos del Proyecto

1. Implementar el patrón **Factory Method** de forma clara y escalable en Angular.
2. Demostrar cómo centralizar la lógica de creación de servicios.
3. Aplicar principios de diseño como **Responsabilidad Única** y **Abierto/Cerrado**.
4. Mostrar cómo integrar la solución con componentes standalone de Angular.

---

## 🚀 ¿Cómo funciona la aplicación?

1. **Servicios de Notificación**:
   - Cada tipo de notificación (`email`, `sms`, `push`) tiene su propio servicio que encapsula su lógica.
   - Los servicios implementan la interfaz `NotificationService`, asegurando un contrato común.

2. **Fábrica de Servicios**:
   - La clase `NotificationFactory` actúa como el Factory.
   - Usa un mapa de objetos (`Object Map`) para decidir dinámicamente qué servicio devolver según el tipo solicitado.

3. **Componente de Notificación**:
   - Ofrece botones para probar los diferentes tipos de notificaciones.
   - Muestra el mensaje de la notificación en el componente usando datos del servicio apropiado.

4. **Componente Principal**:
   - Muestra información sobre cómo funciona la aplicación y organiza los componentes.

---

## 🌟 Ventajas del Patrón Factory Method

1. **Centralización**: 
   La lógica de creación se encuentra en un único lugar.
   
2. **Abierto/Cerrado**: 
   Puedes añadir nuevos tipos sin modificar el código existente.
   
3. **Mantenibilidad**: 
   Cada tipo de notificación tiene su propia lógica encapsulada en un servicio independiente.

4. **Flexibilidad**: 
   Es fácil adaptar el sistema a nuevos requerimientos.

5. **Escalabilidad**:
   Añadir nuevos tipos de notificación solo requiere crear un nuevo servicio e integrarlo en el `NotificationFactory`.

6. **Modularidad**: 
   Cada servicio está separado, lo que facilita su mantenimiento y pruebas.

7. **Componente Standalone**: 
   Uso de componentes standalone para aprovechar las últimas características de Angular.

---

## 📋 Ejemplo de Uso del Factory Method

El archivo `notification-factory.service.ts` ilustra cómo se aplica el patrón Factory Method:

```typescript
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
