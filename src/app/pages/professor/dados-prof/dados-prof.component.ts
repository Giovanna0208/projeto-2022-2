import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-prof',
  templateUrl: './dados-prof.component.html',
  styleUrls: ['./dados-prof.component.css']
})
export class DadosProfComponent implements OnInit {

  constructor() { }
  nome:string = "";
  email:string = "";
  telefone:string = "";
  senha:string = "";

  ngOnInit(): void {
    document.body.style.setProperty('--dadosprof', '#AD1A11');
  }

  atualizarDados(){
    
  }

}
