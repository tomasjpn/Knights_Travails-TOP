// Eingeben der Position
export default class positionCoordinates {
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