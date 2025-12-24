import { summariseFile } from './summariseFile.js';

export const summariseFiles = async (files, apikey, model) => {
  let summary = '';
  
  for (const file of files) {
    summary += '\n\n';
    summary += await summariseFile(file, apikey, model);
  }
  return summary;
}
