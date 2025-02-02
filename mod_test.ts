import { assertEquals } from 'jsr:@std/assert@1.0.8';

import shurley from './mod.ts';

Deno.test('that .parse() works', () => {
  const tests: { url: string; expected: string }[] = [
    { url: 'example.com', expected: 'https://example.com' },
    { url: '/example.com', expected: 'https://example.com' },
    { url: '//example.com', expected: 'https://example.com' },
    { url: '///example.com', expected: 'https://example.com' },
    {
      url: 'user:pass@example.com',
      expected: 'https://user:pass@example.com',
    },
    { url: 'http:/example.com', expected: 'https://example.com' },
    { url: 'http:/example.com', expected: 'https://example.com' },
    { url: 'ftp:/example.com', expected: 'https://example.com' },
    { url: 'ftp://example.com', expected: 'https://example.com' },
    { url: 'httpss:/example.com', expected: 'https://example.com' },
    { url: 'httpss:///example.com', expected: 'https://example.com' },
    { url: 'https://example.com ', expected: 'https://example.com' },
    { url: ' https://example.com ', expected: 'https://example.com' },
    { url: 'http://example.com', expected: 'http://example.com' },
    { url: 'https://example.com', expected: 'https://example.com' },
    { url: 'https://example.com/', expected: 'https://example.com/' },
    { url: 'https://example.com/something', expected: 'https://example.com/something' },
    { url: 'git:example.com', expected: 'https://git:example.com' },
    { url: 'https://example.com/?something=true', expected: 'https://example.com/?something=true' },
    {
      url: 'https://example.com/something?something=true#yeah',
      expected: 'https://example.com/something?something=true#yeah',
    },
  ];

  for (const test of tests) {
    const parsedUrl = shurley.parse(test.url);
    assertEquals(parsedUrl, test.expected);
  }
});
