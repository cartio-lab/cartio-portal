# Code du Schéma Classique

Il s'agit du fichier de schéma au format traditionnel d'OpenLDAP (`slapd.conf`). Il est idéal pour les systèmes d'annuaire qui chargent les configurations de manière statique :

```schema
# Schema Oficial CARTIO - Formato Classico

# Atributos Universais
attributetype ( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus'
    DESC 'Status (Militar, Civil, ONG, Voluntario)'
    EQUALITY caseIgnoreMatch
    SUBSTR caseIgnoreSubstringsMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )

attributetype ( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality'
    DESC 'Nacionalidade (ISO 3166-1 alpha-2)'
    EQUALITY caseIgnoreMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )

# Classes
objectclass ( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson'
    DESC 'CARTIO Person auxiliary objectclass'
    SUP top AUXILIARY
    MAY ( cartioPersonStatus $ cartioNationality ) )
```