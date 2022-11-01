import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  toHome(){
    document.body.style.setProperty('--valores', '#ffffff');
    document.body.style.setProperty('--login', '#ffffff');
    document.body.style.setProperty('--cadastro', '#ffffff');
    
    this.router.navigate(['/Home']);
  }

  navClick(event: any){
    var id = event.target.id;
    var path = "/" + id.charAt(0).toUpperCase() + id.slice(1);

    document.body.style.setProperty('--home', '#ffffff');
    document.body.style.setProperty('--valores', '#ffffff');
    document.body.style.setProperty('--login', '#ffffff');
    document.body.style.setProperty('--cadastro', '#ffffff');

    document.body.style.setProperty('--' + id, '#A71610');

    this.router.navigate([path]);
  }
}
