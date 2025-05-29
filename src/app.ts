class Tile {
    position: {tile: number, row: number} = {tile: 0, row: 0};
    number: number;
    isMovable: boolean;

    constructor(pos: number, num: number) {
        this.position.row = Math.floor(pos/10);
        this.position.tile = pos%10;
        this.number = num
        this.isMovable = false
    }
}

function main() {
    const tábla = genTiles()
    console.log(tábla)
    refreshPage(tábla)
}

function getRandomInt(): number {
    return Math.floor(Math.random() * 100)
}

function genTiles() {
    const tábla = new Array<Tile>()
    let usedNums: number[] = new Array<number>();
    
    for(let i = 0; i < 100; i++ ) {
        let num = getRandomInt()

        if (usedNums.includes(num)) {
            i--;
            continue;
        }
        usedNums.push(num);

        tábla.push(new Tile(i, num))
    }
    return tábla
}

function refreshPage(tábla: Tile[]) {
    for (let tile of tábla){
        document.getElementsByClassName(`row-${tile.position.row} tile-${tile.position.tile}`)[0].innerHTML = `${tile.number}`;
    }
    
}

main();