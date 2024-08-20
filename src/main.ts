import { Board } from "./effect/board";
import { EffectManager } from "./effect/effect-manager";
import "./style.css";
import { Canvas } from "./types";

const canvas = document.querySelector<Canvas>("#main_canvas")!;
const ctx = canvas.getContext("2d")!;

const board = new Board({
  canvas,
  width: 420,
  height: 800,
  fill: "#fff",
});

const effectManager = new EffectManager({
  board,
  ctx,
});

document.addEventListener("DOMContentLoaded", () => {
  effectManager.init();
});
