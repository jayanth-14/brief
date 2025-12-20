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

export const finalPrompBuilder = (summaries) => {
  return `You are an AI Project Summariser.

Your task is to synthesize the file level summaries and provide a high level summary for the whole project.

Input format(**always in this format**):
`filename : <filePath> \n <file summary>`

Rules:
- DO NOT assume that they are raw files.
- Synthesize summaries across files by merging duplicate responsibilities into a single responsibility.
- Infer relationships from the summaries only.
- Use *declarative language*.
- Use short labeled paragraphs.
- If information is not provided, omit the section instead of guessing.
- Input order has no semantic order.
- treat each summary individually.
- **The summary must be self-contained.**
  
Constraints:
- No guessing beyond the summaries.
- Do not hedge.
- Do not use any uncertainty language.
- Do not provide any suggestions or improvements.
- Do not reference files which are not listed.
- Do not add any new components.
- No repetition or duplications.
  
  
Output should follow this section order. Omit sections with no information. Include labels and headings:
- Kind of project.
- What problem of it is solving.
- Major components
- Key control points such as entry, orchestration.
- Constraints - like env, tooling, api usage, etc

Summaries :
${summaries}
`;
}
