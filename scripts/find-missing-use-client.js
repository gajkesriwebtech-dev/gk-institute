import fs from 'fs';
import path from 'path';

function walk(dir, results = []) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, results);
        } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const hasHook = /useContext|useTheme|useAuth|useState|useEffect|useRouter|usePathname|useSearchParams/.test(content);
            const hasUseClient = /"use client"|'use client'/.test(content);
            if (hasHook && !hasUseClient) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const appDir = path.resolve('app');
console.log(walk(appDir));
