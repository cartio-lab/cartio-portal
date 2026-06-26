# Experimentelle Studien und empirische Validierung

Die Validierungstests des CARTIO-Projekts wurden im Rahmen des Zyklus der *Design Science Research (DSR)*-Methodik konzipiert, mit dem Fokus auf der quantitativen Messung der Betriebsgrenze der Synchronisation unter beeinträchtigten Bedingungen.

---

## 1. Netzwerkemulation mit kritischem Verlust
Mithilfe des Linux-Kernel-Tools **NetEm** im Testlabor wurden die Identitätsdatentransaktionen und die Replikation drei fortschreitenden Stufen physischer Beeinträchtigung unterzogen:

| Szenario | Latenz (ms) | Paketverlust (%) | Jitter (ms) | Anwendung |
| :--- | :--- | :--- | :--- | :--- |
| **Nominal (Baseline)** | 20 ms | 0,1% | 5 ms | Ideale Verbindung |
| **Beeinträchtigt** | 250 ms | 15% | 50 ms | Satellitenkanal (GEO) |
| **Chaos** | 1000 ms | 40% | 200 ms | Taktischer Funk mit Rauschen |

Unter dem kritischsten Szenario (**Chaos**) scheitert der JSON/HTTP-basierte Datenverkehr kontinuierlich aufgrund von Timeouts und BDP-Sättigung. Das CARTIO-Profil, das binär mit Syncrepl arbeitet, erreicht eine stabile Datenkonvergenz und erweist sich als robuste Alternative für überlastete Kanäle.

---

## 2. Das Validierungs-Testbed (Edge & CCO)
Um die operative Anwendung des Projekts darzustellen, wurde ein integrierter physischer Prototyp entwickelt:

*   **Edge-Gerät**: Ein an eine Kamera gekoppelter Raspberry Pi 5 verarbeitet lokal Straßenbilder unter Verwendung eines in ONNX konvertierten **YOLOv5**-Modells. Er erkennt physisch Anomalien (Schlaglöcher, Überschwemmungen, Straßensperren).
*   **Sub-GHz-Übertragung**: Die georeferenzierten Koordinaten werden über **LoRaWAN (Reyax 915 MHz)**-Funk in ultrakompakten Datenpaketen (Bursts) übertragen, völlig unabhängig von Mobilfunk- oder Internetsignalen.
*   **CCO-Dashboard (Kontrollzentrum)**: Ein Testserver empfängt den Alarm, berechnet die Routen für Logistikversorgungskolonnen unter Verwendung der Bibliotheken **NetworkX und OSMnx** neu und zeichnet die Umleitung in Echtzeit auf der operativen Karte ein.

---

## 3. Wissenschaftliche Reproduzierbarkeit
Die in den Tests gesammelten Rohdaten, Netzwerk-Paketaufzeichnungen (.pcap) und Logdateien sind in einem öffentlichen Repository indexiert:

*   **Zenodo-Community**: [CARTIO-Community auf Zenodo](https://zenodo.org/communities/cartio)
*   **Registrierter Datensatz**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)