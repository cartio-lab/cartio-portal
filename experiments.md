# Experimentos e Benchmarks de Validação

Esta seção detalha a metodologia experimental e os protótipos de teste de estresse criados para validar a robustez e sobrevivência do protocolo CARTIO.

---

## 1. Emulação de Rede Degradada (NetEm)
Utilizando o emulador de tráfego de rede do Kernel Linux (**NetEm**), foram criados cenários controlados de estresse para avaliar as taxas de convergência de identidades e o overhead de transporte:

| Cenário | Latência (ms) | Perda de Pacotes (%) | Jitter (ms) | Categoria |
| :--- | :--- | :--- | :--- | :--- |
| **Cenário 00** | 20 ms | 0,1% | 5 ms | Nominal / Baseline |
| **Cenário 01** | 250 ms | 15% | 50 ms | Degradado / Satélite |
| **Cenário 02** | 1000 ms | 40% | 200 ms | Caos / Perda Crítica |

Os ensaios científicos demonstraram que sob o **Cenário 02 (Caos)**, a pilha HTTP/REST/SCIM colapsa totalmente por timeouts. Em contrapartida, o CARTIO/LDAP obteve **100% de taxa de conclusão na sincronização**, graças ao protocolo Syncrepl binário.

---

## 2. O Experimento Físico de Borda (YOLOv5 + LoRaWAN)
Como demonstrador físico para o teatro de operações logístico, foi desenvolvido um ecossistema experimental:

1.  **Visão Computacional na Borda**: Um Raspberry Pi 5 acoplado a uma câmera processa localmente frames de estradas por meio de um modelo **YOLOv5 Nano** convertido para ONNX. Ele detecta fisicamente anomalias na pista (crateras, alagamentos, barricadas).
2.  **Transmissão por Rádio Subgiga**: Ao classificar uma anomalia, o microcomputador monta um pacote de dados leve e transmite as coordenadas geográficas através de transceptores **LoRaWAN Reyax (915 MHz)**, sem depender de internet comercial.
3.  **Simulação CCO**: O sinal é capturado por Gateways e encaminhado a um painel tático operacional em **Streamlit**. O sistema consome os eventos, penaliza as arestas no grafo da malha viária tática e recalcula rotas de comboios via algoritmos **NetworkX e OSMnx** em tempo real.

---

## 3. Repositorio Zenodo e Reprodutibilidade
Para fins de revisão por pares e integridade de pesquisa, todas as capturas de tráfego de rede (.pcap) e logs de telemetria dos cenários de perda estão publicamente indexados:

*   **Comunidade Zenodo**: [Comunidade CARTIO](https://zenodo.org/communities/cartio)
*   **DOI de Dados**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)