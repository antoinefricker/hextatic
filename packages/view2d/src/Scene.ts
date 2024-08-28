import { Application, Sprite, Assets, Text } from 'pixi.js';
import { version } from '@antoinefricker/hextatic-core';

const app = new Application();

await app.init({ background: 0x1099bb });
document.body.appendChild(app.canvas);

const resizeHandler = () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', resizeHandler);
resizeHandler();

const texture = await Assets.load('bunny.png');

const bunnies = Array.from({ length: 400 }).map(() => {
    const depth = Math.random() * 100;
    const bunny = new Sprite(texture);
    bunny.x = Math.random() * app.renderer.width;
    bunny.y = Math.random() * app.renderer.height;
    bunny.scale.set((2 * depth) / 100);
    bunny.zIndex = depth;
    bunny.alpha = 0.15 + depth / 100;
    bunny.rotation = Math.random() * Math.PI * 2;
    bunny.anchor.set(0.5);
    app.stage.addChild(bunny);
    return bunny;
});

const text = new Text({ text: `Hextatic Core version: ${version}` });
text.position.set(0.5 * app.renderer.width, 0.5 * app.renderer.height);
text.anchor.set(0.5);
text.zIndex = 1000;
app.stage.addChild(text);

app.ticker.add(() => {
    bunnies.forEach((bunny) => (bunny.rotation += 0.05));
});
