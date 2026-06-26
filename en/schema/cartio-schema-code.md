# Classic Schema Code

This is the schema file in the traditional OpenLDAP (`slapd.conf`) format. It is ideal for directory systems that load configurations statically:

```schema
# Official CARTIO Schema - Classic Format

# Universal Attributes
attributetype ( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus'
    DESC 'Status (Military, Civil, NGO, Volunteer)'
    EQUALITY caseIgnoreMatch
    SUBSTR caseIgnoreSubstringsMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )

attributetype ( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality'
    DESC 'Nationality (ISO 3166-1 alpha-2)'
    EQUALITY caseIgnoreMatch
    SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )

# Classes
objectclass ( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson'
    DESC 'CARTIO Person auxiliary objectclass'
    SUP top AUXILIARY
    MAY ( cartioPersonStatus $ cartioNationality ) )
```