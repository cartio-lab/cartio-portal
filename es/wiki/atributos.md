# Diccionario de Atributos del Esquema (Schema) CARTIO

Este es el diccionario de atributos del Esquema (Schema) CARTIO, que define OIDs, sintaxis formales de directorio y restricciones de valencia:

| Nombre del Atributo | OID | Descripción Técnica | Sintaxis LDAP | Valencia |
| :--- | :--- | :--- | :--- | :--- |
| `cartioPersonStatus` | `1.3.6.1.4.1.61409.600.2.1` | Estado (status) operacional del actor | DirectoryString | SINGLE |
| `cartioNationality` | `1.3.6.1.4.1.61409.600.2.2` | Código ISO 3166-1 alpha-2 | DirectoryString | SINGLE |
| `cartioSecurityClearance` | `1.3.6.1.4.1.61409.600.2.4` | Nivel de acceso (X.841/ACP 133) | DirectoryString | SINGLE |
| `cartioEmergencyContactDN` | `1.3.6.1.4.1.61409.600.2.8` | DN del contacto de emergencia | DN | SINGLE |
| `cartioFieldExpertise` | `1.3.6.1.4.1.61409.600.2.10` | Especialidad (Médico, Logística, SAR) | DirectoryString | MULTI |
| `cartioDeploymentStatus` | `1.3.6.1.4.1.61409.600.2.12` | Estado (status) de movilización del recurso | DirectoryString | SINGLE |
| `cartioMilitaryRank` | `1.3.6.1.4.1.61409.600.2.20` | Rango o graduación funcional | DirectoryString | SINGLE |
| `cartioBranchOfService` | `1.3.6.1.4.1.61409.600.2.21` | Fuerza militar o corporativa | DirectoryString | SINGLE |
| `cartioMilitarySpecialty` | `1.3.6.1.4.1.61409.600.2.24` | Especialidad militar | DirectoryString | MULTI |
| `cartioGenevaRole` | `1.3.6.1.4.1.61409.600.2.30` | Función humanitaria protegida | DirectoryString | SINGLE |
| `cartioBiometricTemplate` | `1.3.6.1.4.1.61409.600.2.40` | Minucias binarias (ISO/IEC 19794-2) | OctetString | MULTI |