import fs from "node:fs";

const filePath = "src/streams/files/fileToWrite.txt";
const writeFileStream = fs.createWriteStream(filePath);

const write = async () => {
  await process.stdin.pipe(writeFileStream);
};

await write();
