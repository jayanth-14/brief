import { summariseFolder } from './summariseFolder.js';
import { summariseFile } from './summariseFile.js';

export const summarise = async (path, apiKey, model) => {

  const summariser = path.endsWith('/') ? summariseFolder : summariseFile;

  return await summariser(path, apiKey, model);
}
