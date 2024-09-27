import { Vec3 } from '@hextatic/hextatic';

import { type Board } from '../board/Board';
import { type Tile } from '../board/Tile';
import { type IDemoStrategy } from './DemoStrategy';

export class DemoShowNeighbours implements IDemoStrategy {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
    }

    public onmouseover(_tile: Tile): void {}

    public onmouseout(): void {}

    public onmousedown(tile: Tile): void {
        const _neighbours = Vec3.GetNeighbours(tile.coords);
        // eslint-disable-next-line no-console
        console.log({ _neighbours });
    }
}
