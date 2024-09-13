import {
    coords,
    generateHexBoard,
    generateRectangularBoard,
    type Vec2,
    vec2,
    type Vec3,
    vec3,
} from '@antoinefricker/hextatic-core';
import { type Board } from '@antoinefricker/hextatic-core';
import { getBoardSize } from '@antoinefricker/hextatic-core/src/geom/boardUtils';
import { getHexSize, getHexSpacing } from '@antoinefricker/hextatic-core/src/geom/hexUtils';
import { Container, Graphics } from 'pixi.js';

import { Button } from './Button';
import { CubicCoordsHelper } from './CubicCoordsHelper';
import { DemoStrategy } from './demoStrategy/DemoStrategy';
import { ResetOrigin } from './demoStrategy/ResetOrigin';
import { ShowAxisDemo } from './demoStrategy/ShowAxis';
import { ShowDistanceDemo } from './demoStrategy/ShowDistanceDemo';
import { Tile2D } from './Tile2D';

export class Board2D extends Container {
    private map: Container;

    private _model: Board;
    private _cells: Tile2D[];
    private _origin: Vec3 = [0, 0, 0];

    private demo: DemoStrategy;

    constructor() {
        super();

        this.demo = new DemoStrategy();
        this.setDemoMode('resetOrigin');

        this._model = generateHexBoard(6, 40);

        this.map = new Container();
        this.map.position.set(100, 100);
        this.addChild(this.map);

        const helper = new CubicCoordsHelper();
        helper.position.set(700, 50);
        this.addChild(helper);

        const showAxisButton = new Button(160, 'Axis', () => this.setDemoMode('axis'));
        showAxisButton.position.set(10, 10);
        this.addChild(showAxisButton);

        const showDistanceButton = new Button(160, 'Distance', () => this.setDemoMode('distance'));
        showDistanceButton.position.set(10, 40);
        this.addChild(showDistanceButton);

        const resetOriginButton = new Button(160, 'Reset origin', () => this.setDemoMode('resetOrigin'));
        resetOriginButton.position.set(10, 70);
        this.addChild(resetOriginButton);

        const rectBoardButton = new Button(160, 'Rectangular', () => {
            this._model = generateRectangularBoard(11, 11, 40);
            this.redrawCells();
        });
        rectBoardButton.position.set(10, 100);
        this.addChild(rectBoardButton);

        const hexBoardButton = new Button(160, 'Hexagonal', () => {
            this._model = generateHexBoard(6, 40);
            this.redrawCells();
        });
        hexBoardButton.position.set(10, 130);
        this.addChild(hexBoardButton);

        this.redrawCells();
    }

    private _getTilePosition(cubicCoords: Vec3): Vec2 {
        const hexSize = getHexSize(this._model.radius);
        const hexSpacing = getHexSpacing(this._model.radius);

        const d2Coords = coords.cubicToGrid(vec3.add(cubicCoords, this.model.origin));
        const position = vec2.multiply(d2Coords, [hexSpacing[0], 0.5 * hexSpacing[1]]);
        const offset = vec2.scale(hexSize, 0.5);
        return vec2.add(position, offset);
    }

    public get model(): Board {
        return this._model;
    }

    public get cells(): Tile2D[] {
        return this._cells;
    }

    public redrawCells(): void {
        this.map.removeChildren();

        this._cells = [];
        this._model.tiles.forEach((cubic) => {
            const [x, y] = this._getTilePosition(cubic);
            const tile = new Tile2D(cubic, this._model.radius);
            tile.position.set(x, y);
            tile.interactive = true;
            tile.on('mouseover', () => this.demo.onmouseover(cubic));
            tile.on('mouseout', () => this.demo.onmouseout());
            tile.on('mousedown', () => this.demo.onmousedown(cubic));
            this.map.addChild(tile);
            this._cells.push(tile);
        });

        const [boardWidth, boardHeight] = getBoardSize(this._model);
        const debug = new Graphics();
        debug.rect(0, 0, boardWidth, boardHeight);
        debug.stroke({ color: 0xff0000, width: 3 });
        debug.alpha = 0.25;
        this.map.addChild(debug);
    }

    private setDemoMode(mode: 'axis' | 'distance' | 'resetOrigin'): void {
        switch (mode) {
            case 'distance':
                return this.demo.setStrategy(new ShowDistanceDemo(this));
            case 'resetOrigin':
                return this.demo.setStrategy(new ResetOrigin(this));
            default:
                return this.demo.setStrategy(new ShowAxisDemo(this));
        }
    }
}
