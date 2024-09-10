import { type Board } from '../types';

export const generateRectangularBoard = (cols: number, rows: number, radius: number): Board => {
    const board: Board = {
        tiles: [],
        rows,
        cols,
        radius,
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col;
            const z = row - Math.floor(col / 2);
            const y = -x - z + 0; // avoid failure with -0
            board.tiles.push([x, y, z]);
        }
    }
    return board;
};
