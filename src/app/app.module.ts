import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './pages/aluno/aluno/aluno.component';
import { PlanoComponent } from './pages/aluno/plano/plano.component';
import { TreinosComponent } from './pages/aluno/treinos/treinos.component';
import { DadosComponent } from './pages/aluno/dados/dados.component';
import { AvaliacaoComponent } from './pages/aluno/avaliacao/avaliacao.component';
import { ProfessorComponent } from './pages/professor/professor/professor.component';
import { CriarTreinoComponent } from './pages/professor/criar-treino/criar-treino.component';
import { DadosProfComponent } from './pages/professor/dados-prof/dados-prof.component';
import { AlunoSidebarComponent } from './components/aluno-sidebar/aluno-sidebar.component';
import { ProfSidebarComponent } from './components/prof-sidebar/prof-sidebar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CadastrarProfComponent } from './pages/professor/cadastrar-prof/cadastrar-prof.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValoresComponent,
    LoginComponent,
    CadastroComponent,
    FooterComponent,
    NavbarComponent,
    AlunoComponent,
    PlanoComponent,
    TreinosComponent,
    DadosComponent,
    AvaliacaoComponent,
    ProfessorComponent,
    CriarTreinoComponent,
    DadosProfComponent,
    AlunoSidebarComponent,
    ProfSidebarComponent,
    CadastrarProfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
