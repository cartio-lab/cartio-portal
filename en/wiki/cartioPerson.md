# Object Class: cartioPerson

The `cartioPerson` class is the core of identity data in the CARTIO protocol. It is defined as an **auxiliary** (`AUXILIARY`) class, allowing its security, national, and humanitarian attributes to be dynamically attached to existing directory entries (such as classic `inetOrgPerson` or `person` classes).

*   **Class OID**: `1.3.6.1.4.1.61409.600.1.1`
*   **Superclass**: `top`
*   **Type**: `AUXILIARY`

---

## Allowed Additional Attributes (MAY)

The class provides the following optional attributes for identity management in operation theaters and disaster scenarios:

### [cartioPersonStatus](/en/wiki/atributos#cartiopersonstatus)
*   **Description**: The general role of the actor (e.g., *Military, Civil, NGO, Volunteer*).
*   **Syntax**: DirectoryString (Case Insensitive)
*   **Valency**: Single Value

### [cartioNationality](/en/wiki/atributos#cartionationality)
*   **Description**: ISO 3166-1 alpha-2 nationality code (e.g., *BR*, *US*).
*   **Syntax**: DirectoryString (Case Insensitive)
*   **Valency**: Single Value

### [cartioSecurityClearance](/en/wiki/atributos#cartiosecurityclearance)
*   **Description**: Tactical security clearance level of the actor in compliance with X.841 / ACP 133 standards (e.g., *Confidential, Secret*).
*   **Syntax**: DirectoryString
*   **Valency**: Single Value

### [cartioEmergencyContactDN](/en/wiki/atributos#cartioemergencycontactdn)
*   **Description**: The Distinguished Name (DN) of the entry corresponding to the emergency contact.
*   **Syntax**: DistinguishedName
*   **Valency**: Single Value

### Other Civil Identification Attributes:
*   `cartioFathersName`: Actor's father's name (DirectoryString).
*   `cartioMothersName`: Actor's mother's name (DirectoryString).
*   `cartioPersonalEmail`: Private e-mail address (DirectoryString).