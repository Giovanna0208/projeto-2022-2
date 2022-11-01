import { Component, OnInit } from '@angular/core';
import { Exercicios, Treino } from '../../treino';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-criar-treino',
  templateUrl: './criar-treino.component.html',
  styleUrls: ['./criar-treino.component.css']
})
export class CriarTreinoComponent implements OnInit {

  constructor() { }

  idAluno: string = ""
  diasSemana: string[] = []
  superior: boolean = false

  exercicios: Exercicios[] = []

  nome: string = ""
  repeticoes: number = 0
  series: number = 0


  dias: string[] = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']

  ngOnInit(): void {
    document.body.style.setProperty('--criartreino', '#AD1A11');
  }

  cadastrar(){
    const exerc: Exercicios = {
      nome: this.nome,
      repeticoes: this.repeticoes,
      series: this.series
    }

    this.exercicios = this.exercicios.concat(exerc)

    this.nome = ""
    this.repeticoes = 0
    this.series = 0

    if(this.exercicios.length >= 6){
      document.getElementById('criarBtn1')!.style.display = 'none'
      document.getElementById('criarBtn2')!.style.display = 'none'
      document.getElementById('criarBtn3')!.style.display = 'none'
      document.getElementById('criarBtn4')!.style.display = 'none'
    }
  }

  criarTreino(){
    const treino: Treino = {
      idAluno: this.idAluno,
      superior: this.superior,
      dias: this.diasSemana.toString(),
      exercicios: this.exercicios
    }

    console.log(treino)
  }
}
