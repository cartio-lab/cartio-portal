# Études Expérimentales et Validation Empirique

Les tests de validation du Projet CARTIO ont été conçus selon le cycle de la méthodologie *Design Science Research (DSR)*, en se concentrant sur la mesure quantitative de la limite opérationnelle de la synchronisation dans des conditions dégradées.

---

## 1. Émulation de Réseau avec Perte Critique
En utilisant l'outil du noyau Linux **NetEm** dans le laboratoire de test, les transactions de données d'identité et de réplication ont été soumises à trois niveaux progressifs de dégradation physique :

| Scénario | Latence (ms) | Perte de Paquets (%) | Gigue (ms) | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Nominal (Baseline)** | 20 ms | 0,1% | 5 ms | Connexion idéale |
| **Dégradé** | 250 ms | 15% | 50 ms | Canal Satellite (GEO) |
| **Chaos** | 1000 ms | 40% | 200 ms | Radio Tactique avec Bruit |

Dans le scénario le plus critique (**Chaos**), le trafic basé sur JSON/HTTP échoue continuellement en raison des dépassements de temps (timeouts) et de la saturation du BDP. Le profil CARTIO, fonctionnant de manière binaire avec Syncrepl, parvient à une convergence stable des données, prouvant ainsi sa robustesse en tant qu'alternative pour les canaux saturés.

---

## 2. Le Banc d'Essai de Validation (Bord & CCO)
Afin de représenter l'application opérationnelle du projet, un prototype physique intégré a été développé :

*   **Dispositif de Bord (Edge)** : Un Raspberry Pi 5 couplé à une caméra traite localement les images de la route à l'aide d'un modèle **YOLOv5** converti en ONNX. Il détecte physiquement les anomalies (cratères, inondations, barrières).
*   **Transmission Sub-GHz** : Les coordonnées géoréférencées sont transmises via radio **LoRaWAN (Reyax 915 MHz)** sous forme de rafales ultra-compactes, totalement indépendantes du réseau cellulaire ou d'Internet.
*   **Panneau CCO (Centre de Contrôle Opérationnel)** : Un serveur de test reçoit l'alerte, recalcule les itinéraires des convois de ravitaillement logistique à l'aide des bibliothèques **NetworkX et OSMnx** et trace la déviation en temps réel sur la carte opérationnelle.

---

## 3. Reproductibilité Scientifique
Les données brutes collectées lors des tests, les captures de paquets réseau (.pcap) et les fichiers journaux (logs) sont indexés dans le dépôt public :

*   **Communauté Zenodo** : [Communauté CARTIO sur Zenodo](https://zenodo.org/communities/cartio)
*   **Jeu de Données Enregistré** : [10.5281/zenodo.18210149](https://doi.org/10.5281/zenodo.18210149)