import { Component, OnInit } from '@angular/core';
import { OrderRow } from '../order-row.model';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {
  manualMode = false;
  rows = [
    new OrderRow('Petit bonhomme en mousse', 'Patrick P', 12, 1),
    new OrderRow('Au clair dela', 'Luna', 15, 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
