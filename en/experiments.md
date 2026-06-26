# Experimental Studies and Empirical Validation

The validation tests for the CARTIO Project were designed under the lifecycle of the *Design Science Research (DSR)* methodology, focusing on quantitatively measuring the operational limits of synchronization under degraded conditions.

---

## 1. Network Emulation with Critical Loss
Using the Linux Kernel **NetEm** tool in the test lab, identity data transactions and replication were subjected to three progressive levels of physical degradation:

| Scenario | Latency (ms) | Packet Loss (%) | Jitter (ms) | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Nominal (Baseline)** | 20 ms | 0.1% | 5 ms | Ideal connection |
| **Degraded** | 250 ms | 15% | 50 ms | Satellite Channel (GEO) |
| **Chaos** | 1000 ms | 40% | 200 ms | Tactical Radio with Noise |

Under the most critical scenario (**Chaos**), JSON/HTTP-based traffic fails continuously due to timeouts and BDP saturation. The CARTIO profile, operating in binary format with Syncrepl, achieves stable data convergence, proving to be a robust alternative for saturated channels.

---

## 2. The Validation Testbed (Edge & CCO)
To represent the project's operational application, an integrated physical prototype was developed:

*   **Edge Device**: A Raspberry Pi 5 coupled with a camera processes track images locally using a **YOLOv5** model converted to ONNX. It physically detects anomalies (craters, flooding, barriers).
*   **Sub-GHz Transmission**: The georeferenced coordinates are transmitted via **LoRaWAN (Reyax 915 MHz)** radio in ultra-compact bursts, completely independent of cellular or internet signals.
*   **CCO Dashboard**: A test server receives the alert, recalculates routes for logistics supply convoys using **NetworkX and OSMnx** libraries, and plots the bypass in real-time on the operational map.

---

## 3. Scientific Reproducibility
The raw data collected in the tests, network packet captures (.pcap), and log files are indexed in the public repository:

*   **Zenodo Community**: [CARTIO Community on Zenodo](https://zenodo.org/communities/cartio)
*   **Registered Dataset**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)