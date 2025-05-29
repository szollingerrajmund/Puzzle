"use strict";
class Tile {
    constructor(pos, num) {
        this.position = { tile: 0, row: 0 };
        this.position.row = Math.floor(pos / 10);
        this.position.tile = pos % 10;
        this.number = num;
        this.isMovable = false;
    }
}
function main() {
    const tábla = genTiles();
    console.log(tábla);
    refreshPage(tábla);
}
function getRandomInt() {
    return Math.floor(Math.random() * 100);
}
function genTiles() {
    const tábla = new Array();
    let usedNums = new Array();
    for (let i = 0; i < 100; i++) {
        let num = getRandomInt();
        if (usedNums.includes(num)) {
            i--;
            continue;
        }
        usedNums.push(num);
        tábla.push(new Tile(i, num));
    }
    return tábla;
}
function refreshPage(tábla) {
    for (let tile of tábla) {
        document.getElementsByClassName(`row-${tile.position.row} tile-${tile.position.tile}`)[0].innerHTML = `${tile.number}`;
    }
}
main();
