import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPopComponent } from '../product-pop/product-pop.component';

@Component({
  selector: 'app-manage-products-table',
  templateUrl: './manage-products-table.component.html',
  styleUrls: ['./manage-products-table.component.sass']
})
export class ManageProductsTableComponent implements OnInit {

  filterValue = ''

  @Input() products: Array<ProductDetailModel> = []
  @Output() deleteProductById: EventEmitter<any> = new EventEmitter()
  @Output() updatePorductById: EventEmitter<any> = new EventEmitter()

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  deleteProduct(product:any){
    this.deleteProductById.emit(product)
  }
  updatePorduct(product:any){
    this.updatePorductById.emit(product)
  }
  createProduct(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width= "60%";
    this.dialog.open(ProductPopComponent, dialogConfig)
  }
  handleSearch(value:string){
    this.filterValue= value
  }


}
