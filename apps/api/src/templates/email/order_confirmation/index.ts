import * as fs from 'fs';
import * as path from 'path';

export function generateEmail({
    name,
    orderDate,
    subscription,
    price,
    refresh,
    email,
}: {
    name: string;
    orderDate: string;
    subscription: string;
    price: string;
    refresh: string;
    email: string;
}) {
    // read file email.html
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.html'));

    // replace all placeholders
    return emailTemplate
        .toString()
        .replace('{{name}}', name)
        .replace('{{orderDate}}', orderDate)
        .replace('{{subscription}}', subscription)
        .replace('{{price}}', price)
        .replace('{{refresh}}', refresh)
        .replace('{{email}}', email);
}
