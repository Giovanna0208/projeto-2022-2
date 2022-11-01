import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }
  nome:string = "";
  id:string = "";
  email:string = "";
  telefone:string = "";
  plano:string = "";

  ngOnInit(): void {
    // this.nome = JSON.parse(sessionStorage.getItem('emailAluno')!);
    document.body.style.setProperty('--aluno', '#AD1A11');
  }

}
