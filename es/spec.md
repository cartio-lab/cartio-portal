# Especificación Técnica del Protocolo CARTIO

Esta especificación define el núcleo técnico y protocolar del **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*). 

El protocolo se basa en la reutilización eficiente del ecosistema LDAPv3 (Lightweight Directory Access Protocol) y en la gramática de serialización binaria ASN.1 BER.

---

## 1. Identificadores de Objeto (OIDs)
CARTIO está estructurado de forma jerárquica bajo un espacio de nombres numérico registrado. La jerarquía sigue las directrices de la recomendación **ITU-T X.660**:

*   **Arco Raíz**: `1.3.6.1.4.1.61409` (Enterprise OID de ejemplo/registro)
*   **Módulo CARTIO**: `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Clases de Objeto (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Tipos de Atributo (AttributeTypes)**

Esta segmentación limpia garantiza que cada nuevo atributo táctico añadido posea un identificador numérico único a nivel mundial, evitando colisiones con otros servicios de directorio.

---

## 2. Serialización Binaria: ASN.1 BER
En escenarios tácticos, cada byte transmitido cuenta. Mientras que el estándar SCIM utiliza el formato textual JSON sobre HTTP, CARTIO utiliza codificación **ASN.1 BER (Basic Encoding Rules)** bajo la norma **ITU-T X.690**:

*   **Formato TLV (Tag-Length-Value)**: Cada dato está encapsulado por etiquetas identificadoras y longitudes delimitadoras de bytes.
*   **Eficiencia Termodinámica**: La representación del par `"usuario_id": "12345"` consume 21 bytes en UTF-8 textual, mientras que la codificación binaria BER de LDAP la reduce a solo **3 bytes** de carga útil.
*   **Ahorro de Ancho de Banda**: Reduce la sobrecarga (overhead) general de empaquetado del protocolo del **633% al 21%**, evitando el agotamiento de un canal de radio degradado.

---

## 3. Replicación Eventual (Syncrepl)
La sincronización táctica de CARTIO en entornos *Disconnected, Intermittent, Limited* (DIL) se apoya en el motor de sincronización de contenido LDAP (**RFC 4533**):

1.  **Conexiones Persistentes**: Utiliza la persistencia de la sesión TCP (LDAPS) para evitar handshakes TLS repetitivos en canales de alto RTT (satélite GEO).
2.  **Cookies de Sincronización**: El nodo consumidor transmite una cookie que contiene el *Change Sequence Number* (CSN) de su último estado conocido.
3.  **Sincronización Delta**: El proveedor evalúa la cookie y transmite únicamente los registros modificados (deltas), minimizando la sobrecarga.
4.  **Consistencia Eventual**: Permite la desconexión total y garantiza la convergência automática y la resolución de conflictos tan pronto como el canal de comunicación (radio, LoRa, satélite) se restablezca.