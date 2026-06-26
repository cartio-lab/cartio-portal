# LDIF-Code des Schemas (cn=config)

Dies ist die LDIF-Datei, die für den dynamischen Import in OpenLDAP (`cn=config`) bereit ist. Sie definiert die Attribute und Objektklassen des CARTIO-Ökosystems:

```ldif
# Schema Oficial CARTIO - 2025
# Base de OIDs: 1.3.6.1.4.1.61409.600

dn: cn=cartio,cn=schema,cn=config
objectClass: olcSchemaConfig
cn: cartio

# Atributos Universais
olcAttributeTypes: {0}( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus' DESC 'Status (Militar, Civil, ONG, Voluntario)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )
olcAttributeTypes: {1}( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality' DESC 'Nacionalidade (ISO 3166-1 alpha-2)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )
olcAttributeTypes: {2}( 1.3.6.1.4.1.61409.600.2.4 NAME 'cartioSecurityClearance' DESC 'Nivel de seguranca (X.841)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {3}( 1.3.6.1.4.1.61409.600.2.8 NAME 'cartioEmergencyContactDN' DESC 'DN de contato de emergencia' EQUALITY distinguishedNameMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.12 SINGLE-VALUE )

# Atributos Militares
olcAttributeTypes: {4}( 1.3.6.1.4.1.61409.600.2.20 NAME 'cartioMilitaryRank' DESC 'Posto Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {5}( 1.3.6.1.4.1.61409.600.2.21 NAME 'cartioBranchOfService' DESC 'Forca Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {6}( 1.3.6.1.4.1.61409.600.2.24 NAME 'cartioMilitarySpecialty' DESC 'Especialidade Militar' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} )

# Classes de Objeto
olcObjectClasses: {0}( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson' DESC 'Classe Auxiliar CARTIO' SUP top AUXILIARY MAY ( cartioPersonStatus $ cartioNationality $ cartioSecurityClearance $ cartioEmergencyContactDN ) )
olcObjectClasses: {1}( 1.3.6.1.4.1.61409.600.1.2 NAME 'cartioMilitaryPerson' DESC 'Classe Militar CARTIO' SUP top AUXILIARY MAY ( cartioMilitaryRank $ cartioBranchOfService $ cartioMilitarySpecialty ) )
```