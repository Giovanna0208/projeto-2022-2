import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.setProperty('--plano', '#AD1A11');
  }

}
