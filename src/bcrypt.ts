const bcrypt = require('bcrypt');

export const genHash = (text: string, saltRounds: number = 10) => (
    new Promise((resolve, reject) => {
        bcrypt.hash(text, saltRounds, (err: any, hash: string) => {
            if (err) {
                reject(err)
            }

            resolve(hash)
        });
    })
);

export const compare = (plain: string, encrypted: string) => (
    new Promise(async(resolve, reject) => {
        const isEqual = await bcrypt.compare(plain, encrypted).catch((err: any) => {
            reject(err);
        });
        resolve(isEqual);
    })
);
