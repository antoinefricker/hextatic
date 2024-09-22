import { describe, expect, it } from 'vitest';

import { HexGridGenerator } from './HexGridGenerator';

describe('HexGridGenerator', () => {
    describe('GenerateRectangularBoard', () => {
        it('should generate a rectangular board of 2 x 2', () => {
            const grid = HexGridGenerator.GenerateRectangularBoard(2, 2);
            const gridCoords = grid.coords.map((coords) => coords.toArray());

            const expected = [
                [0, 0, 0],
                [1, -1, 0],
                [0, -1, 1],
                [1, -2, 1],
            ];

            expect(gridCoords).toEqual(expected);
        });

        it('should generate a rectangular board of 8 x 3', () => {
            const grid = HexGridGenerator.GenerateRectangularBoard(8, 3);
            const gridCoords = grid.coords.map((coords) => coords.toArray());

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

            expect(gridCoords).toEqual(expected);
        });

        it('should generate a rectangular board of 2 x 2', () => {
            const grid = HexGridGenerator.GenerateRectangularBoard(2, 2);
            const gridCoords = grid.coords.map((coords) => coords.toArray());

            const expected = [
                [0, 0, 0],
                [1, -1, 0],
                [0, -1, 1],
                [1, -2, 1],
            ];

            expect(gridCoords).toEqual(expected);
        });
    });
    describe('GenerateHexBoard', () => {
        it('should generate a hexagonal board of 2', () => {
            const grid = HexGridGenerator.GenerateHexBoard(2);
            const gridCoords = grid.coords.map((coords) => coords.toArray());

            const expected = [
                [1, -1, 0],
                [0, -1, 1],
                [1, -2, 1],
                [2, -2, 0],
                [0, -2, 2],
                [1, -3, 2],
                [2, -3, 1],
            ];
            expect(gridCoords).toEqual(expected);
        });

        it('should generate a hexagonal board of 6', () => {
            const grid = HexGridGenerator.GenerateHexBoard(6);
            const gridCoords = grid.coords.map((coords) => coords.toArray());

            const expected = [
                [5, -3, -2],
                [3, -3, 0],
                [4, -3, -1],
                [5, -4, -1],
                [6, -4, -2],
                [7, -5, -2],
                [1, -3, 2],
                [2, -3, 1],
                [3, -4, 1],
                [4, -4, 0],
                [5, -5, 0],
                [6, -5, -1],
                [7, -6, -1],
                [8, -6, -2],
                [9, -7, -2],
                [0, -3, 3],
                [1, -4, 3],
                [2, -4, 2],
                [3, -5, 2],
                [4, -5, 1],
                [5, -6, 1],
                [6, -6, 0],
                [7, -7, 0],
                [8, -7, -1],
                [9, -8, -1],
                [10, -8, -2],
                [0, -4, 4],
                [1, -5, 4],
                [2, -5, 3],
                [3, -6, 3],
                [4, -6, 2],
                [5, -7, 2],
                [6, -7, 1],
                [7, -8, 1],
                [8, -8, 0],
                [9, -9, 0],
                [10, -9, -1],
                [0, -5, 5],
                [1, -6, 5],
                [2, -6, 4],
                [3, -7, 4],
                [4, -7, 3],
                [5, -8, 3],
                [6, -8, 2],
                [7, -9, 2],
                [8, -9, 1],
                [9, -10, 1],
                [10, -10, 0],
                [0, -6, 6],
                [1, -7, 6],
                [2, -7, 5],
                [3, -8, 5],
                [4, -8, 4],
                [5, -9, 4],
                [6, -9, 3],
                [7, -10, 3],
                [8, -10, 2],
                [9, -11, 2],
                [10, -11, 1],
                [0, -7, 7],
                [1, -8, 7],
                [2, -8, 6],
                [3, -9, 6],
                [4, -9, 5],
                [5, -10, 5],
                [6, -10, 4],
                [7, -11, 4],
                [8, -11, 3],
                [9, -12, 3],
                [10, -12, 2],
                [0, -8, 8],
                [1, -9, 8],
                [2, -9, 7],
                [3, -10, 7],
                [4, -10, 6],
                [5, -11, 6],
                [6, -11, 5],
                [7, -12, 5],
                [8, -12, 4],
                [9, -13, 4],
                [10, -13, 3],
                [2, -10, 8],
                [3, -11, 8],
                [4, -11, 7],
                [5, -12, 7],
                [6, -12, 6],
                [7, -13, 6],
                [8, -13, 5],
                [4, -12, 8],
                [5, -13, 8],
                [6, -13, 7],
            ];
            expect(gridCoords).toEqual(expected);
        });
    });
});
