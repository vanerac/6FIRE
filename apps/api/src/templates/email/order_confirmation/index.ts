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

    let r;
    if (refresh === '30') {
        r = 'mois';
    } else {
        r = 'jours';
    }

    console.log('date', orderDate);

    console.log('email', emailTemplate);

    // replace all placeholders
    return emailTemplate
        .toString()
        .replace('{{name}}', name)
        .replace('{{order_date}}', orderDate)
        .replace('{{subscription}}', subscription)
        .replace('{{price}}', price)
        .replace('{{refresh}}', r)
        .replace('{{email}}', email);
}
