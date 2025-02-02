/**
 * This function parses a URL from user input (with potential typos in protocols, bad copy+paste, etc.) and returns a proper URL.
 *
 * ```ts
 * parse("example.com") // "https://example.com"
 * parse("http://example.com") // "http://example.com"
 * parse("ftp://example.com") // "https://example.com"
 * parse("example.com/path") // "https://example.com/path"
 * ```
 *
 * @param url - The URL to parse.
 * @returns The parsed URL.
 */
export const parse = (url: string): string =>
  /^https?:\/{2,}/.test(url) ? singulate(url) : singulate(`https://${url.replace(/^[^\/]*\/+/, '')}`);

const singulate = (url: string) => url.replaceAll(/([^:])\/+/g, '$1/').trim();
