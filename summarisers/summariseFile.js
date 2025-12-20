import { callGemini } from '../ai/geminiClient.js';
import { promptBuilder } from '../ai/promptBuilder.js';

export const summariseFile = async (file, apiKey, model) => {

  const contents = Deno.readTextFileSync(file);
  
  const fileName = `filename : ${file} \n\n`;

  const summariserPrompt = promptBuilder(fileName + contents);

  const summary = await callGemini({
    apiKey,
    model,
    prompt : summariserPrompt,
  });

  return summary;
}
