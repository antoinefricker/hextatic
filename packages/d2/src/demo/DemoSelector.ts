import { Container } from 'pixi.js';

import { Button } from '../ui/Button';

export class DemoSelector extends Container {
    constructor() {
        super();

        this.position.set(20, 1000);

        const showAxisButton = new Button('Show axis', () => this._setDemoMode('showAxis'));
        showAxisButton.position.set(0, 0);
        this.addChild(showAxisButton);

        const resetCenterButton = new Button('Reset center', () =>
            this._setDemoMode('resetCenter'),
        );
        resetCenterButton.position.set(0, 40);
        this.addChild(resetCenterButton);

        const showDistanceButton = new Button('Show distance', () =>
            this._setDemoMode('showDistance'),
        );
        showDistanceButton.position.set(0, 80);
        this.addChild(showDistanceButton);

        const showNeighbours = new Button('Show neighbours', () =>
            this._setDemoMode('showNeighbours'),
        );
        showNeighbours.position.set(0, 120);
        this.addChild(showNeighbours);
    }

    private _setDemoMode(mode: string) {
        // eslint-disable-next-line no-console
        console.log('Demo mode:', mode);
    }
}
