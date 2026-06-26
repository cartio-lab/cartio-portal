# Classe di Oggetto: cartioMilitaryPerson

La classe `cartioMilitaryPerson` estende l'identità tattica al personale delle forze di difesa e sicurezza, consentendo la mappatura di gradi, rami di servizio e specializzazioni tattiche all'interno della directory.

*   **OID della Classe**: `1.3.6.1.4.1.61409.600.1.2`
*   **Superclasse**: `top`
*   **Tipo**: `AUXILIARY`

---

## Attributi Aggiuntivi Consentiti (MAY)

### [cartioMilitaryRank](/it/wiki/atributos#cartiomilitaryrank)
*   **Descrizione**: Grado o qualifica militare (es: *Tenente, Maggiore, Sergente*).
*   **Sintassi**: DirectoryString
*   **Valenza**: Valore Singolo

### [cartioBranchOfService](/it/wiki/atributos#cartiobranchofservice)
*   **Descrizione**: Ramo delle forze armate o della pubblica sicurezza (es: *Esercito, Marina, Aeronautica*).
*   **Sintassi**: DirectoryString
*   **Valenza**: Valore Singolo

### [cartioMilitarySpecialty](/it/wiki/atributos#cartiomilitaryspecialty)
*   **Descrizione**: Specializzazione o qualifica militare occupazionale (es: *Trasmissioni, Fanteria, Sanità*).
*   **Sintassi**: DirectoryString
*   **Valenza**: Multivalore (l'attore può avere qualifiche multiple)

### Altri Attributi:
*   `cartioServiceNumber`: Numero di matricola militare / identità funzionale.
*   `cartioMilitaryUnitDN`: DN di identificazione dell'Organizzazione Militare a cui appartiene.