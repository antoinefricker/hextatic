import { type Vec3 } from '@antoinefricker/hextatic-core';

import { cubicSettings } from '../../constants';
import { type Board2D } from '../Board2D';
import { type IDemoStrategy } from './IDemoStrategy';

export class ShowAxisDemo implements IDemoStrategy {
    private board: Board2D;

    constructor(board: Board2D) {
        this.board = board;
    }

    public init(board: Board2D) {
        this.board = board;
    }
    public onmouseover(cubic: Vec3 | null): void {
        this.board.cells.map((cell) => {
            const [q, r, s] = cubic;
            const [cellQ, cellR, cellS] = cell.coords;
            if (cellQ === q && cellR === r && cellS === s) {
                cell.tint = null;
                return;
            } else if (cellQ === q) {
                cell.tint = cubicSettings.q.color;
                return;
            } else if (cellR === r) {
                cell.tint = cubicSettings.r.color;
                return;
            } else if (cellS === s) {
                cell.tint = cubicSettings.s.color;
                return;
            }
            cell.tint = null;
        });
        return;
    }

    public onmouseout(): void {
        this.board.cells.map((cell) => (cell.tint = null));
    }

    public onmousedown(_cubic: Vec3): void {}
}
