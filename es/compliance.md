# Conformidad Humanitaria y Soberanía de Defensa

El protocolo CARTIO fue diseñado para actuar en escenarios donde la vida humana y la seguridad de las comunicaciones operan bajo condiciones extremas. Por ello, la especificación cumple con las normas de derecho humanitario e interoperabilidad internacional:

---

## 1. Convenios de Ginebra (Anexo I al Protocolo I)
El Anexo I al Protocolo I de los Convenios de Ginebra regula los medios de identificación del personal médico y de defensa civil en conflictos armados. 

CARTIO modela formalmente la salvaguardia del personal en su Esquema (Schema) a través de atributos específicos:
*   `cartioGenevaRole`: Define la clasificación protegida del profesional (ej: *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus`: Estado (status) del derecho internacional humanitario que garantiza la inmunidad (ej: *Protected*).

---

## 2. Directrices de la ONU / OCHA
La Oficina de las Naciones Unidas para la Coordinación de Asuntos Humanitarios (**OCHA**) establece directrices estrictas sobre la gobernanza de datos en situaciones de crisis para proteger la privacidad de víctimas y voluntarios. 

CARTIO integra:
*   **Control de Acceso Granular (ACLs)**: Bloqueo estricto de lectura de metadados biométricos y niveles de autorización por medio de ACLs dinámicas configuradas en tiempo de ejecución (Run-Time) en el demonio OpenLDAP.
*   **Soberanía Tecnológica**: Uso de estándares abiertos no propietarios, garantizando la autosuficiencia del Estado sin dependencia lógica de proveedores de nube extranjeros.

---

## 3. NATO FMN (Federated Mission Networking)
El FMN es la especificación de la OTAN para permitir la federación inmediata de redes en operaciones de coalición multinacionales. CARTIO implementa la federación en el "Día Cero" a través de la estructura jerárquica de LDAP y cookies Syncrepl, permitiendo la sincronización en tiempo real de identidades entre distintas fuerzas.