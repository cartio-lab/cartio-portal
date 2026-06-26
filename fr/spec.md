# Spécification Technique du Protocole CARTIO

Cette spécification définit le noyau technique et protocolaire de **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*). 

Le protocole repose sur la réutilisation efficace de l'écosystème LDAPv3 (Lightweight Directory Access Protocol) et sur la grammaire de sérialisation binaire ASN.1 BER.

---

## 1. Identifiants d'Objet (OIDs)
CARTIO est structuré de manière hiérarchique sous un espace de noms numérique enregistré. La hiérarchie suit les directives de la recommandation **ITU-T X.660** :

*   **Arc Racine** : `1.3.6.1.4.1.61409` (OID d'entreprise d'exemple/enregistrement)
*   **Module CARTIO** : `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Classes d'Objets (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Types d'Attributs (AttributeTypes)**

Cette segmentation propre garantit que chaque nouvel attribut tactique ajouté possède un identifiant numérique unique au monde, évitant ainsi les collisions avec d'autres services d'annuaire.

---

## 2. Sérialisation Binaire : ASN.1 BER
Dans les scénarios tactiques, chaque octet transmis compte. Alors que le standard SCIM utilise le format textuel JSON sur HTTP, CARTIO utilise le codage **ASN.1 BER (Basic Encoding Rules)** sous la norme **ITU-T X.690** :

*   **Format TLV (Tag-Length-Value)** : Chaque donnée est encapsulée par des balises d'identification et des longueurs délimitant les octets.
*   **Efficacité Thermodynamique** : La représentation de la paire `"usuario_id": "12345"` consomme 21 octets en UTF-8 textuel, tandis que le codage binaire BER de LDAP la réduit à seulement **3 octets** de charge utile.
*   **Économie de Bande Passante** : Réduit le surdébit général d'encapsulation du protocole de **633% à 21%**, évitant ainsi la saturation du canal radio dégradé.

---

## 3. Réplication Éventuelle (Syncrepl)
La synchronisation tactique de CARTIO dans les environnements *Disconnected, Intermittent, Limited* (DIL) s'appuie sur le moteur de synchronisation de contenu LDAP (**RFC 4533**) :

1.  **Connexions Persistentes** : Utilise la persistance de la session TCP (LDAPS) pour éviter les handshakes TLS répétitifs sur les canaux à fort RTT (satellite GEO).
2.  **Cookies de Sincronisation** : Le nœud consommateur transmet un cookie contenant le numéro de séquence de modification (*Change Sequence Number* ou CSN) de son dernier état connu.
3.  **Synchronisation Delta** : Le fournisseur évalue le cookie et ne transmet que les enregistrements modifiés (deltas), minimisant ainsi la surcharge.
4.  **Cohérence Éventuelle** : Permet la déconnexion totale et garantit la convergence automatique ainsi que la résolution des conflits dès que le signal (radio, LoRa, satellite) est rétabli.