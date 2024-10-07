import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    const inputFile = './src/zip/files/fileToCompress.txt';
    const outputFile = './src/zip/files/archive.gz';

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream); 
  
};


await compress();