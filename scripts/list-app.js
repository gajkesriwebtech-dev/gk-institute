import fs from 'fs';
import path from 'path';

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.resolve(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            console.log('DIR: ' + fullPath);
            walk(fullPath);
        } else {
            console.log('FILE: ' + fullPath);
        }
    });
}

const appDir = path.resolve('app');
walk(appDir);
