import { type Board } from '../board/Board';
import { type Tile } from '../board/Tile';
import { type IDemoStrategy } from './DemoStrategy';

export class DemoResetOrigin implements IDemoStrategy {
    private _board: Board;

    constructor(board: Board) {
        this._board = board;
    }

    public onmouseover(_tile: Tile): void {}

    public onmouseout(): void {}

    public onmousedown(tile: Tile): void {
        this._board.grid.resetCoordsOrigin(tile.coords);
        this._board.redraw();
    }
}
