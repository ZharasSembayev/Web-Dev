import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
    imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'iPhone 15',
  //     description: 'Latest Apple smartphone',
  //     price: 500000,
  //     rating: 4.8,
  //     image: 'https://picsum.photos/200',
  //     images: [],
  //     link: 'https://kaspi.kz'
  //   }
  // ];
  products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 128GB Black',
    description: 'The Apple iPhone 15 features the powerful A16 Bionic chip and an advanced 48MP camera system. It offers Dynamic Island, a bright Super Retina display, and excellent battery life for everyday use.',
    price: 519990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hac/8635430093214.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/hac/8635430093214.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h48/h39/8635430158750.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h37/h13/8635430224286.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113127557/'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 256GB',
    description: 'The Samsung Galaxy S23 is powered by Snapdragon 8 Gen 2 for smooth performance. It features a stunning AMOLED display and a professional-grade camera system for high-quality photos and videos.',
    price: 449990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/hf7/6963564634110.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/hf7/6963564634110.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/hfa/6963564709646.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h75/h6e/6963564785182.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-108237091/'
  },
  {
    id: 3,
    name: 'Xiaomi 13 256GB',
    description: 'The Xiaomi 13 comes with a powerful Snapdragon processor and Leica-powered camera technology. It combines premium design, fast performance, and impressive photography capabilities.',
    price: 399990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1a/6958477361150.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/haf/h1a/6958477361150.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/hbc/6958477436686.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/had/6958477512222.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-13-256gb-108641029/'
  },
  {
    id: 4,
    name: 'Apple MacBook Air M1 256GB',
    description: 'The MacBook Air with Apple M1 chip delivers outstanding performance and energy efficiency. Its lightweight design and long battery life make it perfect for students and professionals.',
    price: 599990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/hb5/6399396012030.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hab/hb5/6399396012030.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h91/hcb/6399396087566.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h34/6399396163102.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-m1-256gb-100797845/'
  },
  {
    id: 5,
    name: 'HP Pavilion 15',
    description: 'The HP Pavilion 15 is equipped with an Intel Core i5 processor and 16GB of RAM. It is ideal for daily tasks, studying, and office work with reliable performance.',
    price: 379990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h55/6443907467262.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h55/6443907467262.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h84/h63/6443907542798.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/h7a/6443907618334.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-102298404/'
  },
  {
    id: 6,
    name: 'Lenovo IdeaPad 3',
    description: 'The Lenovo IdeaPad 3 features an AMD Ryzen processor and a lightweight design. It provides solid performance and long battery life for work and entertainment.',
    price: 299990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h6f/6403809708062.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h6f/6403809708062.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/hc5/6403809783598.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0b/h52/6403809859134.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-100746773/'
  },
  {
    id: 7,
    name: 'Apple AirPods Pro 2',
    description: 'The AirPods Pro 2 offer active noise cancellation and high-quality immersive sound. They provide a comfortable fit and seamless integration with Apple devices.',
    price: 139990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h77/h66/6438083807262.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h66/6438083807262.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h59/hb3/6438083882798.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hbc/h21/6438083958334.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-106671943/'
  },
  {
    id: 8,
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'The Galaxy Buds2 Pro deliver rich sound quality with active noise cancellation. They are compact, water-resistant, and designed for all-day comfort.',
    price: 109990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h3f/6809034597998.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h45/h3f/6809034597998.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h78/hb7/6809034673534.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h2a/h43/6809034749070.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-107904123/'
  },
  {
    id: 9,
    name: 'Apple iPad 10 64GB',
    description: 'The Apple iPad 10 features a large Liquid Retina display and powerful performance. It is perfect for studying, streaming, browsing, and creative tasks.',
    price: 289990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h76/8475119699998.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/h76/8475119699998.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h33/h24/8475119775534.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h93/8475119851070.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-64gb-113596382/'
  },
  {
    id: 10,
    name: 'Xiaomi Pad 6',
    description: 'The Xiaomi Pad 6 offers a high-resolution display and a powerful Snapdragon processor. It is suitable for productivity, multimedia consumption, and gaming.',
    price: 249990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h3c/8329152784382.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h90/h3c/8329152784382.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h8f/8329152860000.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h54/h78/8329152935536.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-113989776/'
  }
];

}