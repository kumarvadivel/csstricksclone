import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-name-area',
  templateUrl: './author-name-area.component.html',
  styleUrls: ['./author-name-area.component.css']
})
export class AuthorNameAreaComponent  {

    @Input() name:any;

  constructor() { }

  

}
