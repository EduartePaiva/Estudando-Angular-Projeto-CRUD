import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',

  }
  formPrice = new FormControl('',Validators.required)
  formName = new FormControl('', Validators.required);
  


  constructor(private ProductService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
  }

  createProduct() {
    if(!this.product.price || typeof(this.product.price) != 'number' || this.product.name === ''){
      this.ProductService.showMessage('Valor inserido inválido')
      return
    }

    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto criado!')
      this.cancel()
    })
    
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
