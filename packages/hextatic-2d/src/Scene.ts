import { Application } from 'pixi.js';

import { Board2D } from './board/Board2D';

const app = new Application();

await app.init({ background: 0xb3b4ad, antialias: true });
document.body.appendChild(app.canvas);

const resizeHandler = () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', resizeHandler);
resizeHandler();

const board = new Board2D();
board.position.set(100, 100);
app.stage.addChild(board);
