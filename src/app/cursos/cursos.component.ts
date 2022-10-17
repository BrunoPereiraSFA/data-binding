import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;

  cursos: String[];


  constructor (private cursosService: CursosService) {

    this.nomePortal= 'http://google.com.br';

  this.cursos = this.cursosService.getCursos();
   }

}
