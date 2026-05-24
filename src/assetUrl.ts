const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function resolveAssetUrl(url?: string) {
  if (!url) {
    return '';
  }

  if (/^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }

  const normalizedPath = url.replace(/^\/+/, '').replace(/^portfolio\/+/, '');
  return `${BASE_URL}${normalizedPath}`;
}