import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email : string = ""

  constructor(private router: Router) {
  }

  showPopup(){
    var popup = document.getElementById("popup");
    popup?.style.setProperty('display', 'flex')
  }

  closePopup(){
    var popup = document.getElementById("popup");
    popup?.style.setProperty('display', 'none')
  }

  ngOnInit(): void {
    document.body.style.setProperty('--home', '#AD1A11');
  }
}
