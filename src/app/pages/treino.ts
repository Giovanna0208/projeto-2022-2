export interface Exercicios {
  nome: string;
  series: number;
  repeticoes: number;
}

export interface Treino {
  idAluno: string;
  superior: boolean ;
  dias: string ;
  exercicios: Exercicios[] ;
}