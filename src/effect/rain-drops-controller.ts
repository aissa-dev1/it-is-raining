import { Ctx } from "../types";
import { Board } from "./board";
import { RainDrop } from "./rain-drop";
import { SplashController } from "./splash-controller";

interface RainDropsControllerConfig {
  ctx: Ctx;
  board: Board;
}

export class RainDropsController {
  private ctx: Ctx;
  private board: Board;
  private list = new Array<RainDrop>();
  private rainDropGenDuration = 50;
  private splashController: SplashController;

  constructor(config: RainDropsControllerConfig) {
    this.ctx = config.ctx;
    this.board = config.board;
    this.splashController = new SplashController({
      ctx: this.ctx,
      splashDuration: 1500,
    });
  }

  init() {
    setInterval(() => {
      this.genRandomRainDrop();
    }, this.rainDropGenDuration);
  }

  draw() {
    for (const rainDrop of this.list) {
      rainDrop.draw();
    }
    this.splashController.draw();
  }

  update() {
    this.updateOutRainDrops();
    for (const rainDrop of this.list) {
      rainDrop.update();
    }
    this.splashController.update();
  }

  private genRandomRainDrop() {
    this.list.push(
      new RainDrop({
        ctx: this.ctx,
        x: Math.floor(Math.random() * this.board.width),
        y: 0,
      })
    );
  }

  private updateOutRainDrops() {
    for (let i = 0; i < this.list.length; i++) {
      const rainDrop = this.list[i];

      if (rainDrop.y > this.board.height - rainDrop.size) {
        this.list.splice(i, 1);
        this.splashController.genSplash(rainDrop.x, rainDrop.y);
      }
    }
  }
}
