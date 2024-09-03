import { Application, Graphics } from 'pixi.js';

import { Board } from './board/Board';

const app = new Application();

await app.init({ background: 0xb3b4ad });
document.body.appendChild(app.canvas);

const resizeHandler = () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', resizeHandler);
resizeHandler();

const board = new Board();
board.position.set(100, 100);
app.stage.addChild(board);
