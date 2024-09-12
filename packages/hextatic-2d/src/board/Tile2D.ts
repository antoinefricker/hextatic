import { hex, vec2, type Vec3 } from '@antoinefricker/hextatic-core';
import { Container, Graphics } from 'pixi.js';

import { CubicCoordsDebug } from './CubicCoordsDebug';

export class Tile2D extends Container {
    public coords: Vec3;

    constructor(cubicCoords: Vec3, radius: number) {
        super();

        this.coords = cubicCoords;

        const ground = new Graphics();
        for (let index = 0; index <= 6; ++index) {
            const [x, y] = vec2.scale(hex.hexCorners[index % 6], radius);
            index === 0 ? ground.moveTo(x, y) : ground.lineTo(x, y);
        }
        ground.fill(0x666666);
        ground.stroke({ width: 2, color: 0xffffff });
        this.addChild(ground);

        this.addChild(new CubicCoordsDebug(cubicCoords, radius));
    }
}
