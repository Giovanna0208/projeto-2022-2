import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-prof-sidebar',
  templateUrl: './prof-sidebar.component.html',
  styleUrls: ['./prof-sidebar.component.css']
})
export class ProfSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  nome:string = ""

  ngOnInit(): void {
    this.nome = JSON.parse(sessionStorage.getItem('emailProf')!);
  }

  navClick(event: any){
    var id = event.target.id;
    var path = "/" + id.charAt(0).toUpperCase() + id.slice(1);

    document.body.style.setProperty('--professor', '#ffffff');
    document.body.style.setProperty('--criartreino', '#ffffff');
    document.body.style.setProperty('--cadastrarprof', '#ffffff');
    document.body.style.setProperty('--dadosprof', '#ffffff');

    document.body.style.setProperty('--' + id, '#A71610');

    this.router.navigate([path]);
  }

  sairBtn(){
    document.body.style.setProperty('--professor', '#ffffff');
    document.body.style.setProperty('--criartreino', '#ffffff');
    document.body.style.setProperty('--cadastrarprof', '#ffffff');
    document.body.style.setProperty('--dadosprof', '#ffffff');

    this.router.navigate(['./Home']);
    sessionStorage.clear();
  }

}
