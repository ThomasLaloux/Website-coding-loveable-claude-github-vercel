// Vite static execution block - runs sequentially following the library payload
CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalButtons: true
        }
    },
    categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: { enabled: false }
    },
    language: {
        default: 'auto',
        translations: {
            en: {
                consentModal: {
                    title: 'This website uses cookies',
                    description: 'Cookies are used to analyze site traffic and improve performance.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage preferences'
                },
                preferencesModal: {
                    title: 'Cookie Preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    sections: [
                        { title: 'Strictly Necessary', description: 'Essential for the site to function.', category: 'necessary' },
                        { title: 'Analytics Cookies', description: 'Helps us analyze user behavior.', category: 'analytics' }
                    ]
                },
            fr: {
                  consentModal: {
                    title: 'Ce site utilise des cookies',
                    description: 'Ces cookies sont utilisés pour analyser le trafic et améliorer les performances.',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Tout refuser',
                    showPreferencesBtn: 'Gérer les préférences'
                  },
                  preferencesModal: {
                    title: 'Préférences cookies',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Tout refuser',
                    savePreferencesBtn: 'Enregistrer',
                    sections: [
                      { title: 'Strictement nécessaires', description: 'Essentiels au fonctionnement du site.', category: 'necessary' },
                      { title: 'Cookies analytiques', description: 'Nous aident à analyser le comportement utilisateur.', category: 'analytics' }
                    ]
                  }
                }
            }
        }
    }
});
