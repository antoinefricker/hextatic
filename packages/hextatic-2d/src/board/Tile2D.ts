import { coords, hex, vec2, type Vec3 } from '@antoinefricker/hextatic-core';
import { getHexSize, getHexSpacing } from '@antoinefricker/hextatic-core/src/geom/hexUtils';
import { Container, Graphics } from 'pixi.js';

import { CubicCoordsDebug } from './CubicCoordsDebug';

export class Tile2D extends Container {
    public coords: Vec3;

    constructor(cubicCoords: Vec3, radius: number, index: number) {
        super();

        this.coords = cubicCoords;

        const hexSize = getHexSize(radius);
        const hexSpacing = getHexSpacing(radius);

        const d2Coords = coords.cubicToGrid(cubicCoords);
        const position = vec2.multiply(d2Coords, [hexSpacing[0], 0.5 * hexSpacing[1]]);
        const offset = vec2.scale(hexSize, 0.5);
        const [x, y] = vec2.add(position, offset);

        this.position.set(x, y);

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
