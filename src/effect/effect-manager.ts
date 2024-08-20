import { Canvas, Ctx } from "../types";
import { Board } from "./board";
import { RainDropsController } from "./rain-drops-controller";

interface EffectManagerConfig {
  board: Board;
  ctx: Ctx;
}

export class EffectManager {
  private board: Board;
  private ctx: Ctx;
  private canvas: Canvas;
  private rainDropsController: RainDropsController;

  constructor(config: EffectManagerConfig) {
    this.board = config.board;
    this.ctx = config.ctx;
    this.canvas = this.ctx.canvas;
    this.rainDropsController = new RainDropsController({
      ctx: this.ctx,
      board: this.board,
    });
  }

  init() {
    this.board.init();
    this.rainDropsController.init();
    this.animate();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.rainDropsController.draw();
  }

  private update() {
    this.rainDropsController.update();
  }

  private animate() {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.animate());
  }
}
