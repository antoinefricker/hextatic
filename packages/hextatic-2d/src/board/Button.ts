import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class Button extends Container {
    constructor(width: number, content: string, onClick: () => void) {
        super();

        const background = new Graphics();
        background.rect(0, 0, width, height);
        background.fill(0x5488bb);
        background.interactive = true;
        background.on('pointerdown', onClick);
        this.addChild(background);

        const label = new Text();
        label.text = content;
        label.style = new TextStyle({
            fontSize: 14,
            fill: 0xffffff,
        });
        label.anchor.set(0.5);
        label.position.set(width / 2, height / 2);
        this.addChild(label);
    }
}

const height = 24;
