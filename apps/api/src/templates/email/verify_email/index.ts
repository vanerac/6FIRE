import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({ confirmation_link }: { confirmation_link: string }) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate.toString().replace('{{ confirmation_link }}', confirmation_link);
}
