import { type Tile } from '../board/Tile';

export class DemoStrategy implements IDemoStrategy {
    private strategy: IDemoStrategy | null;

    public setStrategy(strategy: IDemoStrategy | null): void {
        this.strategy = strategy;
    }

    public onmouseover(tile: Tile | null): void {
        this.strategy?.onmouseover(tile);
    }

    public onmouseout(): void {
        this.strategy?.onmouseout();
    }

    public onmousedown(tile: Tile): void {
        this.strategy?.onmousedown(tile);
    }
}

export type IDemoStrategy = {
    onmouseover: (tile: Tile) => void;
    onmouseout: () => void;
    onmousedown: (tile: Tile) => void;
};
