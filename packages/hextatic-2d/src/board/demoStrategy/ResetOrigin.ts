import { resetBoardOrigin, type Vec3 } from '@antoinefricker/hextatic-core';

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
        resetBoardOrigin(this.board.model, cubic);
        this.board.redrawCells();
    }
}
