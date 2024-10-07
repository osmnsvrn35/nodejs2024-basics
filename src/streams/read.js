import {createReadStream} from 'fs';


const read = async () => {
    
    const ReadStream = createReadStream('./src/streams/files/fileToRead.txt', 'utf8');

    ReadStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });    


    ReadStream.on('end', () => {
        console.log('\nFile reading completed.');
    });

    ReadStream.on('error', (err) => {
        console.error(`${err.message}`);
    });
};

await read();