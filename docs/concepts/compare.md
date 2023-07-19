# Compare with another CMS

## Terminology

| PixConf | Salt | Chef | Puppet | Ansible |
| - | - | - | - | - |
| (N/P) | state | resource | resource | task |
| (N/P) | states | recipes | manifests | tasks |
| (N/P) | formula[^1] | cookbook | module | playbooks |
| vars | pillars | databags | hiera | vars |
| secrets | pillars | vault in databugs | hiera-eyaml | ansible vault |
| (N/P) | grains | ohai | facter | facts |

[^1]: formulas are more like 3rd party cookbooks in Chef, there doesn't seem to be an equivalent concept of packaging related states together unless they are meant to be shared externally. Unlike Chef cookbooks or Puppet modules, which it is standard to created for grouping resources even if packaging for distribution is not intended.


## Configuration Language

| Tool | Configuration Language | Suitable for | Template |
| - | - | - | - |
| PixConf | | Developers | Jinja2 |
| Salt | Python, YAML | Developers | Jinja2 |
| Chef | Ruby DSL | Developers | ERB |
| Puppet | Ruby, Puppet DSL | System Administrators | ERB |
| Ansible | Python, YAML | System Administrators | Jinja2 |
