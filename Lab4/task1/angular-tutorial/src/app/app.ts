import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
}

//import {Component} from '@angular/core';
//@Component({
// selector: 'app-root',
// template:` hello universe `,
// styles: `
// :host{
//  color: #a144eb;
// }
// `, 
// })
// export class App{}

//import {Component} from '@angular/core';
//@Component({
//  selector: 'app-root',
//  template: `hello {{city}}`,
//})
//export class App{
  //city = 'Almaty';
//}

//import {Component} from '@angular/core';
//@Component({
//  selector: 'app-user',
//  template: `Username: {{username}}`,
//})
//export class User{
//  username = 'zharas';
//}

//@Component({
//  selector: 'app-root',
//  template: `
//  <section>
//  <app-user/>
//  </section>
//  `,
//  imports: [User],
//})
//export class App {}

//import {Component} from '@angular/core';

//@Component({
//  selector: 'app-root',
//  template: `
//  @if (isServerRunning) {
  //<p> Yes, the server is running </p>
  //}
  //@else {
  //<p> No, the server is not running </p>
  //}
  //`,
//})
//export class App {
  //isServerRunning = false;
//} 

//import {Component} from '@angular/core';

//@Component({
//  selector: 'app-root',
///  template: `
 //   @for (user of users; track user.id) {
 //     <p>{{ user.name }}</p>
 //   }
 // `,
//})
//export class App {
//  users = [
//    {id: 0, name: 'Sarah'},
//    {id: 1, name: 'Amy'},
  //  {id: 2, name: 'Rachel'},
    //{id: 3, name: 'Jessica'},
    //{id: 4, name: 'Poornima'},
  //];
//}