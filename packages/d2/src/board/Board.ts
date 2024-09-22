import { HexFlat, type HexGrid, HexGridGenerator, Vec2, type Vec3 } from '@hextatic/hextatic';
import { Container, Graphics } from 'pixi.js';

import { CubicCoordsAxis } from '../debug/CubicCoordsAxis';
import { DemoSelector } from '../demo/DemoSelector';
import { Tile } from './Tile';

export class Board extends Container {
    private _map: Container;
    private _mapArea: Graphics;
    private _axis: CubicCoordsAxis;
    private _demo: DemoSelector;

    private _radius: number = 52;
    private _grid: HexGrid;
    private _tiles: Tile[];

    constructor() {
        super();

        this._grid = HexGridGenerator.GenerateHexBoard(6);

        this._build();
        this._redraw();
    }

    private _build(): void {
        this._map = new Container();
        this._map.position.set(50, 50);
        this.addChild(this._map);

        this._axis = new CubicCoordsAxis();
        this._axis.position.set(150, 100);
        this.addChild(this._axis);

        this._mapArea = new Graphics();
        this.addChild(this._mapArea);

        this._demo = new DemoSelector();
        this.addChild(this._demo);
    }

    private _redraw(): void {
        this._map.removeChildren();

        this._tiles = [];
        this._grid.coords.forEach((coords) => {
            const { x, y } = this._getTilePosition(coords);

            const tile = new Tile(coords, this._radius);
            tile.position.set(x, y);
            tile.interactive = true;
            this._map.addChild(tile);
            this._tiles.push(tile);
        });
    }

    private _getTilePosition(cubicCoords: Vec3): Vec2 {
        const hexSize = HexFlat.GetSize(this._radius);
        const hexSpacing = HexFlat.GetSpacing(this._radius);
        hexSpacing.y *= 0.5;

        const d2Coords = this._cubicToGrid(cubicCoords.add(this._grid.origin));
        const position = d2Coords.multiply(hexSpacing);
        const offset = hexSize.scale(0.5);
        return position.add(offset);
    }

    private _cubicToGrid = ({ x, y, z }: Vec3): Vec2 => new Vec2(x, -y + z);
}
