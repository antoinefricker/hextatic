import { type Board } from '../types';

export const generateRectangularBoard = (width: number, height: number): Board => {
    const board: Board = {
        tiles: [],
    };
    for (let q = 0; q < width; q++) {
        for (let r = 0; r < height; r++) {
            const s = -q - r + 0; // avoid failure with -0
            board.tiles.push([q, r, s]);
        }
    }
    return board;
};
