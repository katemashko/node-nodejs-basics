import fs from "fs";
import crypto from "crypto";

const filePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const hash = crypto.createHash("SHA256");
  const readStream = await fs.createReadStream(filePath);
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  readStream.on("end", () => {
    const hashHex = hash.digest("hex");
    console.log(`Hash: ${hashHex}`);
  });
};

await calculateHash();
