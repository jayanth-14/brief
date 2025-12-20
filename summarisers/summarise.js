import { summariseFolder } from './summariseFolder.js';
import { summariseFile } from './summariseFile.js';

export const summarise = (path) => {

  const summariser = path.endsWith('/') ? summariseFolder : summariseFile;

  return summariser(path);
}
