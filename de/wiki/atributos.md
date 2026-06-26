# Attributverzeichnis des CARTIO-Schemas

Dies ist das Attributverzeichnis des CARTIO-Schemas, das OIDs, formale Verzeichnissyntaxen und Valenzbeschränkungen definiert:

| Attributname | OID | Technische Beschreibung | LDAP-Syntax | Valenz |
| :--- | :--- | :--- | :--- | :--- |
| `cartioPersonStatus` | `1.3.6.1.4.1.61409.600.2.1` | Operativer Status des Akteurs | DirectoryString | SINGLE |
| `cartioNationality` | `1.3.6.1.4.1.61409.600.2.2` | ISO 3166-1 Alpha-2-Code | DirectoryString | SINGLE |
| `cartioSecurityClearance` | `1.3.6.1.4.1.61409.600.2.4` | Freigabestufe (X.841/ACP 133) | DirectoryString | SINGLE |
| `cartioEmergencyContactDN` | `1.3.6.1.4.1.61409.600.2.8` | DN des Notfallkontakts | DN | SINGLE |
| `cartioFieldExpertise` | `1.3.6.1.4.1.61409.600.2.10` | Fachgebiet (Medizin, Logistik, SAR) | DirectoryString | MULTI |
| `cartioDeploymentStatus` | `1.3.6.1.4.1.61409.600.2.12` | Mobilisierungsstatus der Ressource | DirectoryString | SINGLE |
| `cartioMilitaryRank` | `1.3.6.1.4.1.61409.600.2.20` | Dienstgrad oder funktionelle Graduierung | DirectoryString | SINGLE |
| `cartioBranchOfService` | `1.3.6.1.4.1.61409.600.2.21` | Teilstreitkraft oder korporative Organisation | DirectoryString | SINGLE |
| `cartioMilitarySpecialty` | `1.3.6.1.4.1.61409.600.2.24` | Militärische Spezialisierung | DirectoryString | MULTI |
| `cartioGenevaRole` | `1.3.6.1.4.1.61409.600.2.30` | Geschützte humanitäre Funktion | DirectoryString | SINGLE |
| `cartioBiometricTemplate` | `1.3.6.1.4.1.61409.600.2.40` | Binäre Minuzien (ISO/IEC 19794-2) | OctetString | MULTI |