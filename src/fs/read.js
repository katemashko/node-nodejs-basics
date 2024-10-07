import fs from "node:fs/promises";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const read = async () => {
  if (!(await fileExists("src/fs/files/fileToRead.txt"))) {
    throw new Error("FS operation failed");
  }
  const data = await fs.readFile("src/fs/files/fileToRead.txt", {
    encoding: "utf-8",
  });
  console.log(data);
};

await read();
