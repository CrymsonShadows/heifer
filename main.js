import { say } from "cowsay";
import { moo } from "./moo.js";

let name = "cow";
console.log(say({ text: moo(name) }));
