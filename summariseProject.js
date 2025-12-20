import { listFiles } from './utils/listFiles.js';
import { requireEnv } from './utils/env.js';
import { summariseFiles } from './summarisers/summariseFiles.js';

const summariseProject = async (path) => {
  const files = listFiles(path);
  
  const apikey = requireEnv('GEMINI_API_KEY');
  const model = 'gemini-2.5-flash';

  const filesSummary = await summariseFiles(files, apikey, model);

  console.log(filesSummary);
}

await summariseProject(Deno.args[0]);
