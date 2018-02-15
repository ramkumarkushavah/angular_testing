import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-zoom-button',
  templateUrl: './zoom-button.component.html',
  styleUrls: ['./zoom-button.component.style.scss']
})
export class ZoomButtonComponent implements OnInit, AfterViewInit {

  a = 10;
  b = 20;
  c;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){


  }

  helloWorld() {
    console.log("Hello World!");
    return 'Hello world!';
  }

  decrement() {

    this.c = this.a + this.b;

    console.log("Minus Button Clicked", this.c);

    return this.c;

  }

  increment() {

    console.log("Plus Button Clicked",this.a);

    return this.a;

    
  }

 

}
