# Kollaborative Evolution: Der RFC-Prozess

Das CARTIO-Projekt wurde unter den Grundsätzen von Open Source und wissenschaftlicher Zusammenarbeit konzipiert. Damit sich das Identitätsschema weiterentwickeln kann, ohne seine semantische Konsistenz und Transportleichtigkeit zu verlieren, folgen die von der Community vorgeschlagenen Änderungen einem von IETF-Standards inspirierten Modell:

---

## 1. Der RFC-Vorschlagsablauf
Jede strukturelle Änderung — sei es die Aufnahme eines neuen Attributs für Such- und Rettungsmissionen oder die Anpassung der Syntax — durchläuft die folgenden Phasen:

1.  **Vorschlagsentwurf (Draft)**: Der Entwickler oder Forscher schlägt die Änderung in den Rohdateien des Schemas vor (Ordner `schema/` des GitHub-Repositorys) und reicht den Code zur Diskussion ein.
2.  **Experimentelle Validierung**: Die Änderung wird im virtuellen Labor (unter Verwendung von Netzwerkemulationstools wie NetEm) getestet, um die Auswirkungen der neuen Datengröße bei Paketverlusten von bis zu 40% zu messen.
3.  **Schema-Überprüfung**: Das Komitee bewertet, ob das neue Attribut den Valenzbeschränkungen entspricht (Vermeidung unnötiger Multi-Werte) und die Abwärtskompatibilität gewahrt bleibt.
4.  **Integration und Wiki**: Die Spezifikation wird konsolidiert und das Schema-Wiki wird aktualisiert, um den neuen Standard für zukünftige Anwender zu dokumentieren.

---

## 2. Wie man beiträgt
Interessierte Entwickler und Forscher, die die Fähigkeiten des Projekts zur Katastrophenhilfe verbessern möchten, können sich direkt beteiligen:
*   Zugriff auf das Repository unter [git.cartio.org](http://git.cartio.org).
*   Eröffnung von Diskussionen über neue, im Feld benötigte Attribute.
*   Einreichung von Pull Requests zur Korrektur von Beschreibungen im Wiki oder zur Erstellung von Vorschlägen für Verbesserungen am Datenbankschema.