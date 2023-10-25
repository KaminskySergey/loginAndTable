export function extractNumbersFromUrl(url: string) {
  const match = url.match(/limit=(\d+)&offset=(\d+)/);
  if (match) {
    const limit = parseInt(match[1], 10);
    const offset = parseInt(match[2], 10);
    return { limit, offset };
  }
  return null;
}
