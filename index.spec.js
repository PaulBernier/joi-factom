const assert = require('chai').assert,
    Joi = require('joi').extend(require('./index'));


describe('Validate identity keys', function () {

    it('Validate both public and secret identity key', async function () {
        const schema = Joi.factom().identityKey();

        Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9X', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only public identity key', async function () {
        const schema = Joi.factom().identityKey('public');

        Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        const { error } = Joi.validate('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only private identity key', async function () {
        const schema = Joi.factom().identityKey('private');

        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only secret identity key', async function () {
        const schema = Joi.factom().identityKey('secret');

        Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', schema);
        const { error } = Joi.validate('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', schema);
        assert.instanceOf(error, Error);
    });

});

describe('Validate factoid addresses', function () {

    it('Validate both public and secret factoid addresses', async function () {
        const schema = Joi.factom().factoidAddress();

        Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCD', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only public factoid address', async function () {
        const schema = Joi.factom().factoidAddress('public');

        Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        const { error } = Joi.validate('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only private factoid address', async function () {
        const schema = Joi.factom().factoidAddress('private');

        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only secret factoid address', async function () {
        const schema = Joi.factom().factoidAddress('secret');

        Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', schema);
        const { error } = Joi.validate('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', schema);
        assert.instanceOf(error, Error);
    });
});

describe('Validate entry credit addresses', function () {

    it('Validate both public and secret entry credit addresses', async function () {
        const schema = Joi.factom().entryCreditAddress();

        Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCD', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only public entry credit address', async function () {
        const schema = Joi.factom().entryCreditAddress('public');

        Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        const { error } = Joi.validate('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only private entry credit address', async function () {
        const schema = Joi.factom().entryCreditAddress('private');

        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        assert.instanceOf(error, Error);
    });

    it('Validate only secret entry credit address', async function () {
        const schema = Joi.factom().entryCreditAddress('secret');

        Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', schema);
        const { error } = Joi.validate('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', schema);
        assert.instanceOf(error, Error);
    });
});