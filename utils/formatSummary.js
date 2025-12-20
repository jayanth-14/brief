export const formatSummary = (projectSummary, filesSummary) => {
  return `=== PROJECT SUMMARY (AI-generated) ===
${projectSummary}

=== FILE CONTEXT (AI-generated, per file) ===
${filesSummary}
`;
};
