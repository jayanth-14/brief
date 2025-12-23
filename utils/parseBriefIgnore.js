export const parseBriefIgnore = (filePath) => {
  const files = Deno.readTextFileSync(filePath).split('\n');
  const ignoreList = [];

  for (const file of files) {
    let fileName = file;
    if (fileName.startsWith('-r')) {
      fileName = fileName.split(' ')[1];
      ignoreList.concat(parseBriefIgnore(fileName));
    }
    ignoreList.push(fileName);
  }
  
  return ignoreList;
}
