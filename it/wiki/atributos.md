# Dizionario degli Attributi dello Schema CARTIO

Questo è il dizionario degli attributi dello Schema CARTIO, che definisce gli OID, le sintassi formali di directory e i vincoli di valenza:

| Nome dell'Attributo | OID | Descrizione Tecnica | Sintassi LDAP | Valenza |
| :--- | :--- | :--- | :--- | :--- |
| `cartioPersonStatus` | `1.3.6.1.4.1.61409.600.2.1` | Stato operativo dell'attore | DirectoryString | SINGLE |
| `cartioNationality` | `1.3.6.1.4.1.61409.600.2.2` | Codice ISO 3166-1 alpha-2 | DirectoryString | SINGLE |
| `cartioSecurityClearance` | `1.3.6.1.4.1.61409.600.2.4` | Livello di accesso (X.841/ACP 133) | DirectoryString | SINGLE |
| `cartioEmergencyContactDN` | `1.3.6.1.4.1.61409.600.2.8` | DN del contatto di emergenza | DN | SINGLE |
| `cartioFieldExpertise` | `1.3.6.1.4.1.61409.600.2.10` | Specializzazione (Medico, Logistica, SAR) | DirectoryString | MULTI |
| `cartioDeploymentStatus` | `1.3.6.1.4.1.61409.600.2.12` | Stato di mobilitazione della risorsa | DirectoryString | SINGLE |
| `cartioMilitaryRank` | `1.3.6.1.4.1.61409.600.2.20` | Grado militare o qualifica funzionale | DirectoryString | SINGLE |
| `cartioBranchOfService` | `1.3.6.1.4.1.61409.600.2.21` | Forza militare o aziendale | DirectoryString | SINGLE |
| `cartioMilitarySpecialty` | `1.3.6.1.4.1.61409.600.2.24` | Specializzazione militare | DirectoryString | MULTI |
| `cartioGenevaRole` | `1.3.6.1.4.1.61409.600.2.30` | Ruolo umanitario protetto | DirectoryString | SINGLE |
| `cartioBiometricTemplate` | `1.3.6.1.4.1.61409.600.2.40` | Minuzie binarie (ISO/IEC 19794-2) | OctetString | MULTI |