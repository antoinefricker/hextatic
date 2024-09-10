import { type Vec2 } from '../types';

export const getHexSize = (r: number): Vec2 => [2 * r, Math.sqrt(3) * r];

export const getHexSpacing = (r: number): Vec2 => [(3 / 2) * r, Math.sqrt(3) * r];

export const hexCorners = (() => {
    const thetaInc = (Math.PI * 2) / 6;
    const angles = Array.from({ length: 6 }, (_, i) => i * thetaInc);
    return angles.map<Vec2>((angle) => [Math.cos(angle), Math.sin(angle)]);
})();
