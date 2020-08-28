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
  nomeDoCurso: string='Angular';
 valorInicial:number=15;
  
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
  // tslint:disable-next-line: typedef
  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }
  // tslint:disable-next-line: typedef
  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit(): void {
  }

}
