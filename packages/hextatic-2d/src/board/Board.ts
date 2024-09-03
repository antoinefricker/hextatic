import { generateRectangularBoard } from '@antoinefricker/hextatic-core';
import { Container, Graphics } from 'pixi.js';

import { Tile } from './Tile';

export class Board extends Container {
    private map: Container;

    constructor() {
        super();

        const board = generateRectangularBoard(10, 10);

        this.map = new Container();
        this.addChild(this.map);

        const debug = new Graphics().fill(0x091316).rect(0, 0, 100, 100);
        this.addChild(debug);

        board.tiles.forEach((cubic) => {
            const tile = new Tile(cubic, 30);
            this.map.addChild(tile);
        });
    }
}
