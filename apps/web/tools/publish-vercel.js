import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const webRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(webRoot, 'dist');
const repoPublic = resolve(webRoot, '../../public');
const webPublic = resolve(webRoot, 'public');

if (!existsSync(dist)) {
	console.error('Vite dist/ is missing');
	process.exit(1);
}

rmSync(repoPublic, { recursive: true, force: true });
mkdirSync(repoPublic, { recursive: true });
cpSync(dist, repoPublic, { recursive: true });

mkdirSync(webPublic, { recursive: true });
cpSync(resolve(dist, 'index.html'), resolve(webPublic, 'index.html'));
if (existsSync(resolve(dist, 'assets'))) {
	rmSync(resolve(webPublic, 'assets'), { recursive: true, force: true });
	cpSync(resolve(dist, 'assets'), resolve(webPublic, 'assets'), { recursive: true });
}
