# Objektklasse: cartioMilitaryPerson

Die Klasse `cartioMilitaryPerson` erweitert die taktische Identität für Personal von Verteidigungs- und Sicherheitskräften und ermöglicht die Zuordnung von Dienstgraden, Teilstreitkräften und taktischen Spezialisierungen innerhalb des Verzeichnisses.

*   **Klassen-OID**: `1.3.6.1.4.1.61409.600.1.2`
*   **Superklasse**: `top`
*   **Typ**: `AUXILIARY`

---

## Zusätzlich erlaubte Attribute (MAY)

### [cartioMilitaryRank](/de/wiki/atributos#cartiomilitaryrank)
*   **Beschreibung**: Dienstgrad oder militärische Graduierung (z. B. *Tenente, Major, Sargento*).
*   **Syntax**: DirectoryString
*   **Valenz**: Einzelwert (SINGLE)

### [cartioBranchOfService](/de/wiki/atributos#cartiobranchofservice)
*   **Beschreibung**: Teilstreitkraft oder Bereich der öffentlichen Sicherheit (z. B. *Exército, Marinha, Aeronáutica*).
*   **Syntax**: DirectoryString
*   **Valenz**: Einzelwert (SINGLE)

### [cartioMilitarySpecialty](/de/wiki/atributos#cartiomilitaryspecialty)
*   **Beschreibung**: Militärische Spezialisierung oder Qualifikation (z. B. *Comunicações, Infantaria, Saúde*).
*   **Syntax**: DirectoryString
*   **Valenz**: Mehrwertig (MULTI - der Akteur kann mehrere Qualifikationen besitzen)

### Weitere Attribute:
*   `cartioServiceNumber`: Militärische Registernummer / Dienstausweisnummer.
*   `cartioMilitaryUnitDN`: DN zur Identifizierung der Militärischen Organisation, der die Person angehört.