/**
 * This function parses a URL from user input (with potential typos in protocols, bad copy+paste, etc.) and returns a proper URL.
 *
 * ```ts
 * parse("example.com") // "https://example.com"
 * parse("http://example.com") // "http://example.com"
 * parse("https://example.com") // "https://example.com"
 * parse("ftp://example.com") // "https://example.com"
 * parse("example.com/path") // "https://example.com/path"
 * parse("example.com/path/to/resource?query=string#fragment") // "https://example.com/path/to/resource?query=string#fragment"
 * ```
 *
 * @param url - The URL to parse.
 * @returns The parsed URL.
 */
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

/**
 * This simply exports the `parse` function as the default export.
 *
 * ```ts
 * import shurley from 'jsr:@brn/shurley@1.0.9'; // or import shurley from 'https://deno.land/x/shurley@1.0.9/mod.ts';
 *
 * const parsedUrl = shurley.parse('example.com'); // "https://example.com"
 * ```
 */
export default { parse };
