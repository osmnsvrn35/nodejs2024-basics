import {promises as fs} from 'fs';
import {join} from 'path';

const rename = async () => {
    const path = './src/modules/files'; 
    const wrongName = join(path, 'wrongFilename.txt');  
    const properName = join(path, 'properFilename.md'); 

    try {
        
        await fs.stat(properName);
        throw new Error("FS operation failed");
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    try {
       
        await fs.rename(wrongName, properName);
        
    } catch (err) {
        if (err.code === 'ENOENT') {
            
            throw new Error("FS operation failed");
        }
    }
};

await rename();
