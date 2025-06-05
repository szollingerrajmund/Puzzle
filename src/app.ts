import { Tile } from "./tile.js";

function main() {
    const tábla = genTiles()
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
        tile.element = document.getElementsByClassName(`row-${tile.position.row} tile-${tile.position.tile}`)[0] as HTMLElement;
        tile.element!.onclick = () => {
            tile.moveTile(tábla);
            refreshPage(tábla);
        };
        tile.element.innerHTML = `${tile.number}`;
        if (tile.number == 0) {
            tile.element.innerHTML = ``;
            tile.element.classList.add("empty")
        }
    }
    
}

main();