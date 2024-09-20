import { Container, Text, TextStyle } from 'pixi.js';

import { vec2, type Vec3 } from '../../../hextatic/src';
import { cubicSettings } from '../constants';

export class CubicCoordsDebug extends Container {
    constructor(coords: Vec3, radius: number, more?: string) {
        super();

        Object.keys(cubicSettings).forEach((key) => {
            const { index: keyIndex, theta, color } = cubicSettings[key];
            const [x, y] = vec2.scale([Math.cos(theta), Math.sin(theta)], 0.5 * radius);
            const label = this.createLabel(`${coords[keyIndex]}`, color);
            label.position.set(x, y);
            this.addChild(label);
        });

        if (more !== undefined) {
            const label = this.createLabel(more, 0xffffff);
            this.addChild(label);
        }
    }

    private createLabel(content: string, color: number): Text {
        const label = new Text();
        label.text = content;
        label.style = new TextStyle({
            fontSize: 14,
            fill: color,
        });
        label.anchor.set(0.5);
        return label;
    }
}
