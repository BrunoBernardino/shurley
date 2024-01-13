import { build, emptyDir } from 'https://deno.land/x/dnt@0.39.0/mod.ts';

await emptyDir('./npm');

await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: true,
  },
  package: {
    name: 'shurley',
    version: Deno.args[0],
    description: 'Validate or fix URLs from user input. People make mistakes!',
    license: 'ISC',
    author: 'Bruno Bernardino <me@brunobernardino.com>',
    keywords: [
      'url',
      'fix',
      'parser',
      'fixer',
      'validator',
      'lax',
      'user-input',
      'url-parser',
      'url-fixer',
      'url-lax-parser',
    ],
    repository: {
      type: 'git',
      url: 'git+https://github.com/BrunoBernardino/shurley.git',
    },
    bugs: {
      url: 'https://github.com/BrunoBernardino/shurley/issues',
    },
  },
});

Deno.copyFileSync('README.md', 'npm/README.md');
