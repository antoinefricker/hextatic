import { type Vec2Object } from '.';

export class Vec2 {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    public scale(s: number): Vec2 {
        return new Vec2(this.x * s, this.y * s);
    }

    public getLength(): number {
        return Math.hypot(this.x, this.y);
    }

    public setLength(len: number): Vec2 {
        return this.scale(len / this.getLength());
    }

    public add(v: Vec2): Vec2 {
        return new Vec2(this.x + v.x, this.y + v.y);
    }

    public minus(v: Vec2): Vec2 {
        return new Vec2(this.x - v.x, this.y - v.y);
    }

    public multiply(v: Vec2): Vec2 {
        return new Vec2(this.x * v.x, this.y * v.y);
    }

    static FromObj({ x, y }: Vec2Object): Vec2 {
        return new Vec2(x, y);
    }

    static FromArr([x, y]: number[]): Vec2 {
        return new Vec2(x, y);
    }

    static Distance(v1: Vec2, v2: Vec2): number {
        const delta = v1.minus(v2);
        return (Math.abs(delta.x) + Math.abs(delta.y)) / 2;
    }

    static FromPolarCoords(theta: number, radius: number): Vec2 {
        return new Vec2(Math.cos(theta) * radius, Math.sin(theta) * radius);
    }

    static Zero = new Vec2(0, 0);
}
