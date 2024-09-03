import { type Vec2 } from '../types';

export const getHexSize = (r: number): Vec2 => [2 * r, Math.sqrt(3) * r];

export const getHexSpacing = (r: number = 1): Vec2 => [Math.sqrt(3) * r, (3 / 2) * r];

/** flat hexagons corner within trigonometric circle */
export const hexCorners = (() => {
    const thetaInc = (Math.PI * 2) / 6;
    const angles = Array.from({ length: 6 }, (_, i) => (i + 0.5) * thetaInc);
    return angles.map<Vec2>((angle) => [Math.cos(angle), Math.sin(angle)]);
})();
