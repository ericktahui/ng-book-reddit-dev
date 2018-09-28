import { Component, OnInit, HostBinding,Input} from '@angular/core';
import { Articulo } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() articulo: Articulo;

  constructor() { 
 
  }

  ngOnInit() {
  }


voteUp(): boolean{
this.articulo.voteUp();
return false;
}

voteDown(): boolean{
this.articulo.voteDown();
return false;
}

}
