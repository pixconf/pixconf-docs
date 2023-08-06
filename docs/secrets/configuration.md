---
sidebar_position: 3
---

# Configuration

Pixconf does not use configuration files. All options can be passed through environment variables.

## Environment variables

### SECRETS_API_ADDRESS

Required: Yes

Default: `[::]:8142`

The address and port on which the API server will run.

### SECRETS_MASTER_ENCRYPTION_KEY

Required: Yes

32 bytes packed in base64. Example:

```shell
openssl rand -base64 32
```

### SECRETS_DATABASE_URL

Required: Yes

Default: `postgres://pixconf:pixconf@localhost:5432/pixconf?sslmode=prefer`

### SECRETS_ROTATE_EPOCH_KEY_TIME

Required: No

Default: `336h`

The minimum time is 1 day.

### SECRETS_TLS_CERT_PATH

The path to the certificate.

### SECRETS_TLS_KEY_PATH

Path to the certificate key.
