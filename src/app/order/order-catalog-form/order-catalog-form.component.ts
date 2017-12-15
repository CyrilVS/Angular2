import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.model';
import { OrderRow } from '../order-row.model';

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})
export class OrderCatalogFormComponent implements OnInit {

  @Input() catalog: Book[];
  @Output() addCatalog = new EventEmitter<OrderRow>();
  catalogFormData: {book?: Book, quantity?: number} = {};

  constructor() { }

  emitAdd() {
    this.addCatalog.emit(new OrderRow(
      this.catalogFormData.book.title,
      this.catalogFormData.book.author,
      this.catalogFormData.book.price,
      this.catalogFormData.quantity || 1)
    );
    this.catalogFormData = {};
  }

  ngOnInit() {
  }

}
