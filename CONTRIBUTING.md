## Translating guidelines

* Fork this repository first.
* Copy `src/locales/en.js` to `src/locales/<ISO lang code>.js`
* Start translating.
* Once you are finished your translation, open `src/app.js` and add your translation.
* Open a pull request and wait for it.

#### Example using french translation:

**src/locales/fr.js**
    
    var LOCALE_FR = {
      ...
    }

**src/app.js**

    var languages = ['en', 'es', fr]
    $translateProvider
      .translations('en', LOCALE_EN)
      .translations('es', LOCALE_EN)
      .translations('fr', LOCALE_FR)
      
      .registerAvailableLanguageKeys(languages, {
      'en_*': 'en',
      'es_*': 'es',
      'fr_*': 'fr,
    })
