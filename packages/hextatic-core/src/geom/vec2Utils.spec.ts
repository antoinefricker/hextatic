import { describe, expect, it } from 'vitest';

import { type Vec2, type Vec3 } from '../types';
import * as vec2 from './vec2Utils';

describe('vec2Utils', () => {
    describe('fromObj', () => {
        it('should convert a simple object to Vec2 type', () => {
            const object = { x: 1, y: 2 };

            const vec = vec2.fromObj(object);

            expect(vec).toEqual([1, 2]);
        });
        it('should convert a complex object to Vec2 type', () => {
            const object = { x: -5, y: 2, z: 3 };

            const vec = vec2.fromObj(object);

            expect(vec).toEqual([-5, 2]);
        });
    });
    describe('clone', () => {
        it('should clone a Vec2 source', () => {
            const source: Vec2 = [1, 4];

            const clone = vec2.clone(source);

            expect(clone).toEqual([1, 4]);
        });
        it('should clone a Vec3 source', () => {
            const source: Vec3 = [1, 4, 4];

            const clone = vec2.clone(source);

            expect(clone).toEqual([1, 4]);
        });
        it('should preserve source value', () => {
            const source: Vec2 = [1, 4];

            const clone = vec2.clone(source);
            clone[1] = 6;

            expect(source).toEqual([1, 4]);
        });
    });
    describe('scale', () => {
        it('should scale a Vec2', () => {
            const source: Vec2 = [1, 4];

            const scaled = vec2.scale(source, 2);

            expect(scaled).toEqual([2, 8]);
        });
    });
    describe('getLength', () => {
        it('should compute Vec2 length', () => {
            const source: Vec2 = [3, 4];

            const len = vec2.getLength(source);

            expect(len).toEqual(5);
        });
    });
    describe('setLength', () => {
        it('should modify Vec2 length', () => {
            const source: Vec2 = [3, 4];

            const scaled = vec2.setLength(source, 10);

            expect(scaled).toEqual([6, 8]);
        });
    });
    describe('add', () => {
        it('should add two Vec2 objects', () => {
            const a: Vec2 = [1, 2];
            const b: Vec2 = [-3, 4];

            const result = vec2.add(a, b);

            expect(result).toEqual([-2, 6]);
        });
    });
    describe('minus', () => {
        it('should substract two Vec2 objects', () => {
            const a: Vec2 = [1, 2];
            const b: Vec2 = [-3, 4];

            const result = vec2.minus(a, b);

            expect(result).toEqual([4, -2]);
        });
    });
    describe('distance', () => {
        it('should compute the distance between two Vec2 objects', () => {
            const a: Vec2 = [8, 4];
            const b: Vec2 = [5, 0];

            const distance = vec2.distance(a, b);

            expect(distance).toEqual(5);
        });
    });
});
