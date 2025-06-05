export class Tile {
    constructor(pos, num) {
        this.position = { tile: 0, row: 0 };
        this.position.row = Math.floor(pos / 10);
        this.position.tile = pos % 10;
        this.number = num;
    }
    checkNeighbours(tábla) {
        const emptyTile = tábla.find(tile => tile.number == 0);
        let distance = Math.sqrt(Math.pow(emptyTile.position.tile - this.position.tile, 2) + Math.pow(emptyTile.position.row - this.position.row, 2));
        if (distance == 1)
            return emptyTile;
        return undefined;
    }
    moveTile(tábla) {
        const emptyTile = this.checkNeighbours(tábla);
        if (!emptyTile)
            return;
        emptyTile.element.classList.remove("empty");
        [this.number, emptyTile.number] = [emptyTile.number, this.number];
    }
}
