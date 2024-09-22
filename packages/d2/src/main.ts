import './main.css';

import { Application } from 'pixi.js';

import { Board } from './board/Board';

const app = new Application();
await app.init({ background: 0xb3b4ad, antialias: true });
document.body.appendChild(app.canvas);

const resizeHandler = () => app.renderer.resize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', resizeHandler);
resizeHandler();

app.stage.addChild(new Board());
