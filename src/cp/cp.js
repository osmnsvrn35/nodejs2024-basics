import {spawn} from 'child_process';
const spawnChildProcess = async (args) => {

    const child = spawn('node', ['./src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (msg) => {
        console.log(`Message from Child: ${msg.toString()}`);
    });
};

spawnChildProcess(['arg1','arg2']);
