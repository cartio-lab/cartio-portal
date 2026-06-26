# Humanitäre Konformität und Verteidigungssouveränität

Das CARTIO-Protokoll wurde für den Einsatz in Szenarien entwickelt, in denen menschliches Leben und die Sicherheit der Kommunikation unter extremen Bedingungen stattfinden. Daher entspricht die Spezifikation humanitären Rechtsnormen und der internationalen Interoperabilität:

---

## 1. Genfer Abkommen (Anhang I des Zusatzprotokolls I)
Anhang I des Zusatzprotokolls I der Genfer Abkommen regelt die Kennzeichnung von Sanitäts- und Zivilschutzpersonal in bewaffneten Konflikten. 

CARTIO modelliert die Absicherung von Personal formal in seinem Schema durch spezifische Attribute:
*   `cartioGenevaRole`: Definiert die geschützte Klassifizierung des Fachpersonals (z. B. *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus`: Status des humanitären Völkerrechts, der die Immunität garantiert (z. B. *Protected*).

---

## 2. Richtlinien der UN / OCHA
Das Amt der Vereinten Nationen für die Koordinierung humanitärer Angelegenheiten (**OCHA**) legt strenge Richtlinien für die Data Governance in Krisensituationen fest, um die Privatsphäre von Opfern und Freiwilligen zu schützen. 

CARTIO integriert:
*   **Granulare Zugriffskontrolle (ACLs)**: Strenge Lesesperre für biometrische Metadaten und Freigabestufen durch dynamische ACLs, die zur Laufzeit (Run-Time) im OpenLDAP-Daemon konfiguriert werden.
*   **Technologische Souveränität**: Verwendung offener, nicht-proprietärer Standards, was die Autarkie des Staates ohne logische Abhängigkeit von ausländischen Cloud-Anbietern garantiert.

---

## 3. NATO FMN (Federated Mission Networking)
FMN ist die NATO-Spezifikation für die sofortige Föderation von Netzwerken bei multinationalen Koalitionsoperationen. CARTIO implementiert die Föderation am „Tag Null“ durch die hierarchische Struktur von LDAP und Syncrepl-Cookies, was eine Echtzeit-Synchronisation von Identitäten zwischen verschiedenen Streitkräften ermöglicht.