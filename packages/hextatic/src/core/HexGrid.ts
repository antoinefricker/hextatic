import { Hex, Vec2, type Vec3 } from '.';

export class HexGrid {
    /** cubic coordinates origin */
    public origin: Vec3;
    /** cubic coordinates */
    private _coords: Vec3[];
    /** cubic coordinates dictionary */
    private _coordsDict: Record<string, number>;
    /** width in tiles */
    public width: number;
    /** height in tiles */
    public height: number;

    constructor(origin: Vec3, coords: Vec3[], width: number, height: number) {
        this.origin = origin;
        this.coords = coords;
        this.width = width;
        this.height = height;
    }

    public get coords(): Vec3[] {
        return this._coords;
    }

    public set coords(coords: Vec3[]) {
        this._coords = coords;
        this._coordsDict = {};
        this._coords.forEach((coord, index) => {
            this._coordsDict[coord.toString()] = index;
        });
    }

    public get coordsDict(): Record<string, number> {
        return this._coordsDict;
    }

    public resetCoordsOrigin(cubic: Vec3): void {
        this.origin = this.origin.add(cubic);
        this.coords = this.coords.map((coord) => coord.minus(cubic));
    }

    static GetSize(board: HexGrid, radius: number): { position: Vec2; size: Vec2 } {
        const size = Hex.GetSize(radius);
        const spacing = Hex.GetSpacing(radius);
        return {
            position: Vec2.Zero,
            size: new Vec2(
                size.x + spacing.x * (board.width - 1),
                size.y + spacing.y * (board.height - 1),
            ),
        };
    }
}
