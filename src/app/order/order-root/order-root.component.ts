import { Component, OnInit } from '@angular/core';
import { OrderRow } from '../order-row.model';
import { CatalogService } from '../catalog.service';
import { Book } from '../book.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css'],
  providers: [CatalogService]
})
export class OrderRootComponent implements OnInit {
  manualMode = false;

  rows = [
    new OrderRow('Petit bonhomme en mousse', 'Patrick P', 12, 1),
    new OrderRow('Au clair dela', 'Luna', 15, 2)
  ];
  books$: Observable<Book[]>;

  constructor(private catalog: CatalogService) { }

  removeRow(row: OrderRow): void {
    this.rows = this.rows.filter(r => r !== row);
  }

  addRow(row: OrderRow): void {
    this.rows.push(row);
  }

  ngOnInit() {
    this.books$ = this.catalog.getList();
  }

}
