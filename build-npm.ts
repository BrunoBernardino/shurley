import { build, emptyDir } from 'jsr:@deno/dnt@0.41.3';

await emptyDir('./npm');

const version = JSON.parse(Deno.readTextFileSync('./deno.json')).version;

const gitTag = new Deno.Command('git', { args: ['tag', version] });

await gitTag.spawn().status;

await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: true,
  },
  package: {
    name: 'shurley',
    version,
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
