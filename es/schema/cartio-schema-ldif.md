# Código LDIF del Esquema (Schema) (cn=config)

Este es el archivo LDIF listo para la importación dinámica en OpenLDAP (`cn=config`). Define los atributos y las clases de objeto del ecosistema CARTIO:

```ldif
# Schema Oficial CARTIO - 2025
# Base de OIDs: 1.3.6.1.4.1.61409.600

dn: cn=cartio,cn=schema,cn=config
objectClass: olcSchemaConfig
cn: cartio

# Atributos Universales
olcAttributeTypes: {0}( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus' DESC 'Estado (Militar, Civil, ONG, Voluntario)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )
olcAttributeTypes: {1}( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality' DESC 'Nacionalidad (ISO 3166-1 alpha-2)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )
olcAttributeTypes: {2}( 1.3.6.1.4.1.61409.600.2.4 NAME 'cartioSecurityClearance' DESC 'Nivel de seguridad (X.841)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {3}( 1.3.6.1.4.1.61409.600.2.8 NAME 'cartioEmergencyContactDN' DESC 'DN de contacto de emergencia' EQUALITY distinguishedNameMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.12 SINGLE-VALUE )

# Atributos Militares
olcAttributeTypes: {4}( 1.3.6.1.4.1.61409.600.2.20 NAME 'cartioMilitaryRank' DESC 'Rango Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {5}( 1.3.6.1.4.1.61409.600.2.21 NAME 'cartioBranchOfService' DESC 'Fuerza Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {6}( 1.3.6.1.4.1.61409.600.2.24 NAME 'cartioMilitarySpecialty' DESC 'Especialidad Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} )

# Clases de Objeto
olcObjectClasses: {0}( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson' DESC 'Clase Auxiliar CARTIO' SUP top AUXILIARY MAY ( cartioPersonStatus $ cartioNationality $ cartioSecurityClearance $ cartioEmergencyContactDN ) )
olcObjectClasses: {1}( 1.3.6.1.4.1.61409.600.1.2 NAME 'cartioMilitaryPerson' DESC 'Clase Militar CARTIO' SUP top AUXILIARY MAY ( cartioMilitaryRank $ cartioBranchOfService $ cartioMilitarySpecialty ) )
```