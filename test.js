const assert = require('assert');

const shurley = require('./index.js');

describe('shurley.parse()', () => {
  it('should parse URLs as expected', () => {
    const tests = [
      { url: '/example.com', expected: 'https://example.com' },
      { url: 'example.com', expected: 'https://example.com' },
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
    ];

    for (const test of tests) {
      const parsedUrl = shurley.parse(test.url);
      assert.equal(parsedUrl, test.expected, `Failed test for "${test.url}".`);
    }
  });
});
