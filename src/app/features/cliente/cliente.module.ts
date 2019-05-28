import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './views/cliente-form/cliente-form.component';
import { ClienteListComponent } from './views/cliente-list/cliente-list.component';
import { ClienteRouterModule } from './cliente.routing';

@NgModule({
  declarations: [ClienteFormComponent, ClienteListComponent],
  imports: [
    CommonModule,
    ClienteRouterModule
  ]
})
export class ClienteModule { }
