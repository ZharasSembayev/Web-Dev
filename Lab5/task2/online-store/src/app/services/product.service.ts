import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [

    // SMARTPHONES (1)
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with A16 Bionic chip.',
      price: 519990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113127557/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Snapdragon 8 Gen 2 smartphone.',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h65/69065034727454.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-108237091/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 13',
      description: 'Premium Xiaomi smartphone with Leica camera.',
      price: 399990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h50/86009484148766.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-13-256gb-108641029/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'iPhone 14',
      description: 'Previous generation Apple flagship.',
      price: 469990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h15/86042945683486.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Samsung Galaxy A54',
      description: 'Affordable Samsung smartphone.',
      price: 229990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },

    // LAPTOPS (2)
    {
      id: 6,
      name: 'MacBook Air M1',
      description: 'Lightweight Apple laptop with M1 chip.',
      price: 599990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m1-256gb-100797845/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'HP Pavilion 15',
      description: 'Intel i5, 16GB RAM laptop.',
      price: 379990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo IdeaPad 3',
      description: 'AMD Ryzen laptop for work.',
      price: 299990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'ASUS VivoBook',
      description: 'Slim and stylish everyday laptop.',
      price: 349990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Acer Aspire 5',
      description: 'Affordable productivity laptop.',
      price: 279990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p0f/55291864.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 2
    },

    // HEADPHONES (3)
    {
      id: 11,
      name: 'AirPods Pro 2',
      description: 'Apple noise-cancelling earbuds.',
      price: 139990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-106671943/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Galaxy Buds2 Pro',
      description: 'Samsung wireless earbuds.',
      price: 109990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-107904123/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Sony WH-1000XM5',
      description: 'Premium Sony headphones.',
      price: 189990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'JBL Tune 760NC',
      description: 'Affordable JBL headphones.',
      price: 69990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h7c/64217926172702.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Xiaomi Buds 4',
      description: 'Budget wireless earbuds.',
      price: 49990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hb8/86682673512478.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 3
    },

    // TABLETS (4)
    {
      id: 16,
      name: 'iPad 10',
      description: 'Apple tablet with Liquid Retina display.',
      price: 289990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-64gb-113596382/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Xiaomi Pad 6',
      description: 'Powerful Android tablet.',
      price: 249990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-113989776/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Samsung Galaxy Tab S9',
      description: 'High-end Samsung tablet.',
      price: 399990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Huawei MatePad',
      description: 'Stylish Huawei tablet.',
      price: 199990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description: 'Affordable Android tablet.',
      price: 179990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}