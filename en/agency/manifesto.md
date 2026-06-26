# Data Survivability Manifesto

The **CARTIO Project** (*Common Auxiliary Registry for Tactical Interoperable Operations*) arises from a critical engineering need: **to provide informational resilience in environments characterized by unstable or completely nonexistent connections.**

In natural disaster situations or conflicts, high-speed telecommunications networks (4G/5G, fiber optic cables, and cloud infrastructure) are commonly the first to suffer disruption. Dependence on persistent connections prevents field teams from making rapid decisions about who is authorized to access restricted areas or resources.

---

## 1. The Protocol Breaking Point
The information technology industry has concentrated its efforts on highly verbose web architectures (HTTP/JSON/REST). Although excellent for abundant urban networks, they present severe limits in high-entropy scenarios (packet loss and high latency):

*   **Transport Overhead**: Open-text messages like JSON add redundant bytes that saturate degraded radio channels.
*   **Chattiness (Multiple Dialogues)**: Establishing classic HTTP connections requires successive handshake transactions, causing timeouts under high data loss.
*   **Local Collapse**: Without cloud connectivity, local endpoints become unable to authenticate new volunteers or support teams, paralyzing the logistical response.

---

## 2. Survivability Engineering
CARTIO proposes a viable and efficient standardization alternative:

1.  **Strict Compression**: Use of the LDAP protocol with **ASN.1 BER** binary encoding to shrink the payload transmitted over radio.
2.  **Autonomous Replication**: Opportunistic synchronization mechanism based on the **Syncrepl** standard, allowing eventual consistency between local databases as soon as a link is re-established.
3.  **Native Compatibility**: Reuse of a consolidated protocol defined over thirty years ago and supported out-of-the-box by most network assets, microcontrollers, and operating systems, eliminating dependence on heavy middleware.