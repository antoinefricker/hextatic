import { Vec3 } from '@hextatic/hextatic';

import { type Board } from '../board/Board';
import { Tile } from '../board/Tile';
import { type IDemoStrategy } from './DemoStrategy';

export class DemoShowNeighbours implements IDemoStrategy {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
    }

    public onmouseover(_tile: Tile): void {}

    public onmouseout(): void {}

    public onmousedown(sourceTile: Tile): void {
        const neighbours = Vec3.GetNeighbours(sourceTile.coords).map(
            (coord) => this._board.grid.coordsDict[coord.toString()],
        );
        this._board.tiles.map((tile, index) => {
            tile.color = neighbours.includes(index) ? 0xc05682 : Tile.DefaultFillColor;
        });
    }
}
