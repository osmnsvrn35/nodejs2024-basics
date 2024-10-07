import { promises as fs } from 'fs';

const read = async () => {
    const filePath = './src/modules/files/fileToRead.txt'; 

    try {
        const content = await fs.readFile(filePath,'utf-8');
        console.log(content); 
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        }
    }
};
await read();
