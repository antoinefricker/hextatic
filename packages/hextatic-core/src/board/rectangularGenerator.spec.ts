import { describe, expect, it } from 'vitest';

import { generateRectangularBoard } from './rectangularGenerator';

describe('RectangularGenerator', () => {
    it('should generate a rectangular board of 2 x 2', () => {
        const board = generateRectangularBoard(2, 2, 10);

        const expected = [
            [0, 0, 0],
            [1, -1, 0],
            [0, -1, 1],
            [1, -2, 1],
        ];

        expect(board.tiles.flat()).toEqual(expected.flat());
    });

    it('should generate a rectangular board of 8 x 3', () => {
        const board = generateRectangularBoard(8, 3, 10);

        const expected = [
            [0, 0, 0],
            [1, -1, 0],
            [2, -1, -1],
            [3, -2, -1],
            [4, -2, -2],
            [5, -3, -2],
            [6, -3, -3],
            [7, -4, -3],
            [0, -1, 1],
            [1, -2, 1],
            [2, -2, 0],
            [3, -3, 0],
            [4, -3, -1],
            [5, -4, -1],
            [6, -4, -2],
            [7, -5, -2],
            [0, -2, 2],
            [1, -3, 2],
            [2, -3, 1],
            [3, -4, 1],
            [4, -4, 0],
            [5, -5, 0],
            [6, -5, -1],
            [7, -6, -1],
        ];

        expect(board.tiles.flat()).toEqual(expected.flat());
    });
});
