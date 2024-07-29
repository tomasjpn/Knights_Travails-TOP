// Konstruiert das 8x8 Spielfeld
class chessBoard {
    constructor(){
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
    }

    getPossibleMoves(position){
        const moves = []; // Speichert die neuen gültigen Positionen

        for (let i = 0; i < knightMoves.length; i++){
            // Speichert die möglichen Bewegungen aus knight-Moves
            const dx = knightMoves[i][0];
            const dy = knightMoves[i][1];
            const newPos = new Position(position.x + dx, position.y + dy); // Berechnet die mögliche Bewegung des Knights
            if (newPos.isValid()){ // Stellt sicher, dass die neue Position nicht außerhalb des Spielfelds ist
                moves.push(newPos); // speichert in das moves Array
            }
        }

        return moves;
    }
}

// Eingeben der Position
class Position {
    constructor(x, y){ // Die Bewegung im Spielfeld in x und y Koordinaten
        this.x = x;
        this.y = y;
    }

    // Überprüft, dass die Koordinaten innerhalb des Spielfeldes ist
    isValid(){
        if (this.x >= 0 && this.y >= 0 && this.x <= 7 && this.y <= 7){
            return true;
        }
        return false;
    }

    // Vergleicht zwei Positionen (Überprüft auf Doppelungen)
    equals(other){
        if (this.x === other.x && this.y === other.y){
            return true;
        }
        return false;
    }

    // Konvertiert die Darstellung in einem String
    toString(){
        return `[${this.x}, ${this.y}]`;
    }
}

// Def: Bewegungen des Knights
const knightMoves = [
   [2, 1], [2, -1], [-2, 1], [-2, -1],
   [1, 2], [1, -2], [-1, 2], [-1, -2]
];

// Bewegung des Knights
const minKnightMoves = (start, end) =>{
    const startPos = new Position (start[0], start[1]); // Start Koordinaten
    const endPos = new Position (end[0], end[1]); // Ziel Koordinaten
    const board = new chessBoard(); // Spielbrett
    const queue = [[startPos]]; // Queue für BST-Breitensuche
    const visited = new Set(); // Speichert die bereits besuchten Werte
    visited.add(startPos.toString()); // Anfangswert = besucht

    // Wenn die Startposition = Zielposition -> return
    if(startPos.equals(endPos)){
        return [startPos.toString()];
    }

    // BFS Algorithmus 
    while (queue.length > 0){
        const path = queue.shift(); // Entfernt erstes Element aus der Queue
        const currentPos = path[path.length -1]; // Auf das letzte Element zugreifen -> aktuelle Position, von der die nächstmöglichen Züge berechnet werden
        const possibleMovesArr = board.getPossibleMoves(currentPos); // Array von möglichen Zügen, die aus der currentPos möglich sind

        for (let i = 0; i < possibleMovesArr.length; i++){
            const movePos = possibleMovesArr[i];
            if (movePos.equals(endPos)){ // Wenn der Move (Spielzug) === Zielposition
                return [...path, movePos].map(pos => pos.toString());
            } 

            if (!visited.has(movePos.toString())){ // Wenn der Pfad noch nicht besucht worden ist, wird er gespeichert in visited
                visited.add(movePos.toString());
                queue.push([...path, movePos]); // Wird in die Queue hinzugefügt
            }
        }
    }

    return null;
}

console.log(minKnightMoves([0,0], [2,6]));

