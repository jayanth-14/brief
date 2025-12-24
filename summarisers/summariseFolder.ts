import { listFiles } from '../utils/listFiles.js';
import { summariseFiles } from './summariseFiles.js';

export const summariseFolder = async (path, apiKey, model) => {

  const files = listFiles(path);

  const filesSummary = await summariseFiles(files, apiKey, model);

  return filesSummary;
}
