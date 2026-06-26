# Specifiche Tecniche del Protocollo CARTIO

Questa specifica definisce il nucleo tecnico e protocollare di **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*). 

Il protocollo si basa sul riutilizzo efficiente dell'ecosistema LDAPv3 (Lightweight Directory Access Protocol) e sulla grammatica di serializzazione binaria ASN.1 BER.

---

## 1. Identificatori di Oggetto (OID)
CARTIO è strutturato in modo gerarchico sotto uno spazio dei nomi numerico registrato. La gerarchia segue le linee guida della raccomandazione **ITU-T X.660**:

*   **Arco Radice**: `1.3.6.1.4.1.61409` (Enterprise OID di esempio/registrazione)
*   **Modulo CARTIO**: `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Classi di Oggetti (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Tipi di Attributo (AttributeTypes)**

Questa segmentazione pulita garantisce che ogni nuovo attributo tattico aggiunto possieda un identificatore numerico univoco a livello mondiale, evitando collisioni con altri servizi di directory.

---

## 2. Serializzazione Binaria: ASN.1 BER
Negli scenari tattici, ogni byte trasmesso conta. Mentre lo standard SCIM utilizza il formato testuale JSON su HTTP, CARTIO utilizza la codifica **ASN.1 BER (Basic Encoding Rules)** ai sensi della norma **ITU-T X.690**:

*   **Formato TLV (Tag-Length-Value)**: Ogni dato è incapsulato da tag identificativi e lunghezze delimitatrici di byte.
*   **Efficienza Termodinamica**: La rappresentazione della coppia `"usuario_id": "12345"` consuma 21 byte in UTF-8 testuale, mentre la codifica binaria BER di LDAP la riduce a soli **3 byte** di payload.
*   **Risparmio di Banda**: Riduce l'overhead generale di pacchettizzazione del protocollo dal **633% al 21%**, evitando l'esaurimento del canale radio degradado.

---

## 3. Replicazione Eventuale (Syncrepl)
La sincronizzazione tattica di CARTIO in ambienti *Disconnected, Intermittent, Limited* (DIL) si basa sul motore di sincronizzazione del contenuto LDAP (**RFC 4533**):

1.  **Connessioni Persistenti**: Utilizza la persistenza della sessione TCP (LDAPS) per evitare handshake TLS ripetitivi su canali ad alto RTT (satellite GEO).
2.  **Cookie di Sincronizzazione**: Il nodo consumatore trasmette un cookie contenente il *Change Sequence Number* (CSN) del suo ultimo stato noto.
3.  **Sincronizzazione Delta**: Il provider valuta il cookie e trasmette solo i record modificati (delta), riducendo al minimo l'overhead.
4.  **Consistenza Eventual**: Consente la disconnessione totale e garantisce la convergenza automatica e la risoluzione dei conflitti non appena il segnale (radio, LoRa, satellite) viene ripristinato.