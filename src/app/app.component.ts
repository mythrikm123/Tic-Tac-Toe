import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isGameStarted: boolean = false;
  currentPlayer: 'X' | 'O' = 'X'; 
  board: string[] = this.getEmptyBoard();
  winner: string | null = null;


  private getEmptyBoard(): string[] {
    return Array(9).fill('');
  }

  startOrRestartGame() {
    if (this.isGameStarted) {
      this.currentPlayer = 'X';  
      this.board = this.getEmptyBoard(); 
    } else {
      this.currentPlayer = 'X';
    }
    this.winner = null;  
    this.isGameStarted = !this.isGameStarted;
  }

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  
      [0, 4, 8], [2, 4, 6]              
    ];
  
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.currentPlayer;
        alert(`${this.winner} wins!`);
        this.startOrRestartGame()
      }
    }
  
    if (!this.winner && this.board.every(cell => cell)) {
      this.winner = 'draw';
      alert("It's a Draw!");
      this.startOrRestartGame()
    } 
  }

  clearGame() {
    this.board = Array(9).fill(''); 
    this.currentPlayer = 'X'; 
    this.winner = null;  
    this.isGameStarted = false;  
  }
  
}
