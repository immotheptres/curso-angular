import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreEmpresa = 'marketing digital';
  titulos = 'paquetes';
  fecha = new Date ;
}
