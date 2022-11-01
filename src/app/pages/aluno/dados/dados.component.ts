import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  constructor() { }
  nome:string = "";
  email:string = "";
  telefone:string = "";
  senha:string = "";

  ngOnInit(): void {
    document.body.style.setProperty('--dados', '#AD1A11');
  }

  atualizarDados(){
    
  }

}
