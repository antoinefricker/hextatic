import { Container } from 'pixi.js';

import { type Board } from '../board/Board';
import { Button } from '../ui/Button';
import { DemoResetOrigin } from './DemoResetOrigin';
import { DemoShowDistance } from './DemoShowDistance';
import { DemoShowNeighbours } from './DemoShowNeighbours';
import { type IDemoStrategy } from './DemoStrategy';

export class DemoSelector extends Container {
    private _board: Board;
    private _demoTogglers: Button[] = [];

    constructor(board: Board) {
        super();

        this._board = board;

        const showAxisButton = new Button(
            'Show axis',
            (toggleStatus: boolean) => (this._board.axis.visible = toggleStatus),
            true,
            this._board.axis.visible,
        );
        showAxisButton.position.set(0, 0);
        this.addChild(showAxisButton);

        const resetCenterButton = new Button(
            'Reset origin',
            (status) =>
                this._setDemoMode(status && new DemoResetOrigin(this._board), resetCenterButton),
            true,
        );
        resetCenterButton.position.set(0, 40);
        this.addChild(resetCenterButton);

        const showDistanceButton = new Button(
            'Show distance',
            (status) =>
                this._setDemoMode(status && new DemoShowDistance(this._board), showDistanceButton),
            true,
        );
        showDistanceButton.position.set(0, 70);
        this.addChild(showDistanceButton);

        const showNeighboursButton = new Button(
            'Show neighbours',
            (status) =>
                this._setDemoMode(
                    status && new DemoShowNeighbours(this._board),
                    showNeighboursButton,
                ),
            true,
        );
        showNeighboursButton.position.set(0, 100);
        this.addChild(showNeighboursButton);

        this._demoTogglers.push(resetCenterButton, showDistanceButton, showNeighboursButton);
    }

    private _setDemoMode(mode: IDemoStrategy | false, button: Button) {
        this._demoTogglers.forEach((toggler) => (toggler.toggled = false));
        if (mode === false) {
            this._board.demoStrategy.setStrategy(null);
            return;
        }

        this._board.demoStrategy.setStrategy(mode);
        button.toggled = true;
    }
}
