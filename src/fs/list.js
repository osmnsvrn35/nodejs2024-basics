import { promises as fs } from 'fs';

const list = async () => {
    const directoryPath = './src/modules/files';

    try {
       
        const files = await fs.readdir(directoryPath);
        console.log(files);

    } catch (err) {
 
        if (err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } 
    }
};

await list();