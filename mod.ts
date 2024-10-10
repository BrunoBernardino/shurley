export const parse = (url: string): string => {
  const parsedUrl = url.trim();

  // Sometimes people get it right
  if (parsedUrl.startsWith('http://') || url.startsWith('https://')) {
    return parsedUrl;
  }

  // Replace all the first "/"'s with "https://"
  if (parsedUrl.startsWith('/')) {
    const pattern = /^(\/+)(.*)/;
    return parsedUrl.replace(pattern, 'https://$2');
  }

  // Replace anything before ":/" with https
  if (parsedUrl.includes(':/')) {
    const pattern = /(.*)(:\/+)(.*)/;
    return parsedUrl.replace(pattern, 'https://$3');
  }

  return `https://${parsedUrl}`;
};

export default { parse };
