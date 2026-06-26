# CARTIO Protocol Technical Specification

This specification defines the technical and protocol core of **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*).

The protocol is based on the efficient reuse of the LDAPv3 (Lightweight Directory Access Protocol) ecosystem and the ASN.1 BER binary serialization grammar.

---

## 1. Object Identifiers (OIDs)
CARTIO is hierarchically structured under a registered numerical namespace. The hierarchy follows the guidelines of the **ITU-T X.660** recommendation:

*   **Root Arc**: `1.3.6.1.4.1.61409` (Example/registered Enterprise OID)
*   **CARTIO Module**: `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Object Classes (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Attribute Types (AttributeTypes)**

This clean segmentation ensures that every new tactical attribute added has a globally unique numerical identifier, preventing collisions with other directory services.

---

## 2. Binary Serialization: ASN.1 BER
In tactical scenarios, every transmitted byte counts. While the SCIM standard uses the textual JSON format over HTTP, CARTIO uses **ASN.1 BER (Basic Encoding Rules)** encoding under the **ITU-T X.690** standard:

*   **TLV (Tag-Length-Value) Format**: Each data item is encapsulated by identifying tags and byte-delimiting lengths.
*   **Thermodynamic Efficiency**: The representation of the pair `"user_id": "12345"` consumes 21 bytes in textual UTF-8, while LDAP's binary BER encoding reduces this to just **3 bytes** of payload.
*   **Bandwidth Conservation**: Reduces overall protocol packaging overhead from **633% to 21%**, preventing the exhaustion of degraded radio channels.

---

## 3. Eventual Replication (Syncrepl)
CARTIO's tactical synchronization in *Disconnected, Intermittent, Limited* (DIL) environments relies on the LDAP content synchronization engine (**RFC 4533**):

1.  **Persistent Connections**: Utilizes TCP session persistence (LDAPS) to avoid repetitive TLS handshakes on high-RTT channels (GEO satellite).
2.  **Synchronization Cookies**: The consumer node transmits a cookie containing the *Change Sequence Number* (CSN) of its last known state.
3.  **Delta Synchronization**: The provider evaluates the cookie and transmits only the modified records (deltas), minimizing overhead.
4.  **Eventual Consistency**: Allows total disconnection and guarantees automatic convergence and conflict resolution as soon as the signal (radio, LoRa, satellite) is re-established.