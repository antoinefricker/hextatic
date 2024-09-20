import { Container, HTMLText } from 'pixi.js';

import { cubicSettings } from '../constants';
export class CubicCoordsHelper extends Container {
    constructor() {
        super();

        const text = new HTMLText({
            text:
                `<span style="color: #${cubicSettings.q.color.toString(16)}">Q</span>` +
                `<span style="color: #${cubicSettings.r.color.toString(16)}">R</span>` +
                `<span style="color: #${cubicSettings.s.color.toString(16)}">S</span>`,
            style: {},
        });
        text.anchor.set(0.5);
        this.addChild(text);
    }
}
