const parseEnv = () => {
  const rssEnv = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key} = ${value}`)
    .join("; ");

  console.log(rssEnv);
};

parseEnv();
