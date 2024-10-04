const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsOutputArray = [];

  for (let index = 0; index < args.length; index += 2) {
    const key = args[index].replace("--", "");
    const value = args[index + 1];
    argsOutputArray.push(`${key} is ${value}`);
  }
  console.log(argsOutputArray.join(", "));
};

parseArgs();
