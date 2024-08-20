import { Ctx } from "../types";

interface SplashConfig {
  ctx: Ctx;
  id: string;
  x: number;
  y: number;
}

export class Splash {
  private ctx: Ctx;
  private x: number;
  private y: number;
  private size = 3;
  private fill = "#333";
  readonly id: string;

  constructor(config: SplashConfig) {
    this.ctx = config.ctx;
    this.id = config.id;
    this.x = config.x;
    this.y = config.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.fill;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {}
}
