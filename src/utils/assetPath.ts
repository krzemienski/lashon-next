export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // In production, prepend the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/lashon-next' : '';
  return `${basePath}/${cleanPath}`;
}
