const concatPath = (oldPath, newPath) => {
  const seperator = oldPath.endsWith('/') ? '' : '/';
  return oldPath.concat(seperator, newPath);
}

export const listFiles = (directoryPath = './', files = []) => {
  const directoryContents = Deno.readDirSync(directoryPath);
  for (const content of directoryContents) {
    const path = concatPath(directoryPath, content.name);
    if (content.isFile) {
      files.push(path);
      continue;
    }
    listFiles(path, files);
  }
  return files;
}
