import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';

export const TMP_DIR = path.join(__dirname, '..', '..', '.tmp');

export function generateTmpFilename() {
  return path.join(TMP_DIR, `${generateHash()}.ts`);
}

export function generateTmpFileWithContent(content: string) {
  const filename = generateTmpFilename();
  fs.writeFileSync(filename, content);
  return filename;
}

export function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}

export function removeTmpDir() {
  rimraf.sync(TMP_DIR);
}
