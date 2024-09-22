import { HexFlat } from '@hextatic/hextatic';
import { Graphics, type StrokeStyle } from 'pixi.js';

export class HexagonFlatGraphics extends Graphics {
    constructor(radius: number, strokeStyle?: StrokeStyle) {
        super();

        strokeStyle = {
            color: 0xffffff,
            width: 2,
            alpha: 1,
            ...strokeStyle,
        };

        const corners = HexFlat.GetCorners(radius);

        for (let index = 0; index <= 6; ++index) {
            const { x, y } = corners[index % 6];
            index === 0 ? this.moveTo(x, y) : this.lineTo(x, y);
        }
        this.stroke(strokeStyle);
    }
}
