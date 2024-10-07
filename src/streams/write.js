import {createWriteStream} from 'fs';

const write = async () => {
    const writeStream = createWriteStream('./src/streams/files/fileToWrite.txt', 'utf8');

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File writing completed.');
    });

    writeStream.on('error', (err) => {console.error(`${err.message}`);});
};

await write();
