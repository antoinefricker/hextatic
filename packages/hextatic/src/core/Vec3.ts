export class Vec3 {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public clone(): Vec3 {
        return new Vec3(this.x, this.y, this.z);
    }

    public scale(s: number): Vec3 {
        return new Vec3(this.x * s, this.y * s, this.z * s);
    }

    public getLength(): number {
        return Math.hypot(this.x, this.y, this.z);
    }

    public setLength(len: number): Vec3 {
        return this.scale(len / this.getLength());
    }

    public add(v: Vec3): Vec3 {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    public minus(v: Vec3): Vec3 {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    static FromObj({ x, y, z }: Vec3Object): Vec3 {
        return new Vec3(x, y, z);
    }

    static FromArr([x, y, z]: number[]): Vec3 {
        return new Vec3(x, y, z);
    }

    static FromSphericalCoords(radius: number, phi: number, theta: number): Vec3 {
        const sinPhiRadius = Math.sin(phi) * radius;
        const x = sinPhiRadius * Math.sin(theta);
        const y = Math.cos(phi) * radius;
        const z = sinPhiRadius * Math.cos(theta);
        return new Vec3(x, y, z);
    }

    static Distance(v1: Vec3, v2: Vec3): number {
        const delta = v1.minus(v2);
        return (Math.abs(delta.x) + Math.abs(delta.y) + Math.abs(delta.z)) / 2;
    }

    static N = ({ x, y, z }: Vec3): Vec3 => new Vec3(x, y + 1, z - 1);

    static NE = ({ x, y, z }: Vec3): Vec3 => new Vec3(x + 1, y, z - 1);

    static SE = ({ x, y, z }: Vec3): Vec3 => new Vec3(x + 1, y - 1, z);

    static S = ({ x, y, z }: Vec3): Vec3 => new Vec3(x, y - 1, z + 1);

    static SW = ({ x, y, z }: Vec3): Vec3 => new Vec3(x - 1, y, z + 1);

    static NW = ({ x, y, z }: Vec3): Vec3 => new Vec3(x - 1, y + 1, z);

    // prettier-ignore
    static GetNeighbours = (v: Vec3): Vec3[] => [
        Vec3.N(v),
        Vec3.NE(v),
        Vec3.SE(v),
        Vec3.S(v),
        Vec3.SW(v),
        Vec3.NW(v),
    ];
}

type Vec3Object = { x: number; y: number; z: number };
