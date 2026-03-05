import fs from 'fs';
import path from 'path';

function checkCaseClash(dir) {
    const files = fs.readdirSync(dir);
    const lowerCaseMap = new Map();
    files.forEach(file => {
        const lower = file.toLowerCase();
        if (lowerCaseMap.has(lower)) {
            console.log(`CLASH: ${lowerCaseMap.get(lower)} vs ${file} in ${dir}`);
        }
        lowerCaseMap.set(lower, file);

        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            checkCaseClash(fullPath);
        }
    });
}

checkCaseClash('app');
checkCaseClash('components');
