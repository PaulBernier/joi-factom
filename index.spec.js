const assert = require('chai').assert,
    Joi = require('@hapi/joi').extend(require('./index'));

describe('Validate identity keys', function() {
    it('Validate both public and secret identity key', async function() {
        const schema = Joi.factom().identityKey();

        Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate(
            'idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9X',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only public identity key', async function() {
        const schema = Joi.factom().identityKey('public');

        Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        const { error } = Joi.validate(
            'idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only private identity key', async function() {
        const schema = Joi.factom().identityKey('private');

        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate(
            'idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only secret identity key', async function() {
        const schema = Joi.factom().identityKey('secret');

        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate(
            'idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8',
            schema
        );
        assert.instanceOf(error, Error);
    });
});

describe('Validate factoid addresses', function() {
    it('Validate both public and secret factoid addresses', async function() {
        const schema = Joi.factom().factoidAddress();

        Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate(
            'Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCD',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only public factoid address', async function() {
        const schema = Joi.factom().factoidAddress('public');

        Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        const { error } = Joi.validate(
            'Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only private factoid address', async function() {
        const schema = Joi.factom().factoidAddress('private');

        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate(
            'FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only secret factoid address', async function() {
        const schema = Joi.factom().factoidAddress('secret');

        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate(
            'FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM',
            schema
        );
        assert.instanceOf(error, Error);
    });
});

describe('Validate entry credit addresses', function() {
    it('Validate both public and secret entry credit addresses', async function() {
        const schema = Joi.factom().entryCreditAddress();

        Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate(
            'Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCD',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only public entry credit address', async function() {
        const schema = Joi.factom().entryCreditAddress('public');

        Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        const { error } = Joi.validate(
            'Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only private entry credit address', async function() {
        const schema = Joi.factom().entryCreditAddress('private');

        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate(
            'EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate only secret entry credit address', async function() {
        const schema = Joi.factom().entryCreditAddress('secret');

        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate(
            'EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK',
            schema
        );
        assert.instanceOf(error, Error);
    });
});

describe('Validate server identity keys', function() {
    it('Validate both public and secret server identity key of any priority', async function() {
        const schema = Joi.factom().serverIdentityKey();

        Joi.assert('sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU', schema);
        Joi.assert('sk229KM7j76STogyvuoDSWn8rvT6bRB1VoSMHgC5KD8W88E26iQM3', schema);
        Joi.assert('sk32Tee5C4fCkbjbN4zc4VPkr9vX4xg8n53XQuWZx6xAKm2cAP7gv', schema);
        Joi.assert('sk42myw2f2Dy3PnCoEBzgU1NqPPwYWBG4LehY8q4azmpXPqGY6Bqu', schema);
        Joi.assert('id11qFJ7fe26N29hrY3f1gUQC7UYArUg2GEy1rpPp2ExbnJdSj3mN', schema);
        Joi.assert('id229ab58barepCKHhF3df62BLwxePyoJXr9968tSv4coR7LbtoFL', schema);
        Joi.assert('id32Tut2bZ9cwcEvirSSFdheAaRP7wUvaoTKGKTP5otH13uzjcHTd', schema);
        Joi.assert('id42nFAz4WiPEQHYA1dpscKG9otobUz3s54VPYmsihhwCgibnEPW5', schema);

        const { error } = Joi.validate(
            'Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T',
            schema
        );

        assert.instanceOf(error, Error);
    });

    it('Validate public server identity key of any priority', async function() {
        const schema = Joi.factom().serverIdentityKey({ type: 'public' });

        Joi.assert('id11qFJ7fe26N29hrY3f1gUQC7UYArUg2GEy1rpPp2ExbnJdSj3mN', schema);
        Joi.assert('id229ab58barepCKHhF3df62BLwxePyoJXr9968tSv4coR7LbtoFL', schema);
        Joi.assert('id32Tut2bZ9cwcEvirSSFdheAaRP7wUvaoTKGKTP5otH13uzjcHTd', schema);
        Joi.assert('id42nFAz4WiPEQHYA1dpscKG9otobUz3s54VPYmsihhwCgibnEPW5', schema);

        const { error } = Joi.validate(
            'sk42myw2f2Dy3PnCoEBzgU1NqPPwYWBG4LehY8q4azmpXPqGY6Bqu',
            schema
        );

        assert.instanceOf(error, Error);
    });

    it('Validate private server identity key of any priority', async function() {
        const schema = Joi.factom().serverIdentityKey({ type: 'private' });

        Joi.assert('sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU', schema);
        Joi.assert('sk229KM7j76STogyvuoDSWn8rvT6bRB1VoSMHgC5KD8W88E26iQM3', schema);
        Joi.assert('sk32Tee5C4fCkbjbN4zc4VPkr9vX4xg8n53XQuWZx6xAKm2cAP7gv', schema);
        Joi.assert('sk42myw2f2Dy3PnCoEBzgU1NqPPwYWBG4LehY8q4azmpXPqGY6Bqu', schema);

        const { error } = Joi.validate(
            'id229ab58barepCKHhF3df62BLwxePyoJXr9968tSv4coR7LbtoFL',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate secret server identity key of any priority', async function() {
        const schema = Joi.factom().serverIdentityKey({ type: 'secret' });

        Joi.assert('sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU', schema);
        Joi.assert('sk229KM7j76STogyvuoDSWn8rvT6bRB1VoSMHgC5KD8W88E26iQM3', schema);
        Joi.assert('sk32Tee5C4fCkbjbN4zc4VPkr9vX4xg8n53XQuWZx6xAKm2cAP7gv', schema);
        Joi.assert('sk42myw2f2Dy3PnCoEBzgU1NqPPwYWBG4LehY8q4azmpXPqGY6Bqu', schema);

        const { error } = Joi.validate(
            'id229ab58barepCKHhF3df62BLwxePyoJXr9968tSv4coR7LbtoFL',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate server identity key with priority specified', async function() {
        const schema = Joi.factom().serverIdentityKey({ priority: 1 });

        Joi.assert('sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU', schema);
        Joi.assert('id11qFJ7fe26N29hrY3f1gUQC7UYArUg2GEy1rpPp2ExbnJdSj3mN', schema);

        const { error } = Joi.validate(
            'sk32Tee5C4fCkbjbN4zc4VPkr9vX4xg8n53XQuWZx6xAKm2cAP7gv',
            schema
        );
        assert.instanceOf(error, Error);
    });

    it('Validate server identity key with both type and priority specified ', async function() {
        const schema = Joi.factom().serverIdentityKey({ priority: 1, type: 'public' });

        Joi.assert('id11qFJ7fe26N29hrY3f1gUQC7UYArUg2GEy1rpPp2ExbnJdSj3mN', schema);

        const { error } = Joi.validate(
            'sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU',
            schema
        );
        assert.instanceOf(error, Error);
    });
});
