import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {MatDialog} from '@angular/material/dialog'

import {ProductDeleteComponent} from '../product-delete/product-delete.component'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit{
  products!: Product[]
  displayedColumns = ['id','name','price','action']

  constructor(private productService:ProductService, private router:Router, public dialog: MatDialog){}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  editButton(id:string){
    this.router.navigate([`/products/update/${id}`])
  }

  deleteButton(product:Product, enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogref = this.dialog.open(ProductDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: product
    }).afterClosed().subscribe( result => {
      if(result){
        this.products = this.products.filter(productFilter => {
          return !(productFilter.id === product.id)
        })
      }
    })

  }
}
