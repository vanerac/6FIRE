// i18n
import * as I18N from 'i18n';

I18N.configure({
    locales: ['fr'],
    defaultLocale: 'fr',
    directory: __dirname + '/locales',
    objectNotation: true,
    api: {
        '__': 't', // now req.__ becomes req.t
        '__n': 'tn' // and req.__n can be called as req.tn
    }
});


export default function translate(key: string, locale: string = 'fr'): string {
    return I18N.__(key, locale);
}


// Usage example
console.log(translate('error.notImplemented'))
