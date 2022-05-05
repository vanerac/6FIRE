import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({ name, until_retry }: { name: string; until_retry: string }) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate.toString().replace('{{name}}', name).replace('{{until_retry}}', until_retry);
}
