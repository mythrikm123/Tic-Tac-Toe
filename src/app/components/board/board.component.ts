import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() board: string[] = Array(9).fill('');
  @Input() currentPlayer: 'X' | 'O' | null = null;
  @Output() cellClick = new EventEmitter<number>();

  makeMove(index: number) {
    this.cellClick.emit(index);
  }
}
