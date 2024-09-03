import { type Vec2, type Vec3 } from '../types';

export const cubicToGrid = ([q, _r, s]: Vec3): Vec2 => [q, s];

export const gridToCubic = ([x, y]: Vec2): Vec3 => [x, -x - y, y];
