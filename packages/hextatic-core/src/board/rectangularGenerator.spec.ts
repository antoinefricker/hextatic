import { describe, expect, it } from 'vitest';

import { generateRectangularBoard } from './rectangularGenerator';

describe('RectangularGenerator', () => {
    it('should generate a rectangular board of 2 x 2', () => {
        const board = generateRectangularBoard(2, 2);

        const expected = [
            [0, 0, 0],
            [0, 1, -1],
            [1, 0, -1],
            [1, 1, -2],
        ];

        expect(board.tiles.flat()).toEqual(expected.flat());
    });

    it('should generate a rectangular board of 8 x 5', () => {
        const board = generateRectangularBoard(8, 5);

        const expected = [
            [0, 0, 0],
            [0, 1, -1],
            [0, 2, -2],
            [0, 3, -3],
            [0, 4, -4],
            [1, 0, -1],
            [1, 1, -2],
            [1, 2, -3],
            [1, 3, -4],
            [1, 4, -5],
            [2, 0, -2],
            [2, 1, -3],
            [2, 2, -4],
            [2, 3, -5],
            [2, 4, -6],
            [3, 0, -3],
            [3, 1, -4],
            [3, 2, -5],
            [3, 3, -6],
            [3, 4, -7],
            [4, 0, -4],
            [4, 1, -5],
            [4, 2, -6],
            [4, 3, -7],
            [4, 4, -8],
            [5, 0, -5],
            [5, 1, -6],
            [5, 2, -7],
            [5, 3, -8],
            [5, 4, -9],
            [6, 0, -6],
            [6, 1, -7],
            [6, 2, -8],
            [6, 3, -9],
            [6, 4, -10],
            [7, 0, -7],
            [7, 1, -8],
            [7, 2, -9],
            [7, 3, -10],
            [7, 4, -11],
        ];

        expect(board.tiles.flat()).toEqual(expected.flat());
    });
});
