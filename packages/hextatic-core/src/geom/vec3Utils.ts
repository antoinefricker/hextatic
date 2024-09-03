import { type Vec3, type Vec3Object } from '../types';

export const fromObj = ({ x, y, z }: Vec3Object): Vec3 => [x, y, z];

export const clone = ([x, y, z]: Vec3): Vec3 => [x, y, z];

export const scale = ([x, y, z]: Vec3, s: number): Vec3 => [x * s, y * s, z * s];

export const getLength = ([x, y, z]: Vec3): number => Math.hypot(x, y, z);

export const normalize = (v: Vec3): Vec3 => scale(v, 1 / getLength(v));

export const setLength = (v: Vec3, len: number): Vec3 => scale(normalize(v), len);

export const multiply = ([x, y, z]: Vec3, [sx, sy, sz]: Vec3): Vec3 => [x * sx, y * sy, z * sz];

export const add = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): Vec3 => [x1 + x2, y1 + y2, z1 + z2];

export const minus = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): Vec3 => [x1 - x2, y1 - y2, z1 - z2];

export const distance = ([x1, y1, z1]: Vec3, [x2, y2, z2]: Vec3): number => Math.hypot(x1 - x2, y1 - y2, z1 - z2);

export const setFromSphericalCoords = (radius: number, phi: number, theta: number): Vec3 => {
    const sinPhiRadius = Math.sin(phi) * radius;
    const x = sinPhiRadius * Math.sin(theta);
    const y = Math.cos(phi) * radius;
    const z = sinPhiRadius * Math.cos(theta);
    return [x, y, z];
};
