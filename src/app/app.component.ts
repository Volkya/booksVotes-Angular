import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';

import { Book } from './book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  books: Book[];

  constructor(){
    this.books = [
      //new Book('Angular', 'description', 100),
    ];
    console.log(this.books);
  }

  addBook(title: HTMLInputElement, description: HTMLInputElement){ // typedata - typescript
    this.books.push(new Book(title.value, description.value));
    return false; // Simple Page Application - not refresh
  }
}
