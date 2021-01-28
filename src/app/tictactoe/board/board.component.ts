import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: string[];
  xEsSiguiente: boolean;
  ganador: string;
  empate: boolean;
  contador: number;

  constructor() {}

  ngOnInit() {//se llama al inicio siempre para inicializar
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.ganador = null;
    this.empate = null;
    this.contador = 0;
    this.xEsSiguiente = true;
  }

  get player() {
    return this.xEsSiguiente ? 'X' : 'O';//si es true x, si es falso, O
  }

  makeMove(idx: number) {
    if (!this.calcularGanador()) {//mientras no haya ganado nadie se puede jugar
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xEsSiguiente = !this.xEsSiguiente;
        this.contador++;
      }
      this.ganador = this.calcularGanador();//saber cuando hay un ganador
      this.empate = this.unEmpate();//para saber cuando hay un empate
    }
  }

  unEmpate() {
    if (!this.calcularGanador() && this.contador === 9) {
      return true;
    }
    return false;
  }

  calcularGanador() {
    const lines = [//tiene todas las combinaciones posibles para ganar
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {//recorre todas esas combinaciones y agrega los indices de los cuadros del board como constantes a b c 
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        /*finalmente, el if va a comparar la combinación actual de la iteración CON el los cuadros clickeados en el board
        si encuentra alguna combinación que calce, retorna esa combinación, sino retorna null. */
        return this.squares[a];
      }
    }
    return null;
  }
}
