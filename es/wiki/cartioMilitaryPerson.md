# Clase de Objeto: cartioMilitaryPerson

La clase `cartioMilitaryPerson` extiende la identidad táctica para el personal de las fuerzas de defensa y seguridad, permitiendo el mapeo de rangos, ramas de servicio y especialidades tácticas dentro del directorio.

*   **OID de la Clase**: `1.3.6.1.4.1.61409.600.1.2`
*   **Superclase**: `top`
*   **Tipo**: `AUXILIARY`

---

## Atributos Adicionales Permitidos (MAY)

### [cartioMilitaryRank](/es/wiki/atributos#cartiomilitaryrank)
*   **Descripción**: Rango o graduación militar (ej: *Teniente, Mayor, Sargento*).
*   **Sintaxis**: DirectoryString
*   **Valencia**: Valor Único

### [cartioBranchOfService](/es/wiki/atributos#cartiobranchofservice)
*   **Descripción**: Rama de la fuerza armada o seguridad pública (ej: *Ejército, Armada, Fuerza Aérea*).
*   **Sintaxis**: DirectoryString
*   **Valencia**: Valor Único

### [cartioMilitarySpecialty](/es/wiki/atributos#cartiomilitaryspecialty)
*   **Descripción**: Especialidad Ocupacional Militar o cualificación (ej: *Comunicaciones, Infantería, Sanidad*).
*   **Sintaxis**: DirectoryString
*   **Valencia**: Multivalorado (el actor puede tener múltiples cualificaciones)

### Otros Atributos:
*   `cartioServiceNumber`: Número de registro militar / identidad funcional.
*   `cartioMilitaryUnitDN`: DN de identificación de la Organización Militar a la que pertenece.