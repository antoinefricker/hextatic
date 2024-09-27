import { Hex, HexGrid, HexGridGenerator, Vec2, type Vec3 } from '@hextatic/hextatic';
import { Container, Graphics } from 'pixi.js';

import { CubicCoordsAxis } from '../debug/CubicCoordsAxis';
import { DemoSelector } from '../demo/DemoSelector';
import { DemoStrategy } from '../demo/DemoStrategy';
import { Tile } from './Tile';

export class Board extends Container {
    private _axis: CubicCoordsAxis;
    private _map: Container;
    private _mapArea: Graphics;
    private _demoSelector: DemoSelector;

    private _radius: number = 36;
    private _demoStrategy: DemoStrategy;
    private _grid: HexGrid;
    private _tiles: Tile[];

    constructor() {
        super();

        this._grid = HexGridGenerator.GenerateHexBoard(7);

        this._demoStrategy = new DemoStrategy();

        this._build();
        this.redraw();
    }

    public get radius(): number {
        return this._radius;
    }

    public get grid(): HexGrid {
        return this._grid;
    }

    public get axis(): CubicCoordsAxis {
        return this._axis;
    }

    public get tiles(): Tile[] {
        return this._tiles;
    }

    public get demoStrategy(): DemoStrategy {
        return this._demoStrategy;
    }

    private _build(): void {
        this._mapArea = new Graphics();
        this._mapArea.position.set(MAP_MARGIN.x, MAP_MARGIN.y);
        this.addChild(this._mapArea);

        this._map = new Container();
        this._map.position.set(MAP_MARGIN.x, MAP_MARGIN.y);
        this.addChild(this._map);

        this._tiles = [];
        this._grid.coords.forEach((coords) => {
            const tile = new Tile(coords, this._radius);
            tile.interactive = true;
            tile.on('mouseover', () => this._demoStrategy.onmouseover(tile));
            tile.on('mouseout', () => this._demoStrategy.onmouseout());
            tile.on('mousedown', () => this._demoStrategy.onmousedown(tile));
            this._map.addChild(tile);
            this._tiles.push(tile);
        });

        this._axis = new CubicCoordsAxis();
        this._axis.position.set(MAP_MARGIN.x + 90, 80);
        this.addChild(this._axis);

        this._demoSelector = new DemoSelector(this);
        this.addChild(this._demoSelector);
    }

    public redraw(): void {
        const gridRect = HexGrid.GetSize(this._grid, this._radius);

        this._mapArea.clear();
        this._mapArea.rect(0, 0, gridRect.size.x, gridRect.size.y);
        this._mapArea.setStrokeStyle({ color: 0x712c75 });
        this._mapArea.stroke();

        this._demoSelector.position.set(gridRect.size.x + 2 * MAP_MARGIN.x, MAP_MARGIN.y);

        this._grid.coords.forEach((coords, index) => {
            const { x, y } = this._getTilePosition(coords);

            const tile: Tile = this._tiles[index];
            tile.coords = coords;
            tile.position.set(x, y);
            tile.redraw();
        });
    }

    private _getTilePosition(cubicCoords: Vec3): Vec2 {
        const hexSize = Hex.GetSize(this._radius);
        const hexSpacing = Hex.GetSpacing(this._radius);
        hexSpacing.y *= 0.5;

        const d2Coords = this._cubicToGrid(cubicCoords.add(this._grid.origin));
        const position = d2Coords.multiply(hexSpacing);
        const offset = hexSize.scale(0.5);
        return position.add(offset);
    }

    private _cubicToGrid = ({ x, y, z }: Vec3): Vec2 => new Vec2(x, z - y);
}

const MAP_MARGIN = new Vec2(20, 20);
