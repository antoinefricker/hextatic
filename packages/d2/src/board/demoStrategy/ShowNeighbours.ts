import { type Vec3, vec3 } from '../../../../hextatic/src';
import { getNeighboursAsDirections } from '../../../../hextatic/src/geom/coordinates';
import { type Board2D } from '../Board2D';
import { type IDemoStrategy } from './IDemoStrategy';

export class ShowNeighbours implements IDemoStrategy {
    private board: Board2D;

    constructor(board: Board2D) {
        this.board = board;
    }

    public init(board: Board2D) {
        this.board = board;
    }

    public onmousedown(_cubic: Vec3): void {}

    public onmouseout(): void {
        this.board.cells.map((cell) => (cell.tint = null));
    }

    public onmouseover(cubic: Vec3): void {
        const neighbours = getNeighboursAsDirections(cubic);
        this.board.cells.map((cell) => {
            const distance = vec3.distance(cell.coords, cubic);
            cell.tint = distance & 1 ? 0xaa3366 : 0xff3366;
        });
    }
}
