import { Tile } from "./tile.js";
// Kapusi Gergő Levente és Szollinger Rajmund



function main() {
    const tábla = genTiles()
    fillPage()
    refreshPage(tábla)
}

function fillPage() {
    document.body.innerHTML = `<div class="content">
        <div class="row-0">
            <div class="tile tile-0 row-0"></div>
            <div class="tile tile-1 row-0"></div>
            <div class="tile tile-2 row-0"></div>
            <div class="tile-3 tile row-0"></div>
            <div class="tile-4 tile row-0"></div>
            <div class="tile-5 tile row-0"></div>
            <div class="tile-6 tile row-0"></div>
            <div class="tile-7 tile row-0"></div>
            <div class="tile-8 tile row-0"></div>
            <div class="tile-9 tile row-0"></div>
        </div>
        <div class="row-1">
            <div class="tile-0 tile row-1"></div>
            <div class="tile-1 tile row-1"></div>
            <div class="tile-2 tile row-1"></div>
            <div class="tile-3 tile row-1"></div>
            <div class="tile-4 tile row-1"></div>
            <div class="tile-5 tile row-1"></div>
            <div class="tile-6 tile row-1"></div>
            <div class="tile-7 tile row-1"></div>
            <div class="tile-8 tile row-1"></div>
            <div class="tile-9 tile row-1"></div>
        </div>
        <div class="row-2">
            <div class="tile-0 tile row-2"></div>
            <div class="tile-1 tile row-2"></div>
            <div class="tile-2 tile row-2"></div>
            <div class="tile-3 tile row-2"></div>
            <div class="tile-4 tile row-2"></div>
            <div class="tile-5 tile row-2"></div>
            <div class="tile-6 tile row-2"></div>
            <div class="tile-7 tile row-2"></div>
            <div class="tile-8 tile row-2"></div>
            <div class="tile-9 tile row-2"></div>
        </div>
        <div class="row-3">
            <div class="tile-0 tile row-3"></div>
            <div class="tile-1 tile row-3"></div>
            <div class="tile-2 tile row-3"></div>
            <div class="tile-3 tile row-3"></div>
            <div class="tile-4 tile row-3"></div>
            <div class="tile-5 tile row-3"></div>
            <div class="tile-6 tile row-3"></div>
            <div class="tile-7 tile row-3"></div>
            <div class="tile-8 tile row-3"></div>
            <div class="tile-9 tile row-3"></div>
        </div>
        <div class="row-4">
            <div class="tile-0 tile row-4"></div>
            <div class="tile-1 tile row-4"></div>
            <div class="tile-2 tile row-4"></div>
            <div class="tile-3 tile row-4"></div>
            <div class="tile-4 tile row-4"></div>
            <div class="tile-5 tile row-4"></div>
            <div class="tile-6 tile row-4"></div>
            <div class="tile-7 tile row-4"></div>
            <div class="tile-8 tile row-4"></div>
            <div class="tile-9 tile row-4"></div>
        </div>
        <div class="row-5">
            <div class="tile-0 tile row-5"></div>
            <div class="tile-1 tile row-5"></div>
            <div class="tile-2 tile row-5"></div>
            <div class="tile-3 tile row-5"></div>
            <div class="tile-4 tile row-5"></div>
            <div class="tile-5 tile row-5"></div>
            <div class="tile-6 tile row-5"></div>
            <div class="tile-7 tile row-5"></div>
            <div class="tile-8 tile row-5"></div>
            <div class="tile-9 tile row-5"></div>
        </div>
        <div class="row-6">
            <div class="tile-0 tile row-6"></div>
            <div class="tile-1 tile row-6"></div>
            <div class="tile-2 tile row-6"></div>
            <div class="tile-3 tile row-6"></div>
            <div class="tile-4 tile row-6"></div>
            <div class="tile-5 tile row-6"></div>
            <div class="tile-6 tile row-6"></div>
            <div class="tile-7 tile row-6"></div>
            <div class="tile-8 tile row-6"></div>
            <div class="tile-9 tile row-6"></div>
        </div>
        <div class="row-7">
            <div class="tile-0 tile row-7"></div>
            <div class="tile-1 tile row-7"></div>
            <div class="tile-2 tile row-7"></div>
            <div class="tile-3 tile row-7"></div>
            <div class="tile-4 tile row-7"></div>
            <div class="tile-5 tile row-7"></div>
            <div class="tile-6 tile row-7"></div>
            <div class="tile-7 tile row-7"></div>
            <div class="tile-8 tile row-7"></div>
            <div class="tile-9 tile row-7"></div>
        </div>
        <div class="row-8">
            <div class="tile-0 tile row-8"></div>
            <div class="tile-1 tile row-8"></div>
            <div class="tile-2 tile row-8"></div>
            <div class="tile-3 tile row-8"></div>
            <div class="tile-4 tile row-8"></div>
            <div class="tile-5 tile row-8"></div>
            <div class="tile-6 tile row-8"></div>
            <div class="tile-7 tile row-8"></div>
            <div class="tile-8 tile row-8"></div>
            <div class="tile-9 tile row-8"></div>
        </div>
        <div class="row-9">
            <div class="tile-0 tile row-9"></div>
            <div class="tile-1 tile row-9"></div>
            <div class="tile-2 tile row-9"></div>
            <div class="tile-3 tile row-9"></div>
            <div class="tile-4 tile row-9"></div>
            <div class="tile-5 tile row-9"></div>
            <div class="tile-6 tile row-9"></div>
            <div class="tile-7 tile row-9"></div>
            <div class="tile-8 tile row-9"></div>
            <div class="tile-9 tile row-9"></div>
        </div>
    </div>`
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