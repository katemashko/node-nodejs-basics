import fs from "node:fs/promises";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const remove = async () => {
  if (!(await fileExists("src/fs/files/fileToRemove.txt"))) {
    throw new Error("FS operation failed");
  }
  await fs.unlink("src/fs/files/fileToRemove.txt");
};

await remove();
