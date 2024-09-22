import { type Vec3 } from '@hextatic/hextatic';
import { Container } from 'pixi.js';

import { CubicCoordsDebug } from '../debug/CubicCoordsDebug';
import { HexagonFlatGraphics } from '../graphics/HexagonFlatGraphics';

export class Tile extends Container {
    private _coords: Vec3;
    private _radius: number;

    private _hexagon: HexagonFlatGraphics;
    private _cubicCoordsDebug: CubicCoordsDebug;

    constructor(coords: Vec3, radius: number) {
        super();

        this._coords = coords;
        this._radius = radius;

        this._build();
    }

    private _build(): void {
        this._hexagon = new HexagonFlatGraphics(this._radius, {
            color: 0x666666,
        });
        this.addChild(this._hexagon);

        this._cubicCoordsDebug = new CubicCoordsDebug(this._coords, this._radius - 20);
        this.addChild(this._cubicCoordsDebug);
    }
}
