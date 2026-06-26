# Dictionnaire d'Attributs du Schéma CARTIO

Voici le dictionnaire d'attributs du Schéma CARTIO, définissant les OIDs, les syntaxes d'annuaire formelles et les contraintes de valence :

| Nom de l'Attribut | OID | Description Technique | Syntaxe LDAP | Valence |
| :--- | :--- | :--- | :--- | :--- |
| `cartioPersonStatus` | `1.3.6.1.4.1.61409.600.2.1` | Statut opérationnel de l'acteur | DirectoryString | SINGLE |
| `cartioNationality` | `1.3.6.1.4.1.61409.600.2.2` | Code ISO 3166-1 alpha-2 | DirectoryString | SINGLE |
| `cartioSecurityClearance` | `1.3.6.1.4.1.61409.600.2.4` | Niveau d'accès (X.841/ACP 133) | DirectoryString | SINGLE |
| `cartioEmergencyContactDN` | `1.3.6.1.4.1.61409.600.2.8` | DN du contact d'urgence | DN | SINGLE |
| `cartioFieldExpertise` | `1.3.6.1.4.1.61409.600.2.10` | Spécialité (Médecin, Logistique, SAR) | DirectoryString | MULTI |
| `cartioDeploymentStatus` | `1.3.6.1.4.1.61409.600.2.12` | Statut de mobilisation de la ressource | DirectoryString | SINGLE |
| `cartioMilitaryRank` | `1.3.6.1.4.1.61409.600.2.20` | Grade ou rang fonctionnel | DirectoryString | SINGLE |
| `cartioBranchOfService` | `1.3.6.1.4.1.61409.600.2.21` | Branche du service (militaire ou corporative) | DirectoryString | SINGLE |
| `cartioMilitarySpecialty` | `1.3.6.1.4.1.61409.600.2.24` | Spécialité militaire | DirectoryString | MULTI |
| `cartioGenevaRole` | `1.3.6.1.4.1.61409.600.2.30` | Rôle humanitaire protégé | DirectoryString | SINGLE |
| `cartioBiometricTemplate` | `1.3.6.1.4.1.61409.600.2.40` | Minuties binaires (ISO/IEC 19794-2) | OctetString | MULTI |