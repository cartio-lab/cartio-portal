# CARTIO Schema Attribute Dictionary

This is the attribute dictionary for the CARTIO Schema, defining OIDs, formal directory syntaxes, and valence constraints:

| Attribute Name | OID | Technical Description | LDAP Syntax | Valence |
| :--- | :--- | :--- | :--- | :--- |
| `cartioPersonStatus` | `1.3.6.1.4.1.61409.600.2.1` | Operational status of the actor | DirectoryString | SINGLE |
| `cartioNationality` | `1.3.6.1.4.1.61409.600.2.2` | ISO 3166-1 alpha-2 code | DirectoryString | SINGLE |
| `cartioSecurityClearance` | `1.3.6.1.4.1.61409.600.2.4` | Security clearance level (X.841/ACP 133) | DirectoryString | SINGLE |
| `cartioEmergencyContactDN` | `1.3.6.1.4.1.61409.600.2.8` | Emergency contact DN | DN | SINGLE |
| `cartioFieldExpertise` | `1.3.6.1.4.1.61409.600.2.10` | Field expertise (Medical, Logistics, SAR) | DirectoryString | MULTI |
| `cartioDeploymentStatus` | `1.3.6.1.4.1.61409.600.2.12` | Resource deployment status | DirectoryString | SINGLE |
| `cartioMilitaryRank` | `1.3.6.1.4.1.61409.600.2.20` | Military rank or functional grade | DirectoryString | SINGLE |
| `cartioBranchOfService` | `1.3.6.1.4.1.61409.600.2.21` | Military branch or corporate entity | DirectoryString | SINGLE |
| `cartioMilitarySpecialty` | `1.3.6.1.4.1.61409.600.2.24` | Military specialty | DirectoryString | MULTI |
| `cartioGenevaRole` | `1.3.6.1.4.1.61409.600.2.30` | Protected humanitarian role (Geneva Convention) | DirectoryString | SINGLE |
| `cartioBiometricTemplate` | `1.3.6.1.4.1.61409.600.2.40` | Binary minutiae (ISO/IEC 19794-2) | OctetString | MULTI |