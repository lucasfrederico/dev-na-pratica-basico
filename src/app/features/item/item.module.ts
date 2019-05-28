import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './views/item-form/item-form.component';
import { ItemListComponent } from './views/item-list/item-list.component';
import { ItemRouteModule } from './item.routing';

@NgModule({
  declarations: [ItemFormComponent, ItemListComponent],
  imports: [
    CommonModule,
    ItemRouteModule
  ]
})
export class ItemModule { }
