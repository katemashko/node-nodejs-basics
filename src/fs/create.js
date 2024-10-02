import fs from "node:fs/promises";

const ifFileExists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const create = async () => {
  if (await ifFileExists("src/fs/files/fresh.txt")) {
    throw new Error("FS operation failed");
  }
  const content = "I am fresh and young";
  await fs.writeFile("src/fs/files/fresh.txt", content);
};

await create();
