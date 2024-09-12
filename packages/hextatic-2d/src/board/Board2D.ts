import { generateRectangularBoard } from '@antoinefricker/hextatic-core';
import { type Board } from '@antoinefricker/hextatic-core';
import { getBoardSize } from '@antoinefricker/hextatic-core/src/geom/boardUtils';
import { Container, Graphics } from 'pixi.js';

import { Button } from './Button';
import { DemoStrategy } from './demoStrategy/DemoStrategy';
import { ShowAxisDemo } from './demoStrategy/ShowAxis';
import { ShowDistanceDemo } from './demoStrategy/ShowDistanceDemo';
import { Tile2D } from './Tile2D';

export class Board2D extends Container {
    private map: Container;
    private board: Board;
    private _cells: Tile2D[];

    private demo: DemoStrategy;

    constructor() {
        super();

        this.demo = new DemoStrategy();
        this.setDemoMode('distance');

        this.board = generateRectangularBoard(28, 11, 40);

        this.map = new Container();
        this.map.position.set(100, 100);
        this.addChild(this.map);

        const showAxisButton = new Button(160, 'Axis', () => this.setDemoMode('axis'));
        showAxisButton.position.set(10, 10);
        this.addChild(showAxisButton);

        const showDistanceButton = new Button(160, 'Distance', () => this.setDemoMode('distance'));
        showDistanceButton.position.set(10, 40);
        this.addChild(showDistanceButton);

        this.redrawCells();
    }

    public get cells(): Tile2D[] {
        return this._cells;
    }

    public redrawCells(): void {
        this.map.removeChildren();

        this._cells = [];
        this.board.tiles.forEach((cubic, index) => {
            const tile = new Tile2D(cubic, this.board.radius, index);
            tile.interactive = true;
            tile.on('mouseover', () => this.demo.onmouseover(cubic));
            tile.on('mouseout', () => this.demo.onmouseout());
            tile.on('mousedown', () => this.demo.onmousedown(cubic));
            this.map.addChild(tile);
            this._cells.push(tile);
        });

        const [boardWidth, boardHeight] = getBoardSize(this.board);
        const debug = new Graphics();
        debug.rect(0, 0, boardWidth, boardHeight);
        debug.stroke({ color: 0xff0000, width: 3 });
        debug.alpha = 0.25;
        this.map.addChild(debug);
    }

    private setDemoMode(mode: 'axis' | 'distance'): void {
        switch (mode) {
            case 'distance':
                return this.demo.setStrategy(new ShowDistanceDemo(this));
            default:
                return this.demo.setStrategy(new ShowAxisDemo(this));
        }
    }
}
