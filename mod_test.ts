import { assertEquals } from 'https://deno.land/std@0.168.0/testing/asserts.ts';

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
  ];

  for (const test of tests) {
    const parsedUrl = shurley.parse(test.url);
    assertEquals(parsedUrl, test.expected, `Failed test for "${test.url}" (got "${parsedUrl}").`);
  }
});
