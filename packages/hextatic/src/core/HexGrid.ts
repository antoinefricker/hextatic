import { type Vec3 } from '.';

export class HexGrid {
    /** cubic coordinates origin */
    public origin: Vec3;
    /** cubic coordinates */
    public coords: Vec3[];
    /** width in tiles */
    public width: number;
    /** height in tiles */
    public height: number;

    constructor(origin: Vec3, coordinates: Vec3[], width: number, height: number) {
        this.origin = origin;
        this.coords = coordinates;
        this.width = width;
        this.height = height;
    }

    public resetCoordinatesOrigin(cubic: Vec3): void {
        this.origin = this.origin.add(cubic);
        this.coords = this.coords.map((coordinate) => coordinate.minus(cubic));
    }
}
