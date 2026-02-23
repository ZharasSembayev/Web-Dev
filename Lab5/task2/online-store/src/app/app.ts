import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
  <div class="container">
    <h1>Online Store</h1>

    <div class="categories">
      <button 
        *ngFor="let category of categories"
        (click)="selectCategory(category.id)"
        [class.active]="selectedCategoryId === category.id">
        {{ category.name }}
      </button>
    </div>

    <div *ngIf="selectedCategoryId; else selectMsg">
      <app-product-list [products]="products"></app-product-list>
    </div>

    <ng-template #selectMsg>
      <p class="select-message">Please select a category</p>
    </ng-template>
  </div>
  `
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.products = this.productService.getProductsByCategory(id);
  }
}