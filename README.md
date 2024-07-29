# Knights_Travails-TOP

Solution for TheOdinProject: Knights Travails: **https://www.theodinproject.com/lessons/javascript-knights-travails**


Die Aufgabe besteht darin, eine Implementierung zu entwickeln, die den kürzesten Weg eines Springers (aus dem Schach) von einem Feld zu einem anderen findet.

Dieses Problem lässt sich mit der Graphentheorie lösen, indem man die Breitensuche (BFS) verwendet. Der Tiefensuche (DFS) wäre hier weniger geeignet, da sie zuerst alle Knoten eines Zweigs bis zum Ende durchläuft, bevor sie zum anderen Zweig wechselt. Dieser Ansatz ist nicht optimal, um den kürzesten Weg in einem ungewichteten Graphen wie dem Schachbrett zu finden.

**`Breitensuche (BFS)`**: BFS ist besonders gut geeignet, um den kürzesten Pfad in einem ungewichteten Graphen zu finden. Auf einem Schachbrett ist jeder Zug des Springers gleichwertig (d.h., keine Gewichtungen oder Kosten). BFS durchsucht alle möglichen Züge Ebene für Ebene, was bedeutet, dass es zuerst alle Positionen erreicht, die in einer bestimmten Anzahl von Zügen erreicht werden können, bevor es zu Positionen übergeht, die in mehr Zügen erreichbar sind. Daher findet BFS garantiert den kürzesten Pfad vom Startfeld zum Ziel.

**`Tiefensuche (DFS)`**: DFS hingegen kann nicht garantieren, dass der erste gefundene Pfad der kürzeste ist. DFS verfolgt einen Pfad bis zum Ende (bzw. bis es nicht weitergeht) und kehrt dann zurück, um andere Pfade zu erkunden. Dies kann dazu führen, dass DFS lange Wege oder Umwege entdeckt, bevor es den kürzesten Weg findet, insbesondere in einem ungewichteten Graphen wie dem Schachbrett.


---

## class chessboard

### Methoden:

---

#### **`constructor()`**

**constructor(): void**

Initialisiert ein neues Schachbrett. Das Schachbrett besteht aus einem 8x8 Array, das mit `null` gefüllt ist.

---

#### **`getPossibleMoves(position)`**

**getPossibleMoves(position: positionCoordinates): Array<positionCoordinates>**

Berechnet alle möglichen Züge für einen Springer von der angegebenen Position aus. Der Springer kann sich in 8 verschiedene Richtungen bewegen, die durch die `knightMoves` definiert sind. Die Methode prüft, ob die berechneten Positionen innerhalb der Grenzen des Schachbretts liegen und gibt eine Liste der gültigen Züge zurück.

- **Parameter:**
  - `position`: Die aktuelle Position des Springers, als Instanz der Klasse `positionCoordinates`.

- **Rückgabe:**
  - Ein Array von `positionCoordinates` Objekten, die alle gültigen Züge des Springers darstellen.

---

## class positionCoordinates

### Methoden:

---

#### **`constructor(x, y)`**

**constructor(x: number, y: number): void**

Initialisiert ein neues Positionskoordinaten-Objekt mit den angegebenen x- und y-Koordinaten.

- **Parameter:**
  - `x`: Die x-Koordinate der Position.
  - `y`: Die y-Koordinate der Position.

---

#### **`isValid()`**

**isValid(): boolean**

Überprüft, ob die aktuellen Koordinaten innerhalb der Grenzen eines 8x8 Schachbretts liegen (0 bis 7 für beide Koordinaten). 

- **Rückgabe:**
  - `true`, wenn die Koordinaten gültig sind, andernfalls `false`.

---

#### **`equals(other)`**

**equals(other: positionCoordinates): boolean**

Vergleicht die aktuelle Position mit einer anderen Position. Zwei Positionen sind gleich, wenn sowohl die x- als auch die y-Koordinaten übereinstimmen.

- **Parameter:**
  - `other`: Eine andere Instanz von `positionCoordinates`, mit der die aktuelle Position verglichen werden soll.

- **Rückgabe:**
  - `true`, wenn die Positionen gleich sind, andernfalls `false`.

---

#### **`toString()`**

**toString(): string**

Gibt eine String-Darstellung der Position zurück. Die Darstellung ist im Format `[x, y]`.

- **Rückgabe:**
  - Eine String-Darstellung der Position, z.B. `[3, 5]`.

---

## knightMoves

### Konstanten:

---

#### **`knightMoves`**

**knightMoves: Array<Array<number>>**

Ein Array von Arrays, das die möglichen Bewegungen eines Springers auf einem Schachbrett definiert. Jede Bewegung ist als Array von zwei Zahlen dargestellt, die die Änderung der x- und y-Koordinaten beschreiben.

- **Typ:**
  - `Array<Array<number>>`

---

## class minKnightMoves

### Methoden:

---

#### **`minKnightMoves(start, end)`**

**minKnightMoves(start: Array<number>, end: Array<number>): Array<string> | null**

Findet den kürzesten Pfad für einen Springer von einer Startposition zu einer Zielposition auf einem Schachbrett. Die Suche erfolgt mittels Breitensuche (BFS). Die Methode gibt einen Array von String-Darstellungen der Positionen im Pfad zurück oder `null`, wenn kein Pfad gefunden wird.

- **Parameter:**
  - `start`: Ein Array mit den Startkoordinaten `[x, y]`.
  - `end`: Ein Array mit den Zielkoordinaten `[x, y]`.

- **Rückgabe:**
  - Ein Array von Strings, das den Pfad von der Start- zur Zielposition beschreibt, oder `null`, wenn kein Pfad gefunden wurde.

---

## Funktion formatResult

### Funktionen:

---

#### **`formatResult(path)`**

**formatResult(path: Array<string> | null): void**

Formatiert und gibt das Ergebnis des Pfads aus. Wenn ein Pfad vorhanden ist, wird die Länge des Pfades und der Pfad selbst angezeigt. Andernfalls wird eine Nachricht ausgegeben, dass der Pfad nicht gefunden wurde.

- **Parameter:**
  - `path`: Ein Array von Strings, das den Pfad beschreibt, oder `null`, wenn kein Pfad gefunden wurde.

---

