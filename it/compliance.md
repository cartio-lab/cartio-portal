# Conformità Umanitaria e Sovranità della Difesa

Il protocollo CARTIO è stato progettato per operare in scenari in cui la vita umana e la sicurezza delle comunicazioni sono sottoposte a condizioni estreme. Per questo motivo, la specifica soddisfa gli standard del diritto internazionale umanitario e di interoperabilità internazionale:

---

## 1. Convenzioni di Ginevra (Allegato I al Protocollo I)
L'Allegato I al Protocollo I delle Convenzioni di Ginevra disciplina i mezzi di identificazione del personale sanitario e di protezione civile nei conflitti armati. 

CARTIO modella formalmente la salvaguardia del personale nel suo Schema attraverso attributi specifici:
*   `cartioGenevaRole`: Definisce la classificazione protetta del professionista (es: *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus`: Stato del diritto internazionale umanitario che garantisce l'immunità (es: *Protected*).

---

## 2. Linee Guida dell'ONU / OCHA
L'Ufficio delle Nazioni Unite per il Coordinamento degli Affari Umanitari (**OCHA**) stabilisce linee guida rigide sulla governance dei dati nelle crisi per proteggere la privacy delle vittime e dei volontari. 

CARTIO integra:
*   **Controllo di Accesso Granulare (ACL)**: Blocco rigoroso della lettura di metadati biometrici e livelli di autorizzazione mediante ACL dinamiche configurate a runtime nel daemon OpenLDAP.
*   **Sovranità Tecnologica**: Uso di standard aperti non proprietari, garantendo l'autosufficienza dello Stato senza dipendenza logica da provider cloud stranieri.

---

## 3. NATO FMN (Federated Mission Networking)
L'FMN è la specifica della NATO per consentire la federazione immediata delle reti nelle operazioni di coalizione multinazionale. CARTIO implementa la federazione al "Giorno Zero" attraverso la struttura gerarchica di LDAP e i cookie Syncrepl, consentendo la sincronizzazione in tempo reale delle identità tra forze distinte.