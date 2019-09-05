import { Component, OnInit } from '@angular/core';
import {Book} from '../book/book.model';

//import { Book } from '../book/book.model';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {


  ngOnInit() {
  }

  books: Book[];

  constructor(){

    this.books = [
      // new Book('Angular', 'description', 100),
    ];
    console.log(this.books);
  }

  addBook(title: HTMLInputElement, author: HTMLInputElement, editorial: HTMLInputElement, description: HTMLTextAreaElement){ // typedata - typescript
    this.books.push(new Book(title.value, author.value, editorial.value, description.value));
    return false; // Simple Page Application - not refresh
  }


}
