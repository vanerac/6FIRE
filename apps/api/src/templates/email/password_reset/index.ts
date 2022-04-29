import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({ reset_link, email }: { reset_link: string; email: string }) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate.toString().replace('{{reset_link}}', reset_link).replace('{{email}}', email);
}
