# Estudios Experimentales y Validación Empírica

Las pruebas de validación del Proyecto CARTIO fueron diseñadas bajo el ciclo de la metodología *Design Science Research (DSR)*, enfocándose en medir cuantitativamente el límite operacional de la sincronización bajo condiciones degradadas.

---

## 1. Emulación de Red con Pérdida Crítica
Utilizando la herramienta del Kernel de Linux **NetEm** en el laboratorio de pruebas, las transacciones de datos de identidad y replicación fueron sometidas a tres niveles progresivos de degradación física:

| Escenario | Latencia (ms) | Pérdida de Paquetes (%) | Jitter (ms) | Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| **Nominal (Línea base)** | 20 ms | 0,1% | 5 ms | Conexión ideal |
| **Degradado** | 250 ms | 15% | 50 ms | Canal de Satélite (GEO) |
| **Caos** | 1000 ms | 40% | 200 ms | Radio Táctico con Ruido |

Bajo el escenario más crítico (**Caos**), el tráfico basado en JSON/HTTP falla continuamente debido a tiempos de espera agotados (timeouts) y saturación del BDP. El perfil CARTIO, operando de forma binaria con Syncrepl, logra la convergencia de datos de forma estable, demostrando ser una alternativa robusta para canales saturados.

---

## 2. El Banco de Pruebas (Testbed) de Validación (Borde y CCO)
Para representar la aplicación operacional del proyecto, se desarrolló un prototipo físico integrado:

*   **Dispositivo de Borde (Edge)**: Un Raspberry Pi 5 acoplado a una cámara procesa localmente imágenes de la pista utilizando un modelo **YOLOv5** convertido a ONNX. Detecta físicamente anomalías (cráteres, inundaciones, barreras).
*   **Transmisión Sub-GHz**: Las coordenadas georreferenciadas son transmitidas vía radio **LoRaWAN (Reyax 915 MHz)** en ráfagas ultracompactas, totalmente independientes de señal celular o internet.
*   **Panel CCO (Centro de Control Operativo)**: Un servidor de pruebas recibe la alerta, recalcula rutas de convoyes de suministro logístico usando las bibliotecas **NetworkX y OSMnx** y dibuja el desvío en tiempo real en el mapa operacional.

---

## 3. Reproducibilidad Científica
Los datos brutos recolectados en las pruebas, capturas de paquetes de red (.pcap) y archivos de log están indexados en el repositorio público:

*   **Comunidad Zenodo**: [Comunidad CARTIO en Zenodo](https://zenodo.org/communities/cartio)
*   **Dataset Registrado**: [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)