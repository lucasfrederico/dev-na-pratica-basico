import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './views/cliente-form/cliente-form.component';
import { ClienteListComponent } from './views/cliente-list/cliente-list.component';

const routes: Routes = [{
  path: 'cliente',  children: [
    {
      path: 'create', component: ClienteFormComponent
    },
    {
      path: 'list', component: ClienteListComponent
    },
    {
      path: 'edit', component: ClienteListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRouterModule { }
