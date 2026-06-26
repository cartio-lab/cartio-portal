# Evolución Colaborativa: El Proceso de RFC

El Proyecto CARTIO fue concebido bajo los preceptos de código abierto y colaboración científica. Para que el esquema (*schema*) de identidades pueda evolucionar sin perder su consistencia semántica y ligereza de transporte, las modificaciones sugeridas por la comunidad siguen un modelo inspirado en los estándares de la IETF:

---

## 1. El Flujo de Propuesta de RFC
Toda modificación estructural —ya sea la inclusión de un nuevo atributo para misiones de búsqueda y salvamento o la adecuación de sintaxis— pasa por las siguientes fases:

1.  **Borrador (*Draft*) de Propuesta**: El desarrollador o investigador propone el cambio en los archivos brutos del esquema (carpeta `schema/` del repositorio de GitHub) y envía el código para su discusión.
2.  **Validación Experimental**: El cambio se somete al laboratorio virtual (utilizando herramientas de emulación de red como NetEm) para medir el impacto del nuevo tamaño de datos bajo pérdidas de hasta un 40%.
3.  **Revisión del Esquema (*Schema*)**: El comité evalúa si el nuevo atributo cumple con las restricciones de valencia (evitando multivalores innecesarios) y si mantiene la compatibilidad retrospectiva (retrocompatibilidad).
4.  **Integración y Wiki**: La especificación se consolida y la Wiki del Esquema se actualiza para documentar el nuevo estándar para futuros adoptantes.

---

## 2. Cómo Contribuir
Los desarrolladores e investigadores interesados en mejorar las capacidades de respuesta ante desastres del proyecto pueden participar directamente:
*   Accediendo al repositorio en [git.cartio.org](http://git.cartio.org).
*   Abriendo discusiones sobre nuevos atributos necesarios en el terreno.
*   Enviando Pull Requests para corregir descripciones en la wiki o proponer mejoras en el esquema de base de datos.