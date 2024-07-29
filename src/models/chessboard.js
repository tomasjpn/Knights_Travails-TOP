
import knightMoves from "../utils/knightMoves.js";
import positionCoordinates from "./positionCoordinates.js";

// Konstruiert das 8x8 Spielfeld
export default class chessboard {
    constructor(){
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
    }

    getPossibleMoves(position){
        const moves = []; // Speichert die neuen gültigen Positionen

        for (let i = 0; i < knightMoves.length; i++){
            // Speichert die möglichen Bewegungen aus knight-Moves
            const dx = knightMoves[i][0];
            const dy = knightMoves[i][1];
            const newPos = new positionCoordinates(position.x + dx, position.y + dy); // Berechnet die mögliche Bewegung des Knights
            if (newPos.isValid()){ // Stellt sicher, dass die neue Position nicht außerhalb des Spielfelds ist
                moves.push(newPos); // speichert in das moves Array
            }
        }

        return moves;
    }
}