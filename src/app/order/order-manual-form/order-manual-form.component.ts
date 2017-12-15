import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderRow } from '../order-row.model';

@Component({
  selector: 'app-order-manual-form',
  templateUrl: './order-manual-form.component.html',
  styleUrls: ['./order-manual-form.component.css']
})
export class OrderManualFormComponent implements OnInit {

  @Output() addBookRow = new EventEmitter<OrderRow>();
  manualFormData = new OrderRow();

  emitAdd() {
    this.addBookRow.emit(this.manualFormData);
    this.manualFormData = new OrderRow();
  }

  constructor() { }

  ngOnInit() {
  }

}
