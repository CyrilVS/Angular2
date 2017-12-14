import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderManualFormComponent } from './order-manual-form/order-manual-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrderRootComponent, OrderTableComponent, OrderManualFormComponent],
  exports: [OrderRootComponent]
})
export class OrderModule { }
