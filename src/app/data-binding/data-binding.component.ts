import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = "https://google.com.br";
  urlImagem = 'https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png';
  valorAtual: string='';
  valorSalvo='';
  isMouseOver: boolean=false;
  nomeDoCurso: string = 'Angular';
  valorInicial = 15;
  clique: boolean = false;

  public livros = [
    'Como morrem os pobres e outros ensaios',
    'A revolução dos bichos',
    '1988'
 ];

  getResultado(){
    return 2;
  }

  botaoClicado(){
    alert('Botao Clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value

  }

  salvarValor(valor: string){
    this.valorSalvo = valor;

  }

  OnMouseOverOut(){
    this.isMouseOver= !this.isMouseOver; 

  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);

  }

  onAparecer(){
    this.clique = !this.clique;
  }

  constructor() {
    
  }

}
