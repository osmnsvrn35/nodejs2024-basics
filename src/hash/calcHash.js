import {createReadStream} from 'fs';
import {createHash} from 'crypto';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const calculateHash = async () => {
    const targetFilePath = resolve(currentDir, './files/fileToCalculateHashFor.txt');
    const sha256 = createHash('sha256');
    const fileStream = createReadStream(targetFilePath);

    fileStream.on('data', (chunk) => {
        sha256.update(chunk);
    });
    fileStream.on('end', () => {
        console.log(sha256.digest('hex'));
    });
  
};

await calculateHash();
