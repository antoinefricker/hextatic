import { Application, Graphics } from 'pixi.js';

import { Board } from '../board/Board';

class DemoApplication extends Application {
    private _hitArea: Graphics;
    private _board: Board;

    constructor() {
        super();
    }

    public behave(): void {
        window.addEventListener('resize', this._resizeHandler.bind(this));
        this._resizeHandler();
    }

    public async build(): Promise<void> {
        await this.init({ background: 0xb3b4ad, antialias: true });

        document.body.appendChild(this.canvas);

        this._hitArea = new Graphics();
        this.stage.addChild(this._hitArea);

        this._board = new Board();
        this.stage.addChild(this._board);
    }

    private _resizeHandler(): void {
        this.renderer.resize(window.innerWidth, window.innerHeight);
    }
}

export const app = new DemoApplication();
