// Wait for Vite app and library to load completely
window.addEventListener('load', () => {
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
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: 'We use cookies',
                        description: 'We use cookies to analyze site traffic and improve performance.',
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
                    }
                }
            }
        }
    });
});
