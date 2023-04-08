import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: '',
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? ''
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }


  formPrice = new FormControl('', Validators.required)
  formName = new FormControl('', Validators.required);

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  updateProduct() {
    this.productService.update(this.product)?.subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso')
      this.cancel()
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
