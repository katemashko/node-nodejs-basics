import fs from "node:fs";
import zlib from "node:zlib";

const inputFileArchive = "src/zip/files/archive.gz";
const outputFilePath = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourceFile = await fs.createReadStream(inputFileArchive);
  const destinationFile = await fs.createWriteStream(outputFilePath);

  sourceFile.pipe(gunzip).pipe(destinationFile);
};

await decompress();
