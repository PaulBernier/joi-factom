const { isValidEcAddress,
    isValidFctAddress,
    isValidPrivateEcAddress,
    isValidPrivateFctAddress,
    isValidPublicEcAddress,
    isValidPublicFctAddress } = require('factom/src/addresses');
const { isValidIdentityKey,
    isValidPublicIdentityKey,
    isValidSecretIdentityKey } = require('factom-identity-lib/src/app/key-helpers');

module.exports = joi => ({
    base: joi.string(),
    name: 'factom',
    language: {
        identityKey: 'needs to be a valid {{type}} identity key',
        factoidAddress: 'needs to be a valid {{type}} factoid address',
        entryCreditAddress: 'needs to be a valid {{type}} entry credit address',
    },
    rules: [
        getRule(joi, 'identityKey', isValidPublicIdentityKey, isValidSecretIdentityKey, isValidIdentityKey),
        getRule(joi, 'factoidAddress', isValidPublicFctAddress, isValidPrivateFctAddress, isValidFctAddress),
        getRule(joi, 'entryCreditAddress', isValidPublicEcAddress, isValidPrivateEcAddress, isValidEcAddress)
    ]
});

function getRule(joi, name, fnPublic, fnPrivate, fnAll) {
    return {
        name,
        params: {
            type: joi.any().valid(['public', 'private', 'secret'])
        },
        validate(params, value, state, options) {
            const { type = '' } = params;

            switch (type) {
                case 'public':
                    if (!fnPublic(value)) {
                        return this.createError(`factom.${name}`, { v: value, type }, state, options);
                    }
                    break;
                case 'secret':
                case 'private':
                    if (!fnPrivate(value)) {
                        return this.createError(`factom.${name}`, { v: value, type }, state, options);
                    }
                    break;
                case '':
                    if (!fnAll(value)) {
                        return this.createError(`factom.${name}`, { v: value, type }, state, options);
                    }
                    break;
            }

            return value;
        }
    };
}