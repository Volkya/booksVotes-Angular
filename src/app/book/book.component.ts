import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // add class to component
  @Input() book: Book; // input of component

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
