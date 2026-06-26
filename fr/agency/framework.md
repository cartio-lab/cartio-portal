# Évolution Collaborative : Le Processus de RFC

Le Projet CARTIO a été conçu selon les principes de l'open source et de la collaboration scientifique. Afin que le schéma d'identités puisse évoluer sans perdre sa cohérence sémantique et sa légèreté de transport, les modifications suggérées par la communauté suivent un modèle inspiré des standards de l'IETF :

---

## 1. Le Flux de Proposition de RFC
Toute modification structurelle — qu'il s'agisse de l'inclusion d'un nouvel attribut pour les missions de recherche et de sauvetage ou de l'adaptation de la syntaxe — passe par les phases suivantes :

1.  **Brouillon de Proposition (Draft)** : Le développeur ou chercheur propose le changement dans les fichiers bruts du schéma (dossier `schema/` du dépôt GitHub) et soumet le code pour discussion.
2.  **Validation Expérimentale** : La modification est soumise au laboratoire virtuel (en utilisant des outils d'émulation de réseau comme NetEm) pour mesurer l'impact de la nouvelle taille de données sous des pertes allant jusqu'à 40%.
3.  **Révision du Schéma** : Le comité évalue si le nouvel attribut respecte les contraintes de valence (en évitant les multi-valeurs inutiles) et s'il maintient la compatibilité ascendante (rétrocompatibilité).
4.  **Intégration et Wiki** : La spécification est consolidée et le Wiki du Schéma est mis à jour pour documenter le nouveau standard pour les futurs utilisateurs.

---

## 2. Comment Contribuer
Les développeurs et chercheurs souhaitant améliorer les capacités de réponse aux catastrophes du projet peuvent participer directement :
*   En accédant au dépôt sur [git.cartio.org](http://git.cartio.org).
*   En ouvrant des discussions sur les nouveaux attributs requis sur le terrain.
*   En envoyant des Pull Requests pour corriger des descriptions dans le wiki ou proposer des améliorations dans le schéma de la base de données.