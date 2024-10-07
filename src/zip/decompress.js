import fs from "node:fs";
import zlib from "node:zlib";

const inputFileArchive = "src/zip/files/archive.gz";
const outputFilePath = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourceCompressedArchive = await fs.createReadStream(inputFileArchive);
  const targetDecompressedFile = await fs.createWriteStream(outputFilePath);

  sourceCompressedArchive.pipe(gunzip).pipe(targetDecompressedFile);
};

await decompress();
