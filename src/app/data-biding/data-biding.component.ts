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
  conteudoAtual: string = '';
  conteudoSalvo: string = '';
  isMouseOver = false;
  
  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  onClick() {
    alert('Botão clicado!');
  }
  onKeyUp(event: KeyboardEvent) {//recebe o que foi passado pelo template
    console.log(event);
    this.conteudoAtual = event.key;
  }
  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }
  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
