import fs from "node:fs";
import { Transform } from "stream";

const reverseTransform = new Transform({
  transform: function (chunk, encoding, cb) {
    const reversed = chunk.toString().split("").reverse().join("");
    cb(null, reversed);
  },
});
const transform = async () => {
  await process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
