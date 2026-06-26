# Studi Sperimentali e Validazione Empirica

I test di validazione del Progetto CARTIO sono stati progettati nell'ambito del ciclo della metodologia *Design Science Research (DSR)*, concentrandosi sulla misurazione quantitativa del limite operativo della sincronizzazione in condizioni degradate.

---

## 1. Emulazione di Rete con Perdita Critica
Utilizzando lo strumento del kernel Linux **NetEm** nel laboratorio di test, le transazioni di dati di identità e replica sono state sottoposte a tre livelli progressivi di degradazione fisica:

| Scenario | Latenza (ms) | Perdita di Pacchetti (%) | Jitter (ms) | Applicazione |
| :--- | :--- | :--- | :--- | :--- |
| **Nominale (Baseline)** | 20 ms | 0,1% | 5 ms | Connessione ideale |
| **Degradato** | 250 ms | 15% | 50 ms | Canale Satellitare (GEO) |
| **Caos** | 1000 ms | 40% | 200 ms | Radio Tattica con Rumore |

Nello scenario più critico (**Caos**), il traffico basato su JSON/HTTP fallisce continuamente a causa di timeout e saturazione del BDP. Il profilo CARTIO, operando in modo binario con Syncrepl, raggiunge la convergenza dei dati in modo stabile, dimostrando di essere un'alternativa robusta per i canali saturi.

---

## 2. Il Testbed di Validazione (Edge & CCO)
Per rappresentare l'applicazione operativa del progetto, è stato sviluppato un prototipo fisico integrato:

*   **Dispositivo Edge (Bordo)**: Un Raspberry Pi 5 accoppiato a una telecamera elabora localmente le immagini della pista utilizzando un modello **YOLOv5** convertito in ONNX. Rileva fisicamente anomalie (crateri, allagamenti, barriere).
*   **Trasmissione Sub-GHz**: Le coordinate georeferenziate vengono trasmesse via radio **LoRaWAN (Reyax 915 MHz)** in raffiche ultracompatte, totalmente indipendenti dal segnale cellulare o internet.
*   **Pannello CCO**: Un server di test riceve l'allerta, ricalcola le rotte dei convogli di rifornimento logistico utilizzando le librerie **NetworkX e OSMnx** e traccia la deviazione in tempo reale sulla mappa operativa.

---

## 3. Riproducibilità Scientifica
I dati grezzi raccolti nei test, le catture dei pacchetti di rete (.pcap) e i file di log sono indicizzati nel repository pubblico:

*   **Comunità Zenodo**: [Comunità CARTIO su Zenodo](https://zenodo.org/communities/cartio)
*   **Dataset Registrato**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)