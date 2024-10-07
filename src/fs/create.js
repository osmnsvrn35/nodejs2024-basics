import {promises as fs} from 'fs';

const createFile = async () => {
    const filePath = './src/modules/files/fresh.txt';
    const content = 'I am fresh and young';
    try {
        
        await fs.writeFile(filePath, content,{ flag: 'wx' });
        
    } catch (err) {
       
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } 
    }
};

await createFile();
