import { type Vec2, type Vec3 } from '../types';

export const cubicToGrid = ([q, r, s]: Vec3): Vec2 => [q, -r + s];

export type Neighbours = [Vec3, Vec3, Vec3, Vec3, Vec3, Vec3];
export type Direction = 'N' | 'NE' | 'SE' | 'S' | 'SW' | 'NW';

export const DIRECTIONS = ['N', 'NE', 'SE', 'S', 'SW', 'NW'] as const;

export const getNeighbours = (cubic: Vec3): Neighbours => [
    n(cubic),
    ne(cubic),
    se(cubic),
    s(cubic),
    sw(cubic),
    nw(cubic),
];

export const n = ([q, r, s]: Vec3): Vec3 => [q, r + 1, s - 1];
export const ne = ([q, r, s]: Vec3): Vec3 => [q + 1, r, s - 1];
export const se = ([q, r, s]: Vec3): Vec3 => [q + 1, r - 1, s];
export const s = ([q, r, s]: Vec3): Vec3 => [q, r - 1, s + 1];
export const sw = ([q, r, s]: Vec3): Vec3 => [q - 1, r, s + 1];
export const nw = ([q, r, s]: Vec3): Vec3 => [q - 1, r + 1, s];

export const getNeighboursAsDirections = (cubic: Vec3): Record<Direction, Vec3> => ({
    N: n(cubic),
    NE: ne(cubic),
    SE: se(cubic),
    S: s(cubic),
    SW: sw(cubic),
    NW: nw(cubic),
});
