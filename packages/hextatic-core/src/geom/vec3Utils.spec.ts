import { describe, expect, it } from 'vitest';

import { type Vec3 } from '../types';
import * as vec3 from './vec3Utils';

describe('vec3Utils', () => {
    describe('fromObj', () => {
        it('should convert a simple object to Vec3 type', () => {
            const object = { x: 1, y: 2, z: 3 };

            const vec = vec3.fromObj(object);

            expect(vec).toEqual([1, 2, 3]);
        });
        it('should convert a complex object to Vec3 type', () => {
            const object = { x: 1, y: 2, z: 3, other: 'four' };

            const vec = vec3.fromObj(object);

            expect(vec).toEqual([1, 2, 3]);
        });
    });
    describe('clone', () => {
        it('should clone a Vec3 source', () => {
            const source: Vec3 = [1, 4, 2];

            const clone = vec3.clone(source);

            expect(clone).toEqual([1, 4, 2]);
        });
        it('should preserve source value', () => {
            const source: Vec3 = [1, 4, 2];

            const clone = vec3.clone(source);
            clone[1] = 6;

            expect(source).toEqual([1, 4]);
        });
    });
});
