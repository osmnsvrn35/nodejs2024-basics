import {Worker} from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numOfCores = os.cpus().length;
    const workers = [];
    const results = new Array(numOfCores).fill(null);

    for (let i = 0; i < numOfCores; i++) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url));
            worker.postMessage(10 + i);
            worker.on('message', (message) => {
                
                results[i] = message; 
                resolve();
                worker.terminate();
            });

            worker.on('error', (error) => {
                results[i] = message
                reject(error);
                worker.terminate();
            });
        
        }));
    }

    await Promise.all(workers);
    console.log(results);
};


await performCalculations();

