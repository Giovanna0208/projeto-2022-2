import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.component.html',
  styleUrls: ['./cadastrar-prof.component.css']
})
export class CadastrarProfComponent implements OnInit {

  constructor() { }
  nome:string = "";
  email:string = "";
  telefone:string = "";
  senha:string = "";

  ngOnInit(): void {
    document.body.style.setProperty('--cadastrarprof', '#AD1A11');
  }

  cadastrar(){
    
  }

}
