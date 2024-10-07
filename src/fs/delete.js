import { promises as fs } from 'fs';

const remove = async () => {
    const fileToDelete = './src/modules/files/fileToRemove.txt'; 

    try {
        await fs.unlink(fileToDelete);
    } catch (err) {
     
        if (err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } 
    }
};
await remove();
