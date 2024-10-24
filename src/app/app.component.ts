import {Component} from '@angular/core';
import {DxButtonModule, DxDataGridModule} from "devextreme-angular";
import {Employee, Service, State} from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DxButtonModule, DxDataGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Service]
})
export class AppComponent {
  dataSource: Employee[];

  states: State[];

  constructor(service: Service) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }
}
