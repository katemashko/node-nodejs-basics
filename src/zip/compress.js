import fs from "node:fs";
import zlib from "node:zlib";

const inputFilePath = "src/zip/files/fileToCompress.txt";
const outputFileArchive = "src/zip/files/archive.gz";

const compress = async () => {
  const gzip = zlib.createGzip();
  const sourceFile = await fs.createReadStream(inputFilePath);
  const compressedFile = await fs.createWriteStream(outputFileArchive);

  sourceFile.pipe(gzip).pipe(compressedFile);
};

await compress();
