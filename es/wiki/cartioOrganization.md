# Classe de Objeto: cartioOrganization

Diferente das classes de pessoas que são auxiliares, a `cartioOrganization` é uma classe **estrutural** (`STRUCTURAL`). Ela mapeia as organizações parceiras no teatro de operações (batalhões, órgãos governamentais, hospitais, agências civis) e seus endpoints de comunicação.

*   **OID da Classe**: `1.3.6.1.4.1.61409.600.1.4`
*   **Superclasse**: `organization`
*   **Tipo**: `STRUCTURAL`

---

## Atributos Obrigatórios (MUST)

### `organizationName`
*   **Descrição**: Nome oficial da organização participante.

---

## Atributos Permitidos (MAY)

### `cartioOrganizationType`
*   **Descrição**: Categoria (ex: *Força Armada, Defesa Civil, Hospital, ONGs*).

### `cartioPocTechnical`
*   **Descrição**: DN do Ponto de Contato (PoC) técnico da TI/Comunicações.

### `cartioPocAdministrative`
*   **Descrição**: DN do PoC administrativo ou operacional.

### `cartioInteroperabilityServiceEndpoint`
*   **Descrição**: Endereço IP ou URI do nó servidor CARTIO exposto por esta organização.

### `cartioDataProtocolSupported`
*   **Descrição**: Protocolos suportados para tráfego (ex: *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Descrição**: Polígono de coordenadas geográficas de atuação da organização.