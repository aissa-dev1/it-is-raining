import { Ctx } from "../types";

interface RainDropConfig {
  ctx: Ctx;
  x: number;
  y: number;
}

export class RainDrop {
  private ctx: Ctx;
  private _x: number;
  private _y: number;
  private fill = "rgba(0, 0, 255, 0.5)";
  private speed = 7;
  readonly size = 3;

  constructor(config: RainDropConfig) {
    this.ctx = config.ctx;
    this._x = config.x;
    this._y = config.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.fill;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, 0);
    this.ctx.lineTo(this.x, this.y - this.size);
    this.ctx.strokeStyle = "#f1f4f9";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  update() {
    this._y += this.speed;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
}
