import fs from "node:fs/promises";

const folderExists = async (folderPath) => {
  try {
    await fs.access(folderPath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const copy = async () => {
  if (
    !(await folderExists("src/fs/files")) ||
    (await folderExists("src/fs/files_copy"))
  ) {
    throw new Error("FS operation failed");
  }
  await fs.cp(
    "src/fs/files",
    "src/fs/files_copy",
    { recursive: true },
    { errorOnExist: true },
    (err) => {
      console.log(err);
    }
  );
};

await copy();
