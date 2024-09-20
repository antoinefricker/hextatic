import { type Vec3 } from '../../../../hextatic/src';

export type IDemoStrategy = {
    onmouseover: (cubic: Vec3) => void;
    onmouseout: () => void;
    onmousedown: (cubic: Vec3) => void;
};
