import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === '.next' || file === '.git') return;
        const fullPath = path.resolve(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (file.toLowerCase().includes('error')) results.push(fullPath);
            results = results.concat(walk(fullPath));
        } else {
            if (file.toLowerCase().includes('error')) results.push(fullPath);
        }
    });
    return results;
}

const rootDir = path.resolve('.');
console.log(walk(rootDir));
