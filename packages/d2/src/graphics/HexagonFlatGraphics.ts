import { Hex } from '@hextatic/hextatic';
import { type FillStyle, Graphics, type StrokeStyle } from 'pixi.js';

export class HexagonFlatGraphics extends Graphics {
    private _radius: number;

    constructor(radius: number, strokeStyle?: StrokeStyle, fillStyle?: FillStyle) {
        super();

        this._radius = radius;

        this.strokeStyle = {
            color: 0xffffff,
            width: 2,
            alpha: 1,
            ...strokeStyle,
        };

        this.fillStyle = {
            color: 0xbdb7b7,
            ...fillStyle,
        };

        this.redraw();
    }

    public redraw(): void {
        this.clear();
        const corners = Hex.GetCorners(this._radius);

        for (let index = 0; index <= 6; ++index) {
            const { x, y } = corners[index % 6];
            index === 0 ? this.moveTo(x, y) : this.lineTo(x, y);
        }
        this.fill(this.fillStyle);
        this.stroke(this.strokeStyle);
    }
}
