import { CubicCoords, Vec2, type Vec3 } from '@hextatic/hextatic';
import { Container, Text, TextStyle } from 'pixi.js';

export class CubicCoordsDebug extends Container {
    constructor(coords: Vec3, radius: number) {
        super();

        Object.keys(cubicCoordsDisplaySettings).forEach((key) => {
            const { theta, color } = cubicCoordsDisplaySettings[key];
            const { x, y } = Vec2.FromPolarCoords(theta, radius);

            const label = this.createLabel(coords[key], color);
            label.position.set(x, y);
            this.addChild(label);
        });
    }

    private createLabel(content: string, color: number): Text {
        const label = new Text();
        label.text = content;
        label.style = new TextStyle({
            fontSize: 14,
            fontWeight: 'bold',
            fill: color,
        });
        label.anchor.set(0.5);
        return label;
    }
}

const cubicCoordsDisplaySettings = CubicCoords.GetDisplaySettings();
