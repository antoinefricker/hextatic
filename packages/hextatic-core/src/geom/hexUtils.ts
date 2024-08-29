import { type Vec2 } from '../types';

export const getHexSize = (isPointy: boolean, r: number): Vec2 =>
    isPointy ? [Math.sqrt(3) * r, 2 * r] : [2 * r, Math.sqrt(3) * r];

export const getHexSpacing = (isPointy: boolean, r: number = 1): Vec2 =>
    isPointy ? [(3 / 2) * r, Math.sqrt(3) * r] : [Math.sqrt(3) * r, (3 / 2) * r];

const hexCornersPointy = (() => {
    const thetaInc = (Math.PI * 2) / 6;
    const angles = Array.from({ length: 6 }, (_, i) => i * thetaInc);
    return angles.map<Vec2>((angle) => [Math.cos(angle), Math.sin(angle)]);
})();

const hexCornersFlat = (() => {
    const thetaInc = (Math.PI * 2) / 6;
    const angles = Array.from({ length: 6 }, (_, i) => (i + 0.5) * thetaInc);
    return angles.map<Vec2>((angle) => [Math.cos(angle), Math.sin(angle)]);
})();

export const getHexCorners = (isPointy: boolean): Vec2[] => (isPointy ? [...hexCornersPointy] : [...hexCornersFlat]);
