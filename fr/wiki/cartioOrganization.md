# Classe d'Objet : cartioOrganization

Contrairement aux classes de personnes qui sont auxiliaires, `cartioOrganization` est une classe **structurelle** (`STRUCTURAL`). Elle cartographie les organisations partenaires sur le théâtre d'opérations (bataillons, organismes gouvernementaux, hôpitaux, agences civiles) et leurs points de terminaison (endpoints) de communication.

*   **OID de la Classe** : `1.3.6.1.4.1.61409.600.1.4`
*   **Super-classe** : `organization`
*   **Type** : `STRUCTURAL`

---

## Attributs Obligatoires (MUST)

### `organizationName`
*   **Description** : Nom officiel de l'organisation participante.

---

## Attributs Autorisés (MAY)

### `cartioOrganizationType`
*   **Description** : Catégorie (ex : *Force Armée, Sécurité Civile, Hôpital, ONG*).

### `cartioPocTechnical`
*   **Description** : DN du Point de Contact (PoC) technique de l'informatique/communications.

### `cartioPocAdministrative`
*   **Description** : DN du PoC administratif ou opérationnel.

### `cartioInteroperabilityServiceEndpoint`
*   **Description** : Adresse IP ou URI du nœud serveur CARTIO exposé par cette organisation.

### `cartioDataProtocolSupported`
*   **Description** : Protocoles pris en charge pour le trafic (ex : *LDAP, Syncrepl, LoRa*).

### `cartioGeographicCoverage`
*   **Description** : Polygone de coordonnées géographiques de la zone d'action de l'organisation.