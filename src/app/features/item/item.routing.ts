import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFormComponent } from './views/item-form/item-form.component';
import { ItemListComponent } from './views/item-list/item-list.component';

const routes: Routes = [{
  path: 'item',  children: [
    {
      path: 'form', component: ItemFormComponent
    },
    {
      path: 'list', component: ItemListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemRouteModule { }
