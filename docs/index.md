---
sidebar_position: 1
---

# What is PixConf?

The PixConf system is a GoLang-based, open-source remote execution framework for configuration management, automation, provisioning, and orchestration.

## PixConf management concepts

A basic PixConf implementation consists of a PixConf Hub managing one or more PixConf agents.

### PixConf Hub

A server running the `pixconf-hub` service is a event hub. The hub provides a cohesive platform for orchestration and automation between managed systems.

### PixConf Agent

### PixConf Secrets

PixConf secrets are used to store sensitive data (passwords, tokens, certificates, etc...) that are necessary to work with managed systems.
It is also possible to use it as a transit encryption.

All information is kept encrypted.

### PixConf API
