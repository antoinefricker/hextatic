import { CubicCoords, Vec2 } from '@hextatic/hextatic';
import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class CubicCoordsAxis extends Container {
    constructor() {
        super();

        const textRadius = 70;

        Object.keys(cubicCoordsDisplaySettings).forEach((key) => {
            const { theta, color } = cubicCoordsDisplaySettings[key];
            const { x, y } = Vec2.FromPolarCoords(theta, textRadius);

            const label = this.createLabel(`+${key}`, color);
            label.position.set(x, y);
            this.addChild(label);

            const arrow = new ArrowGraphics(color);
            arrow.rotation = theta;
            this.addChild(arrow);
        });
    }

    private createLabel(content: string, color: number): Text {
        const label = new Text();
        label.text = content;
        label.style = new TextStyle({
            fontSize: 18,
            fontWeight: 'bold',
            fill: color,
        });
        label.anchor.set(0.5);
        return label;
    }
}

class ArrowGraphics extends Graphics {
    constructor(color: number) {
        super();

        this.moveTo(0, 0);
        this.lineTo(50, 0);
        this.moveTo(40, -10);
        this.lineTo(50, 0);
        this.lineTo(40, 10);
        this.setStrokeStyle({ width: 4, color, alpha: 1, alignment: 0.5 });
        this.stroke();
    }
}

const cubicCoordsDisplaySettings = CubicCoords.GetDisplaySettings();
