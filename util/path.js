import { fileURLToPath } from 'url';
import path from 'path';

export function getPaths(metaUrl) {
    const filename = fileURLToPath(metaUrl);
    const dirname = path.dirname(filename);
    return { __filename: filename, __dirname: dirname };
}
