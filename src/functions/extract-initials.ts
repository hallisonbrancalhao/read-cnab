export function extractInitials(input: string): Record<string, string[]> {
  const result = input.split("\n").reduce((acc, line) => {
    const initial = line.charAt(0);
    if (!acc[initial]) {
      acc[initial] = [];
    }
    acc[initial].push(line);
    return acc;
  }, {} as Record<string, string[]>);

  return result;
}
