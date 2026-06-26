# Manifeste de la Survivabilité des Données

Le **Projet CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*) découle d'un besoin d'ingénierie critique : **assurer la résilience informationnelle dans des environnements caractérisés par des connexions instables ou complètement inexistantes.**

Lors de catastrophes naturelles ou de conflits, les réseaux de télécommunications à haut débit (4G/5G, câbles à fibre optique et infrastructures cloud) sont généralement les premiers à subir des pannes. La dépendance vis-à-vis de connexions persistantes empêche les équipes sur le terrain de prendre des décisions rapides concernant l'autorisation d'accès des personnes aux zones ou ressources restreintes.

---

## 1. Le Point de Rupture Protocolaire
L'industrie des technologies de l'information a concentré ses efforts sur des architectures web extrêmement verbeuses (HTTP/JSON/REST). Bien que parfaitement adaptées aux réseaux urbains abondants, elles présentent de sérieuses limites dans des scénarios à forte entropie (pertes de paquets et latence élevée) :

*   **Surcharge de Transport** : Les messages en texte clair tels que JSON ajoutent des octets redondants qui saturent les canaux radio dégradés.
*   **Chattiness (Multiplicité des Échanges)** : L'établissement de connexions HTTP classiques nécessite des transactions de handshake successives, ce qui entraîne des dépassements de temps (timeouts) sous forte perte de données.
*   **Effondrement Local** : En l'absence de connectivité avec le cloud, les terminaux locaux deviennent incapables d'authentifier de nouveaux volontaires ou des équipes de soutien, paralysant ainsi la réponse logistique.

---

## 2. L'Ingénierie de la Survivabilité
CARTIO propose une alternative de standardisation viable et efficace :

1.  **Compression Stricte** : Utilisation du protocole LDAP avec codage binaire **ASN.1 BER** pour réduire la charge utile transmise par radio.
2.  **Réplication Autonome** : Mécanisme opportuniste de synchronisation basé sur le standard **Syncrepl**, permettant une cohérence éventuelle entre les bases de données locales dès qu'une liaison est rétablie.
3.  **Compatibilité Native** : Réutilisation d'un protocole consolidé depuis plus de trente ans et supporté nativement par la plupart des actifs réseau, microcontrôleurs et systèmes d'exploitation, éliminant ainsi toute dépendance à l'égard de middlewares lourds.