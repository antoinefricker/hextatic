import { generateRectangularBoard } from '@antoinefricker/hextatic-core';
import { type Board, type Vec3 } from '@antoinefricker/hextatic-core';
import { getBoardSize } from '@antoinefricker/hextatic-core/src/geom/boardUtils';
import { Container, Graphics } from 'pixi.js';

import { cubicSettings } from '../constants';
import { Tile2D } from './Tile2D';

export class Board2D extends Container {
    private map: Container;
    private board: Board;
    private cells: Tile2D[];

    constructor() {
        super();

        this.board = generateRectangularBoard(26, 9, 40);

        this.map = new Container();
        this.map.position.set(0, 0);
        this.addChild(this.map);

        const [boardWidth, boardHeight] = getBoardSize(this.board);
        const debug = new Graphics();
        debug.rect(0, 0, boardWidth, boardHeight);
        debug.stroke({ color: 0xff0000, width: 3 });
        debug.alpha = 0.25;
        this.addChild(debug);

        this.cells = [];
        this.board.tiles.forEach((cubic, index) => {
            const tile = new Tile2D(cubic, this.board.radius, index);
            tile.interactive = true;
            tile.on('mouseover', () => this.showAxis(cubic));
            tile.on('mouseout', () => this.showAxis(null));
            this.map.addChild(tile);
            this.cells.push(tile);
        });
    }

    private showAxis(cubic: Vec3 | null): void {
        if (!cubic) {
            this.cells.map((cell) => (cell.tint = null));
            return;
        }

        this.cells.map((cell) => {
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
    }
}
