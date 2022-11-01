import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  constructor() { }

  data:string = "";
  avaliacao:string = "";

  ngOnInit(): void {
    document.body.style.setProperty('--avaliacao', '#AD1A11');
  }

  desmarcar(){
    this.avaliacao = "";
  }

  marcar(){
    let newdate = moment.utc(this.data).local();
    this.data = newdate.format("DD/MM/YYYY");

    this.avaliacao = this.data;
  }

}
