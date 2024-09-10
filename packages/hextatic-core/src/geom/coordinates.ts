import { type Vec2, type Vec3 } from '../types';

export const cubicToGrid = ([q, r, s]: Vec3): Vec2 => [q, -r + s];
