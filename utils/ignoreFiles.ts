const ignoreFolders = {
  '.git' : '',
  'node_modules' : '',
  'dist' : '',
  'build' : '',
}

const ignoreFiles = ['.log', '.lock', 'DS_Store'];

export const shouldIgnore = (fileName) => fileName in ignoreFolders || ignoreFiles.some(f => fileName.endsWith(f));
