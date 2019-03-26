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
// Validate if a string is a public Factoid address
const publicFctSchema = Joi.factom().factoidAddress('public');
// Validate if a string is a private Factoid address
const secretFctSchema = Joi.factom().factoidAddress('secret'); // 'secret' is interchangeable with 'private' keyword

Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', fctSchema);
Joi.assert('FA33sHHzz1ufCeDJav4SXAKWocsZpJSLffqEXScoADFn3srS6ttM', publicFctSchema);
Joi.assert('Fs1wZau1YNto1xCVkELULUHiKaD14LKVTceVdvWEr9PwEDCACCDr', secretFctSchema);
```

## Validate Entry Credit addresses

Use `Joi.factom().entryCreditAddress([type])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private Entry Credit address
const ecSchema = Joi.factom().entryCreditAddress();
// Validate if a string is a public Entry Credit address
const publicEcSchema = Joi.factom().entryCreditAddress('public');
// Validate if a string is a private Entry Credit address
const secretEcSchema = Joi.factom().entryCreditAddress('secret'); // 'secret' is interchangeable with 'private' keyword

Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', ecSchema);
Joi.assert('EC2UBa4yF51DCGko9AS2piSesMWuAJAFnGu6YYoXJ2zjmkts1xAK', publicEcSchema);
Joi.assert('Es3nSPRJoiJcN6U7oX3PMjYBB8R4QBnp3iud9M8S1UQZhn3i1m8T', secretEcSchema);
```

## Validate Identity keys

Use `Joi.factom().identityKey([type])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private identity keys
const idSchema = Joi.factom().identityKey();
// Validate if a string is a public identity key
const publicIdSchema = Joi.factom().identityKey('public');
// Validate if a string is a private identity key
const secretIdSchema = Joi.factom().identityKey('secret'); // 'secret' is interchangeable with 'private' keyword

Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', idSchema);
Joi.assert('idpub1p5K8XqqGD9jZxXaaznJEWFzcQC54d9RGRu4NWyoWdM5nV6Rm8', publicIdSchema);
Joi.assert('idsec1B5cDbNNB4s1cQSZt24u3j1QtB5DsjFyBSmXqpUs645fJ3ot9C', secretIdSchema);
```

## Validate Server Identity keys

Use `Joi.factom().serverIdentityKey([{type: string, priority: number}])`.

```javascript
const Joi = require('joi').extend(require('joi-factom'));

// Validate if a string is either a public or private identity keys of any priority
const idSchema = Joi.factom().serverIdentityKey();
// Validate if a string is a public identity key
const publicIdSchema = Joi.factom().serverIdentityKey({ type: 'public' });
// Validate if a string is a private identity key
const secretIdSchema = Joi.factom().serverIdentityKey({ type: 'secret' }); // 'secret' is interchangeable with 'private' keyword
// Validate if a string is a key of priority 2 (either public or private)
const priority2Schema = Joi.factom().serverIdentityKey({ priority: 2 });
// Validate if a string is a sk1 key
const sk1Schema = Joi.factom().serverIdentityKey({ type: 'secret', priority: 1 });

Joi.assert('id32Tut2bZ9cwcEvirSSFdheAaRP7wUvaoTKGKTP5otH13uzjcHTd', idSchema);
Joi.assert('id42nFAz4WiPEQHYA1dpscKG9otobUz3s54VPYmsihhwCgibnEPW5', publicIdSchema);
Joi.assert('sk32Tee5C4fCkbjbN4zc4VPkr9vX4xg8n53XQuWZx6xAKm2cAP7gv', secretIdSchema);
Joi.assert('id229ab58barepCKHhF3df62BLwxePyoJXr9968tSv4coR7LbtoFL', priority2Schema);
Joi.assert('sk11pz4AG9XgB1eNVkbppYAWsgyg7sftDXqBASsagKJqvVRKYodCU', sk1Schema);
```
