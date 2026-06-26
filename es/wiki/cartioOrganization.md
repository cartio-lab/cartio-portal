# Clase de Objeto: cartioOrganization

A diferencia de las clases de personas que son auxiliares, `cartioOrganization` es una clase **estructural** (`STRUCTURAL`). Mapea las organizaciones asociadas en el teatro de operaciones (batallones, organismos gubernamentales, hospitales, agencias civiles) y sus endpoints de comunicación.

*   **OID de la Clase**: `1.3.6.1.4.1.61409.600.1.4`
*   **Superclase**: `organization`
*   **Tipo**: `STRUCTURAL`

---

## Atributos Obligatorios (MUST)

### `organizationName`
*   **Descripción**: Nombre oficial de la organización participante.

---

## Atributos Permitidos (MAY)

### `cartioOrganizationType`
*   **Descripción**: Categoría (ej: *Fuerza Armada, Defensa Civil, Hospital, ONGs*).

### `cartioPocTechnical`
*   **Descripción**: DN del Punto de Contacto (PoC) técnico de TI/Comunicaciones.

### `cartioPocAdministrative`
*   **Descripción**: DN del PoC administrativo u operacional.

### `cartioInteroperabilityServiceEndpoint`
*   **Descripción**: Dirección IP o URI del nodo servidor CARTIO expuesto por esta organización.

### `cartioDataProtocolSupported`
*   **Descripción**: Protocolos soportados para el tráfico (ej: *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Descripción**: Polígono de coordenadas geográficas de actuación de la organización.