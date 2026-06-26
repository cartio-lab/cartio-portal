# Directory Information Tree (CARTIO DIT)

The Directory Information Tree (**DIT**) defines the organizational naming structure to avoid namespace collisions in federation operations:

```
                  dc=cartio,dc=org
                    /         \
           ou=Pessoas        ou=Organizacoes
             /      \               |
   uid=militar1   uid=militar2   o=HospitalCentral
```

### Base Initialization LDIF File
To create the initial Organizational Units (OUs) in the directory, the standard structure is used:

```ldif
dn: dc=cartio,dc=org
objectClass: top
objectClass: dcObject
objectClass: organization
o: CARTIO Protocol
dc: cartio

dn: ou=Pessoas,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Pessoas

dn: ou=Organizacoes,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Organizacoes
```