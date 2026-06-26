# Object Class: cartioMilitaryPerson

The `cartioMilitaryPerson` class extends tactical identity to defense and security forces personnel, allowing the mapping of ranks, branches of service, and tactical specialties within the directory.

*   **Class OID**: `1.3.6.1.4.1.61409.600.1.2`
*   **Superclass**: `top`
*   **Type**: `AUXILIARY`

---

## Additional Allowed Attributes (MAY)

### [cartioMilitaryRank](/en/wiki/atributos#cartiomilitaryrank)
*   **Description**: Military rank or grade (e.g., *Lieutenant, Major, Sergeant*).
*   **Syntax**: DirectoryString
*   **Valence**: Single Value

### [cartioBranchOfService](/en/wiki/atributos#cartiobranchofservice)
*   **Description**: Branch of the armed forces or public security (e.g., *Army, Navy, Air Force*).
*   **Syntax**: DirectoryString
*   **Valence**: Single Value

### [cartioMilitarySpecialty](/en/wiki/atributos#cartiomilitaryspecialty)
*   **Description**: Military Occupational Specialty or qualification (e.g., *Communications, Infantry, Health*).
*   **Syntax**: DirectoryString
*   **Valence**: Multi-valued (the actor can have multiple qualifications)

### Other Attributes:
*   `cartioServiceNumber`: Military service number / functional identity.
*   `cartioMilitaryUnitDN`: DN of the Military Organization to which the person belongs.