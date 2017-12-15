import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderRow } from '../order-row.model';
import { Utils } from '../utils';

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

  totalTTC() {
    return this.rows && this.rows
      .map(row => row.TTC()) // Parcourt tous les rows est garde le prix TTC
      .reduce(Utils.total, 0); // Part de 0, somme le prix TTC courrant
  }

}
