# Manifesto per la Sopravvivenza dei Dati

Il **Progetto CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*) nasce da una necessità ingegneristica critica: **fornire resilienza informativa in ambienti caratterizzati da connessioni instabili o completamente inesistenti.**

Nelle situazioni di catastrofi naturali o conflitti, le reti di telecomunicazione ad alta velocità (4G/5G, cavi in fibra ottica e infrastrutture cloud) sono comunemente le prime a subire interruzioni. La dipendenza da connessioni persistenti impedisce alle squadre sul campo di prendere decisioni rapide su chi è autorizzato ad accedere ad aree o risorse limitate.

---

## 1. Il Punto di Rottura Protocollare
L'industria dell'information technology ha concentrato i propri sforzi su architetture web altamente verbose (HTTP/JSON/REST). Sebbene ottime per reti urbane abbondanti, esse presentano limiti severi in scenari ad alta entropia (perdita di pacchetti e alta latenza):

*   **Sovraccarico di Trasporto**: Messaggi in testo normale come JSON aggiungono byte ridondanti che saturamno i canali radio degradati.
*   **Chattiness (Dialoghi Multipli)**: L'attivazione di connessioni HTTP classiche richiede transazioni di handshake successive, il che causa timeout in caso di alta perdita di dati.
*   **Collasso Locale**: Senza connettività cloud, i nodi locali diventano incapaci di autenticare nuovi volontari o squadre di supporto, paralizzando la risposta logistica.

---

## 2. L'Ingegneria della Sopravvivenza
CARTIO propone un'alternativa di standardizzazione praticabile ed efficiente:

1.  **Compressione Rigorosa**: Utilizzo del protocollo LDAP con codifica binaria **ASN.1 BER** per ridurre il payload trasmesso via radio.
2.  **Replica Autonoma**: Meccanismo opportunistico di sincronizzazione basato sullo standard **Syncrepl**, che consente la consistenza eventuale tra database locali non appena viene ripristinato un collegamento.
3.  **Compatibilità Nativa**: Riutilizzo di un protocollo consolidato da oltre trent'anni e supportato di fabbrica dalla maggior parte dei dispositivi di rete, microcontrollori e sistemi operativi, eliminando la dipendenza da middleware pesanti.