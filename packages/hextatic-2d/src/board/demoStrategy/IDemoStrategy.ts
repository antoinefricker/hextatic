import { type Vec3 } from '@antoinefricker/hextatic-core';

export type IDemoStrategy = {
    onmouseover: (cubic: Vec3) => void;
    onmouseout: () => void;
    onmousedown: (cubic: Vec3) => void;
};
