# Joi Factom

Joi extension for validating Factom data.

## Install and import

Install for your project:
```bash
npm install joi-factom
```

Import the extension:
```javascript
const Joi = require('joi').extend(require('joi-factom'));
```

## Validate Factoid addresses

Use `Joi.factom().factoidAddress([type])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private Factoid address
const fctSchema = Joi.factom().factoidAddress();
// Validate if a string is either a public Factoid address
const publicFctSchema = Joi.factom().factoidAddress('public');
// Validate if a string is a private Factoid address
const secretFctSchema = Joi.factom().factoidAddress('secret');// 'secret' is interchangeable with 'private' keyword

Joi.assert(fctSchema, 'FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM');
Joi.assert(publicFctSchema, 'FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM');
Joi.assert(secretFctSchema, 'Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr');
```

## Validate Entry Credit addresses

Use `Joi.factom().entryCreditAddress([type])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private Entry Credit address
const ecSchema = Joi.factom().entryCreditAddress();
// Validate if a string is either a public Entry Credit address
const publicEcSchema = Joi.factom().entryCreditAddress('public');
// Validate if a string is a private Entry Credit address
const secretEcSchema = Joi.factom().entryCreditAddress('secret');// 'secret' is interchangeable with 'private' keyword

Joi.assert(ecSchema, 'EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK');
Joi.assert(publicEcSchema, 'EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK');
Joi.assert(secretEcSchema, 'Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T');
```

## Validate Identity keys

Use `Joi.factom().identityKey([type])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private identity keys
const idSchema = Joi.factom().identityKey();
// Validate if a string is either a public identity key
const publicIdSchema = Joi.factom().identityKey('public');
// Validate if a string is a private identity key
const secretIdSchema = Joi.factom().identityKey('secret');// 'secret' is interchangeable with 'private' keyword

Joi.assert(idSchema, 'idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8');
Joi.assert(publicIdSchema, 'idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8');
Joi.assert(secretIdSchema, 'idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C');
```