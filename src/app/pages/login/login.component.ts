import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailAluno : string = "";
  senhaAluno : string = "";
  emailProfessor : string = "";
  senhaProfessor : string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
    document.body.style.setProperty('--login', '#AD1A11');
  }

  Cadastro(){
    document.body.style.setProperty('--login', '#ffffff');
    this.router.navigate(['/Cadastro']);
  }

  loginAluno(){
    sessionStorage.setItem('emailAluno', JSON.stringify(this.emailAluno));
    document.body.style.setProperty('--login', '#ffffff');
    this.router.navigate(['/Aluno']);
  }

  loginProfessor(){
    sessionStorage.setItem('emailProf', JSON.stringify(this.emailProfessor));
    document.body.style.setProperty('--login', '#ffffff');
    this.router.navigate(['/Professor']);
  }

}
