import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderRow } from '../order-row.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  @Input() rows: OrderRow[];

  @Output() removeBookRow = new EventEmitter<OrderRow>();
  constructor() { }

  ngOnInit() {
  }

}
