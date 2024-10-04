import fs from "node:fs";

const filePath = "src/streams/files/fileToRead.txt";
const readFileStream = fs.createReadStream(filePath);

const read = async () => {
  await readFileStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString());
  });
};

await read();
