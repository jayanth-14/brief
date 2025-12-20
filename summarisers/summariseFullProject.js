import { finalPromptBuilder } from '../ai/promptBuilder.js';
import { callGemini } from '../ai/geminiClient.js';

export finalSummarise = async (summaries, apiKey, model) => {

  const finalPrompt = finalPromptBuilder(summaries);

  const summary = await callGemini({
    prompt : finalPrompt,
    apiKey,
    model
  });

  return summary;
}
