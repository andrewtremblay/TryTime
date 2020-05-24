// @flow
import locales from './locales';

const FALLBACK_LOCALE = 'en';

function currentLocale() {
    return 'en';
}

function translate(tagRef) {
    let toRet = locales[currentLocale()][tagRef];
    if(!toRet) {
        console.error(`could not find translation for tag ${tagRef} for locale ${currentLocale()}`);
        toRet = locales[FALLBACK_LOCALE][tagRef];
    } 
    if(!toRet) {
        throw `could not find translation for tag ${tagRef} for any locale`;
    }
    return toRet;
}

const t = translate;

export { t, translate, currentLocale };