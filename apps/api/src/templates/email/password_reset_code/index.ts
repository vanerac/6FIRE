import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({ code, name }: { code: string; name: string }) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate.toString().replace('{{code}}', code).replace('{{name}}', name);
}
