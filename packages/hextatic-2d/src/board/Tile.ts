import { coords, hex, type Vec2, vec2, type Vec3 } from '@antoinefricker/hextatic-core';
import { getHexSize } from '@antoinefricker/hextatic-core/src/geom/hexUtils';
import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class Tile extends Container {
    constructor(cubicCoords: Vec3, radius: number) {
        super();

        const [q, r, s] = cubicCoords;

        const hexSize = getHexSize(radius);
        const [x, y] = vec2.multiply(hexSize, coords.cubicToGrid(cubicCoords));

        this.position.set(x, y);

        const ground = new Graphics();
        ground.fill({ color: 0x666666 });
        ground.moveTo(hex.hexCorners[0][0], hex.hexCorners[0][1]);
        hex.hexCorners.forEach((corner: Vec2) => {
            const [x, y] = vec2.scale(corner, radius);
            ground.lineTo(x, y);
        });
        ground.closePath();
        this.addChild(ground);

        const coordsText = new Text();
        coordsText.style = new TextStyle({
            fontSize: 16,
            fill: 0xffffff,
        });
        coordsText.text = `${q}:${r}:${s}`;
        coordsText.x = -0.5 * coordsText.width;
        coordsText.y = -0.5 * coordsText.height;
        this.addChild(coordsText);
    }
}
