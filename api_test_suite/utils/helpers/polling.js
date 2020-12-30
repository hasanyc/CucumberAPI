export const poll = async ({
    fn, validate, interval = 5000, maxAttempts = 10, retryFn,
}) => {
    let attempts = 0;
    const executePoll = async (resolve, reject) => {
        const result = await fn();
        attempts += 1;
        if (validate(result)) {
            resolve(result);
        } else if (maxAttempts && attempts === maxAttempts) {
            console.log(`Attempt number: ${attempts}`);
            return reject(new Error('Exceeded Max Attempts'));
        } else {
            console.log(`Attempt number: ${attempts}`);
            if (retryFn) {
                await Promise.resolve(retryFn);
            }
            setTimeout(executePoll, interval, resolve, reject);
        }
    };

    return new Promise(executePoll);
};
