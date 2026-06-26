# Albero delle Informazioni di Directory (DIT CARTIO)

L'Albero delle Informazioni di Directory (**DIT** — *Directory Information Tree*) definisce la struttura organizzativa dei nomi per evitare collisioni nel namespace nelle operazioni di federazione:

```
                  dc=cartio,dc=org
                    /         \
           ou=Persone        ou=Organizzazioni
             /      \               |
   uid=militar1   uid=militar2   o=HospitalCentral
```

### File LDIF Base di Inizializzazione
Per creare le Unità Organizzative (OU) iniziali nella directory, si utilizza la struttura standard:

```ldif
dn: dc=cartio,dc=org
objectClass: top
objectClass: dcObject
objectClass: organization
o: CARTIO Protocol
dc: cartio

dn: ou=Persone,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Persone

dn: ou=Organizzazioni,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Organizzazioni
```