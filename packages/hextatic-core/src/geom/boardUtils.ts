import { vec3 } from '..';
import { type Board, type Vec2, type Vec3 } from '../types';
import { getHexSize, getHexSpacing } from './hexUtils';

export const generateRectangularBoard = (cols: number, rows: number, radius: number): Board => {
    const board: Board = {
        origin: [0, 0, 0],
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

export const generateHexBoard = (boardRadius: number, radius: number): Board => {
    const squareSize = 2 * boardRadius - 1;

    const centerQ = boardRadius - 1;
    const centerR = -Math.floor(1.5 * boardRadius) + 1;
    const squareCenter: Vec3 = [centerQ, centerR, -centerQ - centerR];

    const squareBoard = generateRectangularBoard(squareSize, squareSize, radius);
    return {
        ...squareBoard,
        tiles: squareBoard.tiles.filter((tile) => vec3.distance(tile, squareCenter) < boardRadius),
        rows: squareSize,
        cols: squareSize,
    };
};

export const resetBoardOrigin = (board: Board, cubic: Vec3): Board => {
    board.origin = vec3.add(board.origin, cubic);
    board.tiles = board.tiles.map((tile) => vec3.minus(tile, cubic));
    return board;
};

export const getBoardSize = (board: Board): Vec2 => {
    const hexSize = getHexSize(board.radius);
    const boardSpacing = getHexSpacing(board.radius);
    return [hexSize[0] + boardSpacing[0] * (board.cols - 1), hexSize[1] + boardSpacing[1] * (board.rows - 1)];
};
