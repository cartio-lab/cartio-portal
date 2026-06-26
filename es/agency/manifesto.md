# Manifiesto de Supervivencia de los Datos

El **Proyecto CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*) surge de una necesidad de ingeniería crítica: **proveer resiliencia de información en entornos caracterizados por conexiones inestables o completamente inexistentes.**

En situaciones de catástrofes naturales o conflictos, las redes de telecomunicaciones de alta velocidad (4G/5G, cables de fibra óptica e infraestructura en la nube) son comúnmente las primeras en sufrir interrupciones. La dependencia de conexiones persistentes impide que los equipos en el terreno tomen decisiones rápidas sobre quién está autorizado a acceder a áreas o recursos restringidos.

---

## 1. El Punto de Ruptura Protocolar
La industria de la tecnología de la información concentró sus esfuerzos en arquitecturas web altamente verbosas (HTTP/JSON/REST). Aunque óptimas para redes urbanas abundantes, presentan límites severos en escenarios de alta entropia (pérdida de paquetes y alta latencia):

*   **Sobrecarga de Transporte**: Mensajes en texto abierto como JSON añaden bytes redundantes que saturan los canales de radio degradados.
*   **Chattiness (Múltiples Diálogos)**: El establecimiento de conexiones HTTP clásicas exige transacciones de handshake sucesivas, lo que causa tiempos de espera agotados (timeouts) bajo alta pérdida de datos.
*   **Colapso Local**: Sin conectividad con la nube, los nodos locales se vuelven incapaces de autenticar a nuevos voluntarios o equipos de apoyo, paralizando la respuesta logística.

---

## 2. La Ingeniería de Supervivencia
CARTIO propone una alternativa de estandarización viable y eficiente:

1.  **Compactación Estricta**: Utilización del protocolo LDAP con codificación binaria **ASN.1 BER** para reducir la carga útil transmitida por radio.
2.  **Replicación Autónoma**: Mecanismo oportunista de sincronización basado en el estándar **Syncrepl**, permitiendo consistencia eventual entre bases de datos locales tan pronto como se restablezca un enlace.
3.  **Compatibilidad Nativa**: Reutilización de un protocolo consolidado hace más de treinta años y soportado de fábrica por la mayoría de los activos de red, microcontroladores y sistemas operativos, eliminando la dependencia de middlewares pesados.