// Lists every open TODO and placeholder. Run `npm run todos` before pushing.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PATTERN = /TODO\(|\[PRODUCT NAME\]/;
const roots = ['src', 'index.html', 'privacy/index.html', 'terms/index.html'];
const hits = [];

const walk = (path) => {
  if (statSync(path).isDirectory()) return readdirSync(path).forEach((f) => walk(join(path, f)));
  readFileSync(path, 'utf8').split('\n').forEach((line, i) => {
    if (PATTERN.test(line)) hits.push(`${path}:${i + 1}  ${line.trim()}`);
  });
};
roots.forEach(walk);

console.log(hits.length ? hits.join('\n') : 'No open TODOs.');
process.exitCode = hits.length ? 1 : 0;
