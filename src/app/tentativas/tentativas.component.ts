import { Component, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent {

  @Input() public tentativas: number = 0

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
  }

  ngOnInit() {
    console.log('Tentativas recebidas no painel:', this.tentativas)

  }

}
