const devKeys = require('./key.dev') || {};

export const keys = {
    apiKey: '',
    ...devKeys.keys,
};
