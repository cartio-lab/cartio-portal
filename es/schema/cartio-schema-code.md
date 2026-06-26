# Código del Esquema (Schema) Clásico

Este es el archivo de esquema en el formato tradicional de OpenLDAP (`slapd.conf`). Es ideal para sistemas de directorio que cargan configuraciones de forma estática:

```schema
# Schema Oficial CARTIO - Formato Clásico

# Atributos Universales
attributetype ( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus'
    DESC 'Estado (Militar, Civil, ONG, Voluntario)'
    EQUALITY caseIgnoreMatch
    SUBSTR caseIgnoreSubstringsMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )

attributetype ( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality'
    DESC 'Nacionalidad (ISO 3166-1 alpha-2)'
    EQUALITY caseIgnoreMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )

# Clases
objectclass ( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson'
    DESC 'CARTIO Person auxiliary objectclass'
    SUP top AUXILIARY
    MAY ( cartioPersonStatus $ cartioNationality ) )
```