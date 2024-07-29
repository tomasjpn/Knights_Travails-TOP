
import chessboard from "./models/chessboard.js";
import positionCoordinates from "./models/positionCoordinates.js";

// Bewegung des Knights
const minKnightMoves = (start, end) =>{
    const startPos = new positionCoordinates (start[0], start[1]); // Start Koordinaten
    const endPos = new positionCoordinates (end[0], end[1]); // Ziel Koordinaten
    const board = new chessboard(); // Spielbrett
    const queue = [[startPos]]; // Queue für BST-Breitensuche, Initial mit Startposition
    const visited = new Set(); // Speichert die bereits besuchten Werte
    visited.add(startPos.toString()); // Startposition als besucht markieren

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
                return [...path, movePos].map(pos => pos.toString()); // Rücgabe des vollständigen Pfades
            } 

            if (!visited.has(movePos.toString())){ // Wenn der Pfad noch nicht besucht worden ist, wird er gespeichert in visited
                visited.add(movePos.toString());
                queue.push([...path, movePos]); // Wird in die Queue hinzugefügt -> Im Nachhinein ab dieser Position, nächste Moves überprüft
            }
        }
    }

    return null;
}

export default minKnightMoves;