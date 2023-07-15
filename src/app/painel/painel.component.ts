import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

 public frases: Frase[] = FRASES;
 public instrucao: string = 'Translate the sentence';
 public resposta: string = ''

 public rodada: number = 0;
 public rodadaFrase?: Frase;
 public progresso: number = 0;
 public tentativas: number = 3;

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  public verificarResposta(): void {
    console.log(this.tentativas)

    if(this.rodadaFrase?.frasePtbr == this.resposta ) {
      alert('Sim!! A tradução está CORRETA')
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length);
      console.log(this.progresso)

      this.atualizaRodada()


    } else {
      alert('ERROU!! A tradução está ERRADA!')
      this.tentativas--

      if(this.tentativas === -1){
        alert('Acabou as tentativas!')

      }
    }
    console.log(this.tentativas)

  }

  public atualizaRodada(): void {
    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]

    // limpar a resposta do usuario
    this.resposta = ''
  }

};
