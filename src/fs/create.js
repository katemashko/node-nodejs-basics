import fs from "node:fs/promises";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const create = async () => {
  if (await fileExists("src/fs/files/fresh.txt")) {
    throw new Error("FS operation failed");
  }
  const content = "I am fresh and young";
  await fs.writeFile("src/fs/files/fresh.txt", content);
};

await create();
