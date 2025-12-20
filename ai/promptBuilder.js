export const promptBuilder = (fileContents) => {
  return `You are an AI file summariser.

Your task is to understand the PURPOSE of the file and summarize it concisely.

Rules:
- Write a single concise summary (1–3 sentences).
- Focus on what this file is responsible for in the project.
- Mention key functions, classes, or modules ONLY if they are central to the file’s role.
- Do NOT document every function, argument, or return value.
- Do NOT explain syntax, implementation details, or line-by-line behavior.
- Do NOT include examples or commentary.
- Do NOT reference anything outside this file.

Output format (Markdown only):

### <file name>
<your summary>

File contents:
${fileContents}
`;
};
