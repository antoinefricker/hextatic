import { type Board, type Vec2 } from '../types';
import { getHexSize, getHexSpacing } from './hexUtils';

export const getBoardSize = ({ radius, cols, rows }: Pick<Board, 'radius' | 'cols' | 'rows'>): Vec2 => {
    const [hexSizeX, hexSizeY] = getHexSize(radius);
    const [hexSpacingX, hexSpacingY] = getHexSpacing(radius);
    return [(cols - 1) * hexSpacingX + hexSizeX, (rows - 1 + (rows > 1 ? 0.5 : 0)) * hexSpacingY + hexSizeY];
};
