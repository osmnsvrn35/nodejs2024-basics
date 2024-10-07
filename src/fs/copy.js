import {promises as fs} from 'fs';
import {join} from 'path';

const copy = async () => {
    
    const src = './src/modules/files'; 
    const dst = './src/modules/files_copy'; 

    try{
        await fs.stat(src);
    }
    catch(err){
        throw new Error("FS operation failed");
    }


    try {
        
        await fs.mkdir(dst);
    } 
    catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }


    const files = await fs.readdir(src);
    for(const item of files){
        const srcPath = join(src, item);
        const destPath = join(dst, item);
        await fs.copyFile(srcPath,destPath);
    }
};

await copy();
