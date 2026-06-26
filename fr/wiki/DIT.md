# Arbre d'Information de l'Annuaire (DIT CARTIO)

L'Arbre d'Information de l'Annuaire (**DIT** — *Directory Information Tree*) définit la structure organisationnelle des noms pour éviter les collisions dans l'espace de noms (namespace) lors des opérations de fédération :

```
                  dc=cartio,dc=org
                    /         \
           ou=Pessoas        ou=Organizacoes
             /      \               |
   uid=militar1   uid=militar2   o=HospitalCentral
```

### Fichier LDIF de Base pour l'Initialisation
Pour créer les Unités Organisationnelles (OUs) initiales dans l'annuaire, la structure standard suivante est utilisée :

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