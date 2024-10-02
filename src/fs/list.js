import fs from "node:fs/promises";

const folderExists = async () => {
  try {
    await fs.access("src/fs/files", fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const list = async () => {
  if (!(await folderExists("src/fs/files"))) {
    throw new Error("FS operation failed");
  }
  const arrayOfFiles = await fs.readdir("src/fs/files");
  for (const file of arrayOfFiles) console.log(file);
};

await list();
