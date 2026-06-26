# Classe di Oggetto: cartioPerson

La classe `cartioPerson` è il nucleo di dati delle identità del protocollo CARTIO. È definita come una classe **ausiliaria** (`AUXILIARY`), consentendo ai suoi attributi di sicurezza, nazionali e umanitari di essere associati dinamicamente a voci di directory esistenti (como le classi classiche `inetOrgPerson` o `person`).

*   **OID della Classe**: `1.3.6.1.4.1.61409.600.1.1`
*   **Superclasse**: `top`
*   **Tipo**: `AUXILIARY`

---

## Attributi Aggiuntivi Consentiti (MAY)

La classe fornisce i seguenti attributi opzionali per la gestione delle identità nei teatri di operazioni e disastri:

### [cartioPersonStatus](/it/wiki/atributos#cartiopersonstatus)
*   **Descrizione**: Il ruolo generale dell'attore (es: *Military, Civil, NGO, Volunteer*).
*   **Sintassi**: DirectoryString (Case Insensitive)
*   **Valenza**: Valore Singolo

### [cartioNationality](/it/wiki/atributos#cartionationality)
*   **Descrizione**: Codice di nazionalità ISO 3166-1 alpha-2 (es: *BR*, *US*).
*   **Sintassi**: DirectoryString (Case Insensitive)
*   **Valenza**: Valore Singolo

### [cartioSecurityClearance](/it/wiki/atributos#cartiosecurityclearance)
*   **Descrizione**: Livello di abilitazione di sicurezza tattica dell'attore in conformità con gli standard X.841 / ACP 133 (es: *Confidenziale, Segreto*).
*   **Sintassi**: DirectoryString
*   **Valenza**: Valore Singolo

### [cartioEmergencyContactDN](/it/wiki/atributos#cartioemergencycontactdn)
*   **Descrizione**: Il Distinguished Name (DN) della voce corrispondente al contatto di emergenza.
*   **Sintassi**: DistinguishedName
*   **Valenza**: Valore Singolo

### Altri Attributi di Identificazione Civile:
*   `cartioFathersName`: Nome del padre dell'attore (DirectoryString).
*   `cartioMothersName`: Nome della madre dell'attore (DirectoryString).
*   `cartioPersonalEmail`: E-mail personale (DirectoryString).