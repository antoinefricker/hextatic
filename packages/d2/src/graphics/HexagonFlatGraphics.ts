import { HexFlat } from '@hextatic/hextatic';
import { Graphics } from 'pixi.js';

export class HexagonFlatGraphics extends Graphics {
    constructor(color: number, radius: number, alpha = 1) {
        super();

        const corners = HexFlat.GetCorners(radius);

        for (let index = 0; index <= 6; ++index) {
            const { x, y } = corners[index % 6];
            index === 0 ? this.moveTo(x, y) : this.lineTo(x, y);
        }
        this.stroke({ width: 2, color, alpha });
    }
}
