import minKnightMoves from "./main.js";

const formatResult = (path) =>{
    if (path){
        console.log(`You made it in ${path.length -1}! Here's your path:`);
        path.forEach(pos => console.log(pos));
    } else {
        console.log("Path not found. ");
    }
}

const path = minKnightMoves([0, 0], [1, 2]);
formatResult(path);