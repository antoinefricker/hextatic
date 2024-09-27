import { type Vec3 } from '@hextatic/hextatic';
import { Container } from 'pixi.js';

import { CubicCoordsDebug } from '../debug/CubicCoordsDebug';
import { HexagonFlatGraphics } from '../graphics/HexagonFlatGraphics';

export class Tile extends Container {
    private _coords: Vec3;
    private _radius: number;
    private _color: number = 0x666666;

    private _hexagon: HexagonFlatGraphics;
    private _cubicCoordsDebug: CubicCoordsDebug;

    constructor(coords: Vec3, radius: number) {
        super();

        this._coords = coords;
        this._radius = radius;

        this._build();
        this.redraw();
    }

    public get color(): number {
        return this._color;
    }
    public set color(color: number) {
        this._hexagon.fillStyle.color = color;
        this.redraw();
    }

    public get coords(): Vec3 {
        return this._coords;
    }
    public set coords(coords: Vec3) {
        this._coords = coords;
    }

    public redraw(): void {
        this._hexagon.redraw();

        if (this._cubicCoordsDebug) {
            this.removeChild(this._cubicCoordsDebug);
        }
        this._cubicCoordsDebug = new CubicCoordsDebug(this._coords, this._radius - 20);
        this.addChild(this._cubicCoordsDebug);
    }

    private _build(): void {
        this.removeChildren();
        this._hexagon = new HexagonFlatGraphics(
            this._radius,
            {
                color: this._color,
            },
            {
                color: Tile.DefaultFillColor,
                alpha: 0.5,
            },
        );
        this.addChild(this._hexagon);
    }

    static DefaultFillColor = 0x888888;
}
