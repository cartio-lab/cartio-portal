# Objektklasse: cartioPerson

Die Klasse `cartioPerson` ist der Kern der Identitätsdaten des CARTIO-Protokolls. Sie ist als eine **Hilfsklasse** (`AUXILIARY`) definiert, was es ermöglicht, ihre sicherheitsbezogenen, nationalen und humanitären Attribute dynamisch an bestehende Verzeichniseinträge zu koppeln (wie die klassischen Klassen `inetOrgPerson` oder `person`).

*   **Klassen-OID**: `1.3.6.1.4.1.61409.600.1.1`
*   **Superklasse**: `top`
*   **Typ**: `AUXILIARY`

---

## Zusätzlich erlaubte Attribute (MAY)

Die Klasse stellt die folgenden optionalen Attribute für das Identitätsmanagement in Einsatzgebieten und Katastrophenfällen zur Verfügung:

### [cartioPersonStatus](/de/wiki/atributos#cartiopersonstatus)
*   **Beschreibung**: Die allgemeine Rolle des Akteurs (z. B. *Military, Civil, NGO, Volunteer*).
*   **Syntax**: DirectoryString (Case Insensitive)
*   **Valenz**: Einzelwert (SINGLE)

### [cartioNationality](/de/wiki/atributos#cartionationality)
*   **Beschreibung**: ISO 3166-1 Alpha-2-Nationalitätscode (z. B. *BR*, *US*).
*   **Syntax**: DirectoryString (Case Insensitive)
*   **Valenz**: Einzelwert (SINGLE)

### [cartioSecurityClearance](/de/wiki/atributos#cartiosecurityclearance)
*   **Beschreibung**: Die taktische Sicherheitsfreigabestufe des Akteurs gemäß den Normen X.841 / ACP 133 (z. B. *Confidencial, Secreto*).
*   **Syntax**: DirectoryString
*   **Valenz**: Einzelwert (SINGLE)

### [cartioEmergencyContactDN](/de/wiki/atributos#cartioemergencycontactdn)
*   **Beschreibung**: Der Distinguished Name (DN) des Eintrags, der dem Notfallkontakt entspricht.
*   **Syntax**: DistinguishedName
*   **Valenz**: Einzelwert (SINGLE)

### Weitere Attribute der zivilen Identifikation:
*   `cartioFathersName`: Name des Vaters des Akteurs (DirectoryString).
*   `cartioMothersName`: Name der Mutter des Akteurs (DirectoryString).
*   `cartioPersonalEmail`: Private E-Mail-Adresse (DirectoryString).