# Manifest des Datenüberlebens

Das **CARTIO-Projekt** (*Common Auxiliary Registry for Tactical Interoperable Operations*) entsteht aus einer kritischen ingenieurtechnischen Notwendigkeit: **die Bereitstellung von Informationsresilienz in Umgebungen, die durch instabile oder völlig fehlende Verbindungen gekennzeichnet sind.**

Bei Naturkatastrophen oder Konflikten sind Hochgeschwindigkeits-Telekommunikationsnetze (4G/5G, Glasfaserkabel und Cloud-Infrastrukturen) in der Regel die ersten, die unterbrochen werden. Die Abhängigkeit von dauerhaften Verbindungen hindert Teams im Feld daran, schnelle Entscheidungen darüber zu treffen, wer berechtigt ist, auf eingeschränkte Bereiche oder Ressourcen zuzugreifen.

---

## 1. Der protokollarische Bruchpunkt
Die IT-Branche hat ihre Anstrengungen auf hochgradig geschwätzige Webarchitekturen (HTTP/JSON/REST) konzentriert. Obwohl diese hervorragend für reichhaltige städtische Netzwerke geeignet sind, weisen sie in Szenarien mit hoher Entropie (Paketverlust und hoher Latenz) erhebliche Einschränkungen auf:

*   **Transport-Overhead**: Klartextnachrichten wie JSON fügen redundante Bytes hinzu, die beeinträchtigte Funkkanäle überlasten.
*   **Geschwätzigkeit (Chattiness)**: Der Aufbau klassischer HTTP-Verbindungen erfordert aufeinanderfolgende Handshake-Transaktionen, was bei hohem Datenverlust zu Timeouts führt.
*   **Lokaler Kollaps**: Ohne Cloud-Konnektivität sind lokale Endpunkte nicht in der Lage, neue Freiwillige oder Unterstützungsteams zu authentifizieren, was die logistische Reaktion lähmt.

---

## 2. Die Überlebens-Ingenieurtechnik
CARTIO schlägt eine praktikable und effiziente Standardisierungsalternative vor:

1.  **Strikte Komprimierung**: Verwendung des LDAP-Protokolls mit binärer **ASN.1 BER**-Kodierung zur Reduzierung der über Funk übertragenen Nutzlast.
2.  **Autonome Replikation**: Opportunistischer Synchronisationsmechanismus basierend auf dem **Syncrepl**-Standard, der eine eventuelle Konsistenz zwischen lokalen Datenbanken ermöglicht, sobald eine Verbindung wiederhergestellt ist.
3.  **Native Kompatibilität**: Wiederverwendung eines seit über dreißig Jahren etablierten Protokolls, das von den meisten Netzwerkgeräten, Mikrocontrollern und Betriebssystemen nativ unterstützt wird, wodurch die Abhängigkeit von schwerfälliger Middleware entfällt.