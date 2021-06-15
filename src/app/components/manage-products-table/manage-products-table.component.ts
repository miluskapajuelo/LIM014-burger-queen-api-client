import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';

@Component({
  selector: 'app-manage-products-table',
  templateUrl: './manage-products-table.component.html',
  styleUrls: ['./manage-products-table.component.sass']
})
export class ManageProductsTableComponent implements OnInit {
  @Input() products: Array<ProductDetailModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
