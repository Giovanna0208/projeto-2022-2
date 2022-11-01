import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome : string = "";
  email : string = "";
  telefone : string = "";
  senha : string = "";

  constructor() { }

  ngOnInit(): void {
    document.body.style.setProperty('--cadastro', '#AD1A11');
  }

  Login(){
  }
}
