import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
  //declarar variavel chamada URL
  url: string = 'http://youtube.com';//como ts podemos tipar a variável
  //fazer a saida da url no template
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
