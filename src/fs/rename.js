import fs from "node:fs/promises";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  if (
    !(await fileExists("src/fs/files/wrongFilename.txt")) ||
    (await fileExists("src/fs/files/properFilename.md"))
  ) {
    throw new Error("FS operation failed");
  }
  await fs.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md",
    (err) => {
      console.log(err);
    }
  );
};

await rename();
