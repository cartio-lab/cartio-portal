# Object Class: cartioOrganization

Unlike the person classes which are auxiliary, `cartioOrganization` is a **structural** (`STRUCTURAL`) class. It maps partner organizations in the theater of operations (battalions, government agencies, hospitals, civil agencies) and their communication endpoints.

*   **Class OID**: `1.3.6.1.4.1.61409.600.1.4`
*   **Superclass**: `organization`
*   **Type**: `STRUCTURAL`

---

## Required Attributes (MUST)

### `organizationName`
*   **Description**: Official name of the participating organization.

---

## Allowed Attributes (MAY)

### `cartioOrganizationType`
*   **Description**: Category (e.g., *Armed Forces, Civil Defense, Hospital, NGOs*).

### `cartioPocTechnical`
*   **Description**: DN of the technical IT/Communications Point of Contact (PoC).

### `cartioPocAdministrative`
*   **Description**: DN of the administrative or operational PoC.

### `cartioInteroperabilityServiceEndpoint`
*   **Description**: IP address or URI of the CARTIO server node exposed by this organization.

### `cartioDataProtocolSupported`
*   **Description**: Supported protocols for traffic (e.g., *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Description**: Polygon of geographic coordinates of the organization's area of operation.