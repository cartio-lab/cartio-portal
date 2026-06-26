# Schema LDIF Code (cn=config)

This is the LDIF file ready for dynamic import in OpenLDAP (`cn=config`). It defines the attributes and object classes of the CARTIO ecosystem:

```ldif
# Official CARTIO Schema - 2025
# OID Base: 1.3.6.1.4.1.61409.600

dn: cn=cartio,cn=schema,cn=config
objectClass: olcSchemaConfig
cn: cartio

# Universal Attributes
olcAttributeTypes: {0}( 1.3.6.1.4.1.61409.600.2.1 NAME 'cartioPersonStatus' DESC 'Status (Military, Civil, NGO, Volunteer)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{64} SINGLE-VALUE )
olcAttributeTypes: {1}( 1.3.6.1.4.1.61409.600.2.2 NAME 'cartioNationality' DESC 'Nationality (ISO 3166-1 alpha-2)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.11{2} SINGLE-VALUE )
olcAttributeTypes: {2}( 1.3.6.1.4.1.61409.600.2.4 NAME 'cartioSecurityClearance' DESC 'Security clearance level (X.841)' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {3}( 1.3.6.1.4.1.61409.600.2.8 NAME 'cartioEmergencyContactDN' DESC 'Emergency contact DN' EQUALITY distinguishedNameMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.12 SINGLE-VALUE )

# Military Attributes
olcAttributeTypes: {4}( 1.3.6.1.4.1.61409.600.2.20 NAME 'cartioMilitaryRank' DESC 'Military Rank' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {5}( 1.3.6.1.4.1.61409.600.2.21 NAME 'cartioBranchOfService' DESC 'Military Branch' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} SINGLE-VALUE )
olcAttributeTypes: {6}( 1.3.6.1.4.1.61409.600.2.24 NAME 'cartioMilitarySpecialty' DESC 'Military Specialty' EQUALITY caseIgnoreMatch SYNTAX 1.3.6.1.4.1.1466.115.121.1.15{128} )

# Object Classes
olcObjectClasses: {0}( 1.3.6.1.4.1.61409.600.1.1 NAME 'cartioPerson' DESC 'CARTIO Auxiliary Class' SUP top AUXILIARY MAY ( cartioPersonStatus $ cartioNationality $ cartioSecurityClearance $ cartioEmergencyContactDN ) )
olcObjectClasses: {1}( 1.3.6.1.4.1.61409.600.1.2 NAME 'cartioMilitaryPerson' DESC 'CARTIO Military Class' SUP top AUXILIARY MAY ( cartioMilitaryRank $ cartioBranchOfService $ cartioMilitarySpecialty ) )
```