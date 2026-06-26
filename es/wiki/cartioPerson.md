# Clase de Objeto: cartioPerson

La clase `cartioPerson` es el núcleo de datos de identidades del protocolo CARTIO. Se define como una clase **auxiliar** (`AUXILIARY`), lo que permite que sus atributos de seguridad, nacionales y humanitarios se acoplen dinámicamente a entradas de directorios existentes (como las clases clásicas `inetOrgPerson` o `person`).

*   **OID de la Clase**: `1.3.6.1.4.1.61409.600.1.1`
*   **Superclase**: `top`
*   **Tipo**: `AUXILIARY`

---

## Atributos Adicionales Permitidos (MAY)

La clase pone a disposición los siguientes atributos opcionales para la gestión de identidades en teatros de operaciones y desastres:

### [cartioPersonStatus](/es/wiki/atributos#cartiopersonstatus)
*   **Descripción**: El rol general del actor (ej: *Military, Civil, NGO, Volunteer*).
*   **Sintaxis**: DirectoryString (Case Insensitive)
*   **Valencia**: Valor Único

### [cartioNationality](/es/wiki/atributos#cartionationality)
*   **Descripción**: Código de nacionalidad ISO 3166-1 alpha-2 (ej: *BR*, *US*).
*   **Sintaxis**: DirectoryString (Case Insensitive)
*   **Valencia**: Valor Único

### [cartioSecurityClearance](/es/wiki/atributos#cartiosecurityclearance)
*   **Descripción**: Nivel de habilitación de seguridad táctica del actor según las normas X.841 / ACP 133 (ej: *Confidencial, Secreto*).
*   **Sintaxis**: DirectoryString
*   **Valencia**: Valor Único

### [cartioEmergencyContactDN](/es/wiki/atributos#cartioemergencycontactdn)
*   **Descripción**: El Nombre Distinguido (DN) de la entrada correspondiente al contacto de emergencia.
*   **Sintaxis**: DistinguishedName
*   **Valencia**: Valor Único

### Otros Atributos de Identificación Civil:
*   `cartioFathersName`: Nombre del padre del actor (DirectoryString).
*   `cartioMothersName`: Nombre de la madre del actor (DirectoryString).
*   `cartioPersonalEmail`: Correo electrónico (E-mail) particular (DirectoryString).