# Classe d'Objet : cartioPerson

La classe `cartioPerson` constitue le noyau des données d'identité du protocole CARTIO. Elle est définie comme une classe **auxiliaire** (`AUXILIARY`), permettant d'associer dynamiquement ses attributs de sécurité, nationaux et humanitaires à des entrées d'annuaires existantes (telles que les classes classiques `inetOrgPerson` ou `person`).

*   **OID de la Classe** : `1.3.6.1.4.1.61409.600.1.1`
*   **Super-classe** : `top`
*   **Type** : `AUXILIARY`

---

## Attributs Additionnels Autorisés (MAY)

La classe met à disposition les attributs optionnels suivants pour la gestion des identités sur les théâtres d'opérations et de catastrophes :

### [cartioPersonStatus](/fr/wiki/atributos#cartiopersonstatus)
*   **Description** : Le rôle général de l'acteur (ex : *Military, Civil, NGO, Volunteer*).
*   **Syntaxe** : DirectoryString (Case Insensitive)
*   **Valence** : Valeur Unique

### [cartioNationality](/fr/wiki/atributos#cartionationality)
*   **Description** : Code de nationalité ISO 3166-1 alpha-2 (ex : *BR*, *US*).
*   **Syntaxe** : DirectoryString (Case Insensitive)
*   **Valence** : Valeur Unique

### [cartioSecurityClearance](/fr/wiki/atributos#cartiosecurityclearance)
*   **Description** : Niveau d'habilitation de sécurité tactique de l'acteur conformément aux normes X.841 / ACP 133 (ex : *Confidential, Secret*).
*   **Syntaxe** : DirectoryString
*   **Valence** : Valeur Unique

### [cartioEmergencyContactDN](/fr/wiki/atributos#cartioemergencycontactdn)
*   **Description** : Le Nom Distinctif (DN) de l'entrée correspondant au contact d'urgence.
*   **Syntaxe** : DistinguishedName
*   **Valence** : Valeur Unique

### Autres Attributs d'Identification Civile :
*   `cartioFathersName` : Nom du père de l'acteur (DirectoryString).
*   `cartioMothersName` : Nom de la mère de l'acteur (DirectoryString).
*   `cartioPersonalEmail` : Adresse e-mail personnelle (DirectoryString).