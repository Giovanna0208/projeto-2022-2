import { Component, OnInit } from '@angular/core';
import { Treino } from '../../treino';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {

  constructor() { }

  treinosSuperior: Treino[] = []
  treinosInferior: Treino[] = []

  ngOnInit(): void {
    document.body.style.setProperty('--treinos', '#AD1A11');
  }

}