import { Component } from '@angular/core';
import {Articulo} from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 articulos : Articulo[];

constructor(){
	//this.articulos=new Articulo[5];

	this.articulos=[
new Articulo('Pregunta 1 ','Resultado A',5),
new Articulo('Pregunta 2 ','Resultado B',4),
new Articulo('Pregunta 3 ','Resultado C',3)
	];

}

 sortedArticulos(): Articulo[]{
 return this.articulos.sort((a:Articulo, b:Articulo)=> b.votes - a.votes);
 }

 addArticulo(title: HTMLInputElement,link: HTMLInputElement){
 	console.log(`Se agregó el artículo: ${title.value} y el enlace: ${link.value} `);
 	this.articulos.push( new Articulo(title.value,link.value,0) );
 	title.value='';
 	link.value='';
 	return false;
 }

}
