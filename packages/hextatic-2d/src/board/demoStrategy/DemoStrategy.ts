import { type Vec3 } from '@antoinefricker/hextatic-core';

import { type IDemoStrategy } from './IDemoStrategy';

export class DemoStrategy implements IDemoStrategy {
    private strategy: IDemoStrategy;

    public setStrategy(strategy: IDemoStrategy): void {
        this.strategy = strategy;
    }

    public onmouseover(cubic: Vec3 | null): void {
        this.strategy?.onmouseover(cubic);
    }

    public onmouseout(): void {
        this.strategy?.onmouseout();
    }

    public onmousedown(cubic: Vec3): void {
        this.strategy?.onmousedown(cubic);
    }
}
