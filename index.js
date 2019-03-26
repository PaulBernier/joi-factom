const {
    isValidEcAddress,
    isValidFctAddress,
    isValidPrivateEcAddress,
    isValidPrivateFctAddress,
    isValidPublicEcAddress,
    isValidPublicFctAddress
} = require('factom/src/addresses');
const {
    isValidIdentityKey,
    isValidPublicIdentityKey,
    isValidSecretIdentityKey
} = require('factom-identity-lib/src/app/key-helpers');
const serverKey = require('factom-identity-lib/src/server/validation');

module.exports = joi => ({
    base: joi.string(),
    name: 'factom',
    language: {
        identityKey: 'needs to be a valid {{type}} identity key',
        factoidAddress: 'needs to be a valid {{type}} factoid address',
        entryCreditAddress: 'needs to be a valid {{type}} entry credit address',
        serverIdentityKey:
            'needs to be a valid {{type}} server identity key of priority [{{priority}}]'
    },
    rules: [
        getRule(
            joi,
            'identityKey',
            isValidPublicIdentityKey,
            isValidSecretIdentityKey,
            isValidIdentityKey
        ),
        getRule(
            joi,
            'factoidAddress',
            isValidPublicFctAddress,
            isValidPrivateFctAddress,
            isValidFctAddress
        ),
        getRule(
            joi,
            'entryCreditAddress',
            isValidPublicEcAddress,
            isValidPrivateEcAddress,
            isValidEcAddress
        ),
        {
            name: 'serverIdentityKey',
            params: {
                options: joi.object().keys({
                    type: joi.string().valid(['public', 'private', 'secret']),
                    priority: joi.number().valid([1, 2, 3, 4])
                })
            },
            validate(params, value, state, options) {
                const { type = '', priority = 0 } = params.options || {};

                const validPrefixes = getValidPrefixes(type, priority);

                if (!serverKey.isValidIdentityKey(value, validPrefixes)) {
                    return this.createError(
                        'factom.serverIdentityKey',
                        { v: value, type, priority: priority || 'any' },
                        state,
                        options
                    );
                }

                return value;
            }
        }
    ]
});

const flatMap = a => [].concat(...a);

function getValidPrefixes(type, priority) {
    let validPrefixes = [];

    switch (type) {
        case '':
            validPrefixes.push('id', 'sk');
            break;
        case 'public':
            validPrefixes.push('id');
            break;
        case 'secret':
        case 'private':
            validPrefixes.push('sk');
    }

    switch (priority) {
        case 1:
        case 2:
        case 3:
        case 4:
            return validPrefixes.map(p => p + priority);
        case 0:
            return flatMap(validPrefixes.map(p => [p + 1, p + 2, p + 3, p + 4]));
    }
}

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
                        return this.createError(
                            `factom.${name}`,
                            { v: value, type },
                            state,
                            options
                        );
                    }
                    break;
                case 'secret':
                case 'private':
                    if (!fnPrivate(value)) {
                        return this.createError(
                            `factom.${name}`,
                            { v: value, type },
                            state,
                            options
                        );
                    }
                    break;
                case '':
                    if (!fnAll(value)) {
                        return this.createError(
                            `factom.${name}`,
                            { v: value, type },
                            state,
                            options
                        );
                    }
                    break;
            }

            return value;
        }
    };
}
