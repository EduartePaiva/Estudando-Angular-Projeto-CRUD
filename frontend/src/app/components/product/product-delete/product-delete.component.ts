import { ProductService } from './../product.service';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})

export class ProductDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productService:ProductService
  ){}

    deletarProduto(){
      const id = `${this.product.id}`
      this.productService.deleteById(id).subscribe()
      this.productService.showMessage(`${this.product.name} foi excluído!`)
      this.dialogRef.close(true)
    }

}
