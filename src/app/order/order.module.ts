import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderManualFormComponent } from './order-manual-form/order-manual-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderRootComponent, OrderTableComponent, OrderManualFormComponent],
  exports: [OrderRootComponent]
})
export class OrderModule { }
