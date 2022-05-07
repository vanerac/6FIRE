import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({ name, date }: { name: string; date: string }) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate.toString().replace('{{name}}', name).replace('{{date}}', date);
}
