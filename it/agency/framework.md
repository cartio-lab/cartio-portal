# Evoluzione Collaborativa: Il Processo di RFC

Il Progetto CARTIO è stato concepito secondo i principi dell'open source e della collaborazione scientifica. Affinché lo schema delle identità possa evolversi senza perdere la sua coerenza semantica e leggerezza di trasporto, le modifiche suggerite dalla comunità seguono un modello ispirato agli standard IETF:

---

## 1. Il Flusso di Proposta di RFC
Ogni modifica strutturale — sia essa l'inclusione di un nuovo attributo per missioni di ricerca e salvataggio o l'adeguamento della sintassi — passa attraverso le seguenti fasi:

1.  **Draft di Proposta**: Lo sviluppatore o ricercatore propone la modifica nei file grezzi dello schema (cartella `schema/` del repository GitHub) e invia il codice per la discussione.
2.  **Validazione Sperimentale**: La modifica viene sottoposta al laboratorio virtuale (utilizzando strumenti di emulazione di rete come NetEm) per misurare l'impatto della nuova dimensione dei dati sotto perdite fino al 40%.
3.  **Revisione dello Schema**: Il comitato valuta se il nuovo attributo rispetta i vincoli di valenza (evitando multi-valori non necessari) e se mantiene la compatibilità retroattiva.
4.  **Integrazione e Wiki**: La specifica viene consolidata e la Wiki dello Schema viene aggiornata per documentare il nuovo standard per i futuri utilizzatori.

---

## 2. Come Contribuire
Gli sviluppatori e i ricercatori interessati a migliorare le capacità di risposta ai disastri del progetto possono partecipare direttamente:
*   Accedendo al repository su [git.cartio.org](http://git.cartio.org).
*   Aprendo discussioni sui nuovi attributi necessari sul campo.
*   Inviando Pull Request per correggere le descrizioni nella wiki o proporre miglioramenti dello schema del database.