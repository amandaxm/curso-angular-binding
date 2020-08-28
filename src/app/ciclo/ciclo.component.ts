import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy

{

  @Input()valorInicial: number =10;
  constructor() {
    this.log('construtor');
   }
   ngOnInit(): void {
    this.log('ngOnInit');
  }
   ngOnChanges(){
     this.log('ngOnChange');
   }
   ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
    this.log('ngViewContentInit');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }
 
  // tslint:disable-next-line: typedef
  private log(hook: string){
    console.log(hook);
  }
}
