const isAComment = line => line.startsWith('#');
const isEmptyLine = line => line.trim().length === 0;

export const parseBriefIgnore = (filePath) => {
  const files = Deno.readTextFileSync(filePath).split('\n');
  const ignoreList = [];

  for (const file of files) {
    // handling comments and empty lines
    if (isAComment(file) || isEmptyLine(file)) continue;

    let fileName = file;
    if (fileName.startsWith('-r')) {
      fileName = fileName.split(' ')[1];
      ignoreList.push(...parseBriefIgnore(fileName));
    }
    ignoreList.push(fileName.trim());
  }
  
  return ignoreList;
}
