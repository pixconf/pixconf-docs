---
sidebar_position: 2
---

# PixConf Secrets concepts

## Security

For data encryption, two algorithms are used: AES-GCM and ChaCha20+Poly1305. These both algorithms use a 256 bit key.

Encryption uses a whole tree of keys. The scheme is as follows: `master key` -> `intermediate key` -> `value key`

### How it works?

During deployment, you must specify the master key. This key will be used to encrypt the intermediate key. During master key rotation - all intermediate keys will be re-encrypted.

The intermediate key, or whatever else it can be called - the epoch key - is a temporary key, on the basis of which the key is generated to encrypt the value.
This key is automatically rotated in the background (by default - 14 days) and automatically re-encrypts previously writed secrets.

The value key is dynamically generated using a special algorithm using the epoch key for each version of the secret, which guarantees a unique encryption key for each value. This key is not saved or cached.

## Secret

### Version

A secret has versions which hold copies of the encrypted secret value. When you change the secret value, PixConf Secrets creates a new version.

Secrets store a linear history of secrets with versions. Versions are never deleted for the life of the secret.

The value must be stored as a key/value. Example:

```json
{
    "host": "prod-servant-01.databases.example.com",
    "port": "5432",
    "username": "the_strange_username",
    "password": "the-very-hard-password",
    "dbname": "the_database",
    "engine": "postgresql"
}
```

If you only need to store values, use `default` as the key.
