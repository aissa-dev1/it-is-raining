import { Canvas } from "../types";

interface BoardConfig {
  canvas: Canvas;
  width: number;
  height: number;
  fill: string;
}

export class Board {
  private canvas: Canvas;
  private fill: string;
  readonly width: number;
  readonly height: number;

  constructor(config: BoardConfig) {
    this.canvas = config.canvas;
    this.width = config.width;
    this.height = config.height;
    this.fill = config.fill;
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.backgroundColor = this.fill;
    this.canvas.style.position = "absolute";
    this.canvas.style.top = "50%";
    this.canvas.style.left = "50%";
    this.canvas.style.transform = "translate(-50%, -50%)";
  }
}
