# Classe di Oggetto: cartioOrganization

A differenza delle classi per le persone che sono ausiliarie, `cartioOrganization` è una classe **strutturale** (`STRUCTURAL`). Essa mappa le organizzazioni partner nel teatro delle operazioni (battaglioni, enti governativi, ospedali, agenzie civili) e i loro endpoint di comunicazione.

*   **OID della Classe**: `1.3.6.1.4.1.61409.600.1.4`
*   **Superclasse**: `organization`
*   **Tipo**: `STRUCTURAL`

---

## Attributi Obbligatori (MUST)

### `organizationName`
*   **Descrizione**: Nome ufficiale dell'organizzazione partecipante.

---

## Attributi Consentiti (MAY)

### `cartioOrganizationType`
*   **Descrizione**: Categoria (es: *Forze Armate, Protezione Civile, Ospedale, ONG*).

### `cartioPocTechnical`
*   **Descrizione**: DN del Punto di Contatto (PoC) tecnico per IT/Comunicazioni.

### `cartioPocAdministrative`
*   **Descrizione**: DN del PoC amministrativo o operativo.

### `cartioInteroperabilityServiceEndpoint`
*   **Descrizione**: Indirizzo IP o URI del nodo server CARTIO esposto da questa organizzazione.

### `cartioDataProtocolSupported`
*   **Descrizione**: Protocolli supportati per il traffico (es: *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Descrizione**: Poligono delle coordinate geografiche dell'area di attività dell'organizzazione.