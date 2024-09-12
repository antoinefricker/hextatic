import { type Vec3, vec3 } from '@antoinefricker/hextatic-core';

import { type Board2D } from '../Board2D';
import { type IDemoStrategy } from './IDemoStrategy';

export class ResetOrigin implements IDemoStrategy {
    private board: Board2D;

    constructor(board: Board2D) {
        this.board = board;
    }
    public onmouseover(_cubic: Vec3): void {}
    public onmouseout(): void {}
    public onmousedown(cubic: Vec3): void {
        const updatedOrigin = vec3.add(this.board.origin, cubic);
        this.board.origin = updatedOrigin;
        this.board.model.tiles = this.board.model.tiles.map((tile) => vec3.minus(tile, cubic));
        this.board.redrawCells();
    }
}
