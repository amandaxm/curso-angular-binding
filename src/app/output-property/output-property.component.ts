import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input()valor:number=0;
  //classe para emitir evento
  @Output() mudouValor= new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef
  constructor() { }

  incrementa(){
    console.log(this.campoValorInput.nativeElement.value++) ; 
    this.mudouValor.emit({novoValor:this.valor});
  }
  decrementa(){
    console.log(this.campoValorInput.nativeElement.value--);    
    this.mudouValor.emit({novoValor:this.valor});

  }
  ngOnInit(): void {
  }

}
