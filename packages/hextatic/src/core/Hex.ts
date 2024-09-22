import { Vec2 } from '.';

export class HexFlat {
    private static _hexFlatCorners: Vec2[];

    static GetSize(radius: number): Vec2 {
        return new Vec2(2 * radius, Math.sqrt(3) * radius);
    }
    static GetSpacing(radius: number): Vec2 {
        return new Vec2((3 / 2) * radius, Math.sqrt(3) * radius);
    }
    static GetCorners(radius: number) {
        if (!this._hexFlatCorners) {
            this._hexFlatCorners = Array.from({ length: 6 })
                .map<number>((_, i) => (i * Math.PI * 2) / 6)
                .map<Vec2>((angle) => Vec2.FromPolarCoords(angle, 1));
        }
        return this._hexFlatCorners.map((corner) => corner.scale(radius));
    }
}
