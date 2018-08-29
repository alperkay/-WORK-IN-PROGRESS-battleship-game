"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function emptyBoard() {
    let board = new Array(12);
    let i;
    let j;
    for (i = 0; i < 12; i++) {
        board[i] = new Array(12);
        for (j = 0; j < 12; j++) {
            board[i][j] = '-';
        }
    }
    return board;
}
exports.emptyBoard = emptyBoard;
function computerBoard() {
    let board = new Array(12);
    let i;
    let j;
    for (i = 0; i < 12; i++) {
        board[i] = new Array(12);
        for (j = 0; j < 12; j++) {
            board[i][j] = '-';
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function randomDirection() {
        return Math.random() >= 0.5;
    }
    function isThereRoom(dir, xAxis, yAxis, len) {
        if (dir === true && xAxis < (12 - len + 1)) {
            const part = board[yAxis].slice(xAxis, xAxis + len).filter(dash => dash !== '-');
            return (part.length > 0 ? false : true);
        }
        if (dir === true && xAxis >= (12 - len + 1)) {
            return false;
        }
        if (dir === false && yAxis < (12 - len + 1)) {
            const part = [];
            let i;
            for (i = 0; i < len; i++) {
                part.push(board[yAxis + i][xAxis]);
            }
            const fil = part.filter(dash => dash !== '-');
            return (fil.length > 0 ? false : true);
        }
        if (dir === false && yAxis >= (12 - len + 1)) {
            return false;
        }
    }
    function ship(len, char) {
        const dir = randomDirection();
        const xAxis = getRandomInt(11);
        const yAxis = getRandomInt(11);
        console.log(isThereRoom(dir, xAxis, yAxis, len), char);
        if (isThereRoom(dir, xAxis, yAxis, len)) {
            if (dir === true) {
                let i;
                for (i = 0; i < len; i++) {
                    board[yAxis].splice(xAxis + i, 1, char);
                }
            }
            else {
                let k;
                for (k = yAxis; k < yAxis + len; k++) {
                    board[k][xAxis] = char;
                }
            }
        }
        else {
            ship(len, char);
        }
    }
    ship(5, 'A');
    ship(4, 'B');
    ship(3, 'C');
    ship(3, 'S');
    ship(2, 'M');
    return board;
}
exports.computerBoard = computerBoard;
//# sourceMappingURL=logic.js.map