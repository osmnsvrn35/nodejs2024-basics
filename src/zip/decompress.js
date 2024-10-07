import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';

const decompress = async () => {

    const inputFile = './src/zip/files/archive.gz';
    const outputFile = './src/zip/files/fileToCompress.txt';

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();