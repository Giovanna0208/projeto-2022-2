import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.setProperty('--valores', '#AD1A11');
  }

}
