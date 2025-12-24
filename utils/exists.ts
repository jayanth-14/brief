export const exists = async (filePath) => {
  try {
    await Deno.lstatSync(filePath);
    return true;
  } catch {
    return false;
  }
}
