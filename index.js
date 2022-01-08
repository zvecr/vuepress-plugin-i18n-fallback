// Copyright 2022 Joel Challis
// SPDX-License-Identifier: MIT

module.exports = (options = {}, ctx) => ({
    name: 'vuepress-plugin-i18n-fallback',

    async additionalPages(app) {
        if (!app.siteConfig.locales) {
            console.log(`WARNING: i18n not configured`);
            return [];
        }

        const default_locale = '/';

        // Ignore the "default" locale 
        const locales = Object.keys(app.siteConfig.locales).filter(e => e !== default_locale);

        // Collect all pages by locale
        let locale_pages = Object.fromEntries(Object.entries(app.siteConfig.locales).map(([k, v]) => [k, {}]))
        app.pages.forEach(page => {
            locale_pages[page._localePath][page.path] = { path: page.relativePath };
        });

        // For every default page that does not have a translation
        //   Map a fallback to the default locale
        let fallback_pages = [];
        Object.entries(locale_pages[default_locale]).forEach(([page, { path }]) => {
            locales.forEach(locale => {
                const fallback_file = app.sourceDir + default_locale + path;
                const fallback_path = locale + page.substring(1);
                if (!locale_pages[locale].hasOwnProperty(fallback_path)) {
                    console.log(`Adding i18n fallback: ${locale}${path} -> ${default_locale}${path}`);
                    fallback_pages.push({
                        "path": fallback_path,
                        "filePath": fallback_file
                    });
                }
            });
        });

        return fallback_pages;
    }
});
