import { listFiles } from './utils/listFiles.js';
import { requireEnv } from './utils/env.js';
import { summarise } from './summarisers/summarise.js';
import { finalSummarise } from './summarisers/summariseFullProject.js';
import { formatSummary } from './utils/formatSummary.js';

const summariseProject = async (path) => {
  const apiKey = requireEnv('GEMINI_API_KEY');
  const model = 'gemini-2.5-flash';

  const filesSummary = await summarise(path || './', apiKey, model); 

  const projectSummary = await finalSummarise(filesSummary, apiKey, model);

  const summary = formatSummary(projectSummary, filesSummary);
  console.log(summary);
}

await summariseProject(Deno.args[0]);
