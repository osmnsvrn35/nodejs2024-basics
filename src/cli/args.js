const parseArgs = () => {
    const rawArgs = process.argv.slice(2);
    const formattedArgs = [];

    for (let index = 0; index < rawArgs.length; index += 2) {
        const key = rawArgs[index].replace(/^--/, ''); 
        const value = rawArgs[index + 1];
        formattedArgs.push(`${key} is ${value}`);
    }

    console.log(formattedArgs.join(', '));
};

parseArgs();
