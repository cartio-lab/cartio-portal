# Árbol de Información del Directorio (DIT CARTIO)

El Árbol de Información del Directorio (**DIT** — *Directory Information Tree*) define la estructura organizativa de nombres para evitar colisiones en el namespace en operaciones de federación:

```
                  dc=cartio,dc=org
                    /         \
            ou=Personas      ou=Organizaciones
              /      \               |
    uid=militar1   uid=militar2   o=HospitalCentral
```

### Archivo LDIF Base de Inicialización
Para crear las Unidades Organizacionales (OUs) iniciales en el directorio, se utiliza la estructura estándar:

```ldif
dn: dc=cartio,dc=org
objectClass: top
objectClass: dcObject
objectClass: organization
o: CARTIO Protocol
dc: cartio

dn: ou=Personas,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Personas

dn: ou=Organizaciones,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Organizaciones
```