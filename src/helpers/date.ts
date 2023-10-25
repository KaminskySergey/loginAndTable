export function formatDate(dateString: string) {
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const fullYear = year < 100 ? 2000 + year : year;
    return `${month}-${day}-${fullYear}`;
  }
  return dateString;
}
