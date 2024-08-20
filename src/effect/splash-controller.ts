import { Ctx } from "../types";
import { generateRandomId } from "../utils/generate-random-id";
import { Splash } from "./splash";

interface SplashControllerConfig {
  ctx: Ctx;
  splashDuration: number;
}

export class SplashController {
  private ctx: Ctx;
  private list = new Array<Splash>();
  private splashDuration: number;

  constructor(config: SplashControllerConfig) {
    this.ctx = config.ctx;
    this.splashDuration = config.splashDuration;
  }

  draw() {
    for (const rainDrop of this.list) {
      rainDrop.draw();
    }
  }

  update() {
    for (const rainDrop of this.list) {
      rainDrop.update();
    }
  }

  genSplash(x: number, y: number) {
    const splash = new Splash({
      ctx: this.ctx,
      id: generateRandomId(10),
      x,
      y,
    });
    this.list.push(splash);
    setTimeout(() => {
      this.list = this.list.filter((s) => s.id !== splash.id);
    }, this.splashDuration);
  }
}
