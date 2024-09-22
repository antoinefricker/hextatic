import { HexGrid, Vec3 } from '.';

export class HexGridGenerator {
    static GenerateRectangularBoard = (width: number, height: number) => {
        const grid: HexGrid = new HexGrid(new Vec3(0, 0, 0), [], width, height);
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const x = j;
                const z = i - Math.floor(j / 2);
                const y = -x - z + 0; // prevent failure with -0
                grid.coordinates.push(new Vec3(x, y, z));
            }
        }
        return grid;
    };

    static GenerateHexBoard = (radius: number): HexGrid => {
        const squareSize = 2 * radius - 1;

        const centerX = radius - 1;
        const centerY = -Math.floor(1.5 * radius) + 1;
        const squareCenter: Vec3 = new Vec3(centerX, centerY, -centerX - centerY);

        const squareBoard = HexGridGenerator.GenerateRectangularBoard(squareSize, squareSize);
        return new HexGrid(
            squareBoard.origin,
            squareBoard.coordinates.filter((coord) => Vec3.Distance(coord, squareCenter) < radius),
            squareSize,
            squareSize,
        );
    };
}
