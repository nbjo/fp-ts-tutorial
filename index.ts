// import './chapter-1.0/2-pipe-into-3-functions';
import { pipe, flow } from "fp-ts/function";

const trim = (s: string) => s.trim();

const size = (s: string) => s.length;

const isAtLeast3 = (n: number) => n >= 3;

const isLongEnough: (s: string) => boolean = flow(trim, size, isAtLeast3); // (s: string) => boolean

// isLongEnough("hello"); // true

const pipeResult: boolean = pipe(
  " hi42 ",
  trim, // 'hi'
  size, // 2
  isAtLeast3 // false
); // false

console.log("b = " + pipeResult);
console.log("isLongEnough(' hi ') = " + isLongEnough(" hi "));
