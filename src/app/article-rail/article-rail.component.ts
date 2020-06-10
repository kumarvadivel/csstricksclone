import { HEROES,addata } from './../data/article-rail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-rail',
  templateUrl: './article-rail.component.html',
  styleUrls: ['./article-rail.component.css']
})
export class ArticleRailComponent {

 heroes=HEROES
 addata=addata
  constructor() { 
      console.log(this.heroes)
  }

 
}
