import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Resultado: string ="";
  num_a: string ="";
  num_b: string ="";
  
  constructor() {}
  Calcular(){
    this.Resultado = (parseInt(this.num_a)+parseInt(this.num_b)).toString();  
  }
}
