import { type Vec2, type Vec2Object } from '../types';

export const fromObj = ({ x, y }: Vec2Object): Vec2 => [x, y];

export const clone = ([x, y]: Vec2): Vec2 => [x, y];

export const scale = ([x, y]: Vec2, s: number): Vec2 => [x * s, y * s];

export const normalize = (v: Vec2): Vec2 => scale(v, 1 / getLength(v));

export const getLength = ([x, y]: Vec2): number => Math.hypot(x, y);

export const setLength = ([x, y]: Vec2, len: number): Vec2 => scale([x, y], len / Math.hypot(x, y));

export const multiply = ([x, y]: Vec2, [sx, sy]: Vec2): Vec2 => [x * sx, y * sy];

export const add = ([x1, y1]: Vec2, [x2, y2]: Vec2): Vec2 => [x1 + x2, y1 + y2];

export const minus = ([x1, y1]: Vec2, [x2, y2]: Vec2): Vec2 => [x1 - x2, y1 - y2];

export const distance = ([x1, y1]: Vec2, [x2, y2]: Vec2): number => Math.hypot(x1 - x2, y1 - y2);

/** computes the angle in radians with respect to the positive x-axis */
export const getAngle = ([x, y]: Vec2): number => Math.atan2(-y, -x) + Math.PI;

export const permutate = ([x, y]: Vec2): Vec2 => [y, x];
