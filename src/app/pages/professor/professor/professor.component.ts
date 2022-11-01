import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor() { }
  nome:string = ""
  email:string = ""
  telefone:string = ""

  ngOnInit(): void {
    document.body.style.setProperty('--professor', '#AD1A11');
  }

}
