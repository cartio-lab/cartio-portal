# Verzeichnisinformationsbaum (DIT CARTIO)

Der Verzeichnisbaum (**DIT** — *Directory Information Tree*) definiert die organisatorische Struktur von Namen, um Namensraumkollisionen bei Föderationsoperationen zu vermeiden:

```
                  dc=cartio,dc=org
                    /         \
           ou=Pessoas        ou=Organizacoes
             /      \               |
    uid=militar1   uid=militar2   o=HospitalCentral
```

### Basis-LDIF-Datei zur Initialisierung
Um die anfänglichen Organisationseinheiten (OUs) im Verzeichnis zu erstellen, wird die folgende Standardstruktur verwendet:

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