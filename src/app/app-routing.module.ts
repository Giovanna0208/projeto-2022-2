import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AlunoComponent } from './pages/aluno/aluno/aluno.component';
import { PlanoComponent } from './pages/aluno/plano/plano.component';
import { TreinosComponent } from './pages/aluno/treinos/treinos.component';
import { DadosComponent } from './pages/aluno/dados/dados.component';
import { AvaliacaoComponent } from './pages/aluno/avaliacao/avaliacao.component';
import { ProfessorComponent } from './pages/professor/professor/professor.component';
import { CriarTreinoComponent } from './pages/professor/criar-treino/criar-treino.component';
import { DadosProfComponent } from './pages/professor/dados-prof/dados-prof.component';
import { CadastrarProfComponent } from './pages/professor/cadastrar-prof/cadastrar-prof.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: "Home", component: HomeComponent },
  { path: "Valores", component: ValoresComponent },
  { path: "Cadastro", component: CadastroComponent },
  { path: "Login", component: LoginComponent },

  // Aluno
  { path: "Aluno", component: AlunoComponent},
  { path: "Plano", component: PlanoComponent},
  { path: "Treinos", component: TreinosComponent},
  { path: "Dados", component: DadosComponent},
  { path: "Avaliacao", component: AvaliacaoComponent},

  //Professor
  { path: "Professor", component: ProfessorComponent},
  { path: "Criartreino", component: CriarTreinoComponent},
  { path: "Cadastrarprof", component: CadastrarProfComponent},
  { path: "Dadosprof", component: DadosProfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
