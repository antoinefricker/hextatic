import { Vec3 } from '@hextatic/hextatic';

import { type Board } from '../board/Board';
import { Tile } from '../board/Tile';
import { type IDemoStrategy } from './DemoStrategy';

export class DemoShowDistance implements IDemoStrategy {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
    }

    public onmouseover(_tile: Tile): void {}

    public onmouseout(): void {
        this._board.tiles.map((tile) => {
            tile.color = Tile.DefaultFillColor;
        });
    }

    public onmousedown(sourceTile: Tile): void {
        this._board.tiles.map((tile) => {
            const distance = Vec3.Distance(tile.coords, sourceTile.coords);
            tile.color = distance & 1 ? 0x742446 : 0xdb5d92;
        });
    }
}
