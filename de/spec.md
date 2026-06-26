# Technische Spezifikation des CARTIO-Protokolls

Diese Spezifikation definiert den technischen und protokollarischen Kern von **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*). 

Das Protokoll basiert auf der effizienten Wiederverwendung des LDAPv3-Ökosystems (Lightweight Directory Access Protocol) und der ASN.1 BER Binärserialisierungsgrammatik.

---

## 1. Objektbezeichner (OIDs)
CARTIO ist hierarchisch unter einem registrierten numerischen Namensraum strukturiert. Die Hierarchie folgt den Richtlinien der Empfehlung **ITU-T X.660**:

*   **Root-Bogen**: `1.3.6.1.4.1.61409` (Beispiel/Registrierungs-Enterprise-OID)
*   **CARTIO-Modul**: `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Objektklassen (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Attributtypen (AttributeTypes)**

Diese saubere Segmentierung stellt sicher, dass jedes neu hinzugefügte taktische Attribut einen weltweit eindeutigen numerischen Bezeichner besitzt, wodurch Kollisionen mit anderen Verzeichnisdiensten vermieden werden.

---

## 2. Binäre Serialisierung: ASN.1 BER
In taktischen Szenarien zählt jedes übertragene Byte. Während der SCIM-Standard das textuelle JSON-Format über HTTP verwendet, nutzt CARTIO die **ASN.1 BER (Basic Encoding Rules)**-Kodierung nach der Norm **ITU-T X.690**:

*   **TLV-Format (Tag-Length-Value)**: Jedes Datenelement wird durch identifizierende Tags und abgrenzende Byte-Längen gekapselt.
*   **Thermodynamische Effizienz**: Die Darstellung des Paares `"usuario_id": "12345"` verbraucht 21 Bytes im textuellen UTF-8, während die binäre BER-Kodierung von LDAP dies auf nur **3 Bytes** Nutzlast reduziert.
*   **Bandbreiteneinsparung**: Reduziert den gesamten Protokoll-Overhead von **633% auf 21%** und verhindert so die Überlastung des beeinträchtigten Funkkanals.

---

## 3. Eventuelle Replikation (Syncrepl)
Die taktische Synchronisierung von CARTIO in *Disconnected, Intermittent, Limited* (DIL) Umgebungen stützt sich auf die LDAP-Inhaltssynchronisations-Engine (**RFC 4533**):

1.  **Persistente Verbindungen**: Nutzt die Persistenz der TCP-Sitzung (LDAPS), um wiederholte TLS-Handshakes auf Kanälen mit hohem RTT (GEO-Satelliten) zu vermeiden.
2.  **Synchronisations-Cookies**: Der Konsumenten-Knoten überträgt ein Cookie, das die *Change Sequence Number* (CSN) seines letzten bekannten Zustands enthält.
3.  **Delta-Synchronisation**: Der Provider wertet das Cookie aus und überträgt nur die geänderten Datensätze (Deltas), was den Overhead minimiert.
4.  **Eventuelle Konsistenz**: Ermöglicht die vollständige Trennung und garantiert die automatische Konvergenz und Konfliktlösung, sobald das Signal (Funk, LoRa, Satellit) wiederhergestellt ist.