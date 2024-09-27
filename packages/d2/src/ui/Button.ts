import { Vec2 } from '@hextatic/hextatic';
import { Container, Graphics, Rectangle, Text, TextStyle } from 'pixi.js';

export class Button extends Container {
    private _background: Graphics;
    private _text: Text;

    private _toggled: boolean = false;
    private _asToggler: boolean = false;

    private _onClick: (status: boolean) => void;

    constructor(
        label: string,
        onClick: (status: boolean) => void,
        asToggler: boolean = false,
        toggled: boolean = false,
    ) {
        super();

        this._asToggler = asToggler;
        this._toggled = toggled;
        this._onClick = onClick;

        this._build();
        this._text.text = label;

        this._background.interactive = true;
        this._background.cursor = 'pointer';
        this._background.on('pointerdown', this._handleClick);

        this._redraw();
    }

    public set toggled(value: boolean) {
        if (!this._asToggler) {
            return;
        }
        this._toggled = value;
        this._redraw();
    }

    public get toggled(): boolean {
        return this._toggled && this._asToggler;
    }

    private _handleClick = () => {
        if (this._asToggler) {
            this._toggled = !this._toggled;
        }
        this._onClick(this._toggled);
        this._redraw();
    };

    private _build() {
        this._background = new Graphics();
        this._background.interactive = true;
        this.addChild(this._background);

        this._text = new Text();
        this._text.position.set(margin.x, margin.y);
        this._text.style = new TextStyle({
            fontSize: 14,
            fill: 0xffffff,
        });
        this.addChild(this._text);
    }

    private _redraw() {
        const { width, height } = this._text.getLocalBounds();

        const size = new Vec2(width + 2 * margin.x, height + 2 * margin.y);

        this._background.clear();
        this._background.rect(0, 0, size.x, size.y);
        this._background.fill(this._toggled ? 0x5488bb : 0x3b5f82);

        this.hitArea = new Rectangle(0, 0, size.x, size.y);
    }
}

const margin = new Vec2(20, 6);
