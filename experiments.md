# Estudos Experimentais e Validação Empírica

Os testes de validação do Projeto CARTIO foram desenhados sob o ciclo da metodologia *Design Science Research (DSR)*, focando em medir quantitativamente o limite operacional da sincronização sob condições degradadas.

---

## 1. Emulação de Rede com Perda Crítica
Utilizando a ferramenta do Kernel Linux **NetEm** no laboratório de testes, as transações de dados de identidade e replicação foram submetidas a três níveis progressivos de degradação física:

| Cenário | Latência (ms) | Perda de Pacotes (%) | Jitter (ms) | Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **Nominal (Baseline)** | 20 ms | 0,1% | 5 ms | Conexão ideal |
| **Degradado** | 250 ms | 15% | 50 ms | Canal de Satélite (GEO) |
| **Caos** | 1000 ms | 40% | 200 ms | Rádio Tático com Ruído |

Sob o cenário mais crítico (**Caos**), o tráfego baseado em JSON/HTTP falha continuamente devido a timeouts e saturação do BDP. O perfil CARTIO, operando de forma binária com Syncrepl, atinge a convergência de dados de forma estável, provando ser uma alternativa robusta para canais saturados.

---

## 2. O Testbed de Validação (Borda & CCO)
Para representar a aplicação operacional do projeto, foi desenvolvido um protótipo físico integrado:

*   **Dispositivo de Borda**: Um Raspberry Pi 5 acoplado a uma câmera processa localmente imagens da pista utilizando um modelo **YOLOv5** convertido para ONNX. Ele detecta fisicamente anomalias (crateras, alagamentos, barreiras).
*   **Transmissão Subgiga**: As coordenadas georreferenciadas são transmitidas via rádio **LoRaWAN (Reyax 915 MHz)** em rajadas ultracompactas, totalmente independentes de sinal celular ou internet.
*   **Painel CCO**: Um servidor de testes recebe o alerta, recalcula rotas de comboios de suprimento logístico usando as bibliotecas **NetworkX e OSMnx** e plota o desvio em tempo real no mapa operacional.

---

## 3. Reprodutibilidade Científica
Os dados brutos coletados nos testes, capturas de pacotes de rede (.pcap) e arquivos de log estão indexados no repositório público:

*   **Comunidade Zenodo**: [Comunidade CARTIO no Zenodo](https://zenodo.org/communities/cartio)
*   **Dataset Registrado**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)