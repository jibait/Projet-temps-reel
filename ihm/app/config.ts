interface Config {
    apiBaseUrl: string;
}

const config: Config = {
    apiBaseUrl: process.env.BASE_URL_SERVEUR || 'http://localhost:5000', // URL par défaut pour le serveur mock
};

export default config;
