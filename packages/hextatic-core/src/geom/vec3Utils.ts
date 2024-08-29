import { type Vec3, type Vec3Object } from '../types';

export const fromObj = ({ x, y, z }: Vec3Object): Vec3 => [x, y, z];

export const clone = ([x, y, z]: Vec3): Vec3 => [x, y, z];
