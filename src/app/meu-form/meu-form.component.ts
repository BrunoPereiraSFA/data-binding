import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome = 'abc';

  pessoa: any = {
    nome:'',
    idade: '',
    end: {
      rua: '',
      bairro: ''
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
