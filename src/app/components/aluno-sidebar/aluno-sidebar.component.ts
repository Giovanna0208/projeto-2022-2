import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-aluno-sidebar',
  templateUrl: './aluno-sidebar.component.html',
  styleUrls: ['./aluno-sidebar.component.css']
})
export class AlunoSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  nome:string = ""

  ngOnInit(): void {
    this.nome = JSON.parse(sessionStorage.getItem('emailAluno')!);
  }

  navClick(event: any){
    var id = event.target.id;
    var path = "/" + id.charAt(0).toUpperCase() + id.slice(1);

    document.body.style.setProperty('--aluno', '#ffffff');
    document.body.style.setProperty('--plano', '#ffffff');
    document.body.style.setProperty('--treinos', '#ffffff');
    document.body.style.setProperty('--dados', '#ffffff');
    document.body.style.setProperty('--avaliacao', '#ffffff');

    document.body.style.setProperty('--' + id, '#A71610');

    this.router.navigate([path]);
  }

  sairBtn(){
    document.body.style.setProperty('--aluno', '#ffffff');
    document.body.style.setProperty('--plano', '#ffffff');
    document.body.style.setProperty('--treinos', '#ffffff');
    document.body.style.setProperty('--dados', '#ffffff');
    document.body.style.setProperty('--avaliacao', '#ffffff');

    this.router.navigate(['./Home']);
    sessionStorage.clear();
  }
}
