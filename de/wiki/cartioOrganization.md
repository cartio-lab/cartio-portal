# Objektklasse: cartioOrganization

Im Gegensatz zu den Personenklassen, die Hilfsklassen (AUXILIARY) sind, ist `cartioOrganization` eine **Strukturklasse** (`STRUCTURAL`). Sie ordnet die Partnerorganisationen im Einsatzgebiet (Bataillone, Regierungsbehörden, Krankenhäuser, zivile Agenturen) und deren Kommunikations-Endpunkte zu.

*   **Klassen-OID**: `1.3.6.1.4.1.61409.600.1.4`
*   **Superklasse**: `organization`
*   **Typ**: `STRUCTURAL`

---

## Verpflichtende Attribute (MUST)

### `organizationName`
*   **Beschreibung**: Offizieller Name der teilnehmenden Organisation.

---

## Erlaubte Attribute (MAY)

### `cartioOrganizationType`
*   **Beschreibung**: Kategorie (z. B. *Força Armada, Defesa Civil, Hospital, ONGs*).

### `cartioPocTechnical`
*   **Beschreibung**: DN des technischen Ansprechpartners (Point of Contact - PoC) für IT/Kommunikation.

### `cartioPocAdministrative`
*   **Beschreibung**: DN des administrativen oder operativen Ansprechpartners (PoC).

### `cartioInteroperabilityServiceEndpoint`
*   **Beschreibung**: IP-Adresse oder URI des von dieser Organisation bereitgestellten CARTIO-Serverknotens.

### `cartioDataProtocolSupported`
*   **Beschreibung**: Unterstützte Protokolle für den Datenverkehr (z. B. *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Beschreibung**: Polygon geografischer Koordinaten des Einsatzbereichs der Organisation.