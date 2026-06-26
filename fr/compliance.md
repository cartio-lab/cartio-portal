# Conformité Humanitaire et Souveraineté de la Défense

Le protocole CARTIO a été conçu pour intervenir dans des scénarios où la vie humaine et la sécurité des communications s'opèrent dans des conditions extrêmes. C'est pourquoi la spécification répond aux normes du droit humanitaire et de l'interopérabilité internationale :

---

## 1. Conventions de Genève (Annexe I au Protocole I)
L'Annexe I au Protocole I des Conventions de Genève régit les moyens d'identification du personnel médical et de la défense civile dans les conflits armés. 

CARTIO modélise formellement la protection du personnel dans son Schéma grâce à des attributs spécifiques :
*   `cartioGenevaRole` : Définit la classification protégée du professionnel (ex : *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus` : Statut du droit international humanitaire qui garantit l'immunité (ex : *Protected*).

---

## 2. Directives de l'ONU / OCHA
Le Bureau de la coordination des affaires humanitaires des Nations Unies (**OCHA**) établit des directives strictes sur la gouvernance des données en situation de crise afin de protéger la vie privée des victimes et des volontaires. 

CARTIO intègre :
*   **Contrôle d'Accès Granulaire (ACLs)** : Blocage strict de la lecture des métadonnées biométriques et des niveaux d'habilitation grâce à des ACLs dynamiques configurées au moment de l'exécution (Run-Time) dans le démon OpenLDAP.
*   **Souveraineté Technologique** : Utilisation de standards ouverts non propriétaires, garantissant l'autosuffisance de l'État sans dépendance logique vis-à-vis de fournisseurs de cloud étrangers.

---

## 3. NATO FMN (Federated Mission Networking)
Le FMN est la spécification de l'OTAN destinée à permettre la fédération immédiate de réseaux dans les opérations de coalition multinationales. CARTIO implémente la fédération dès le « Jour Zéro » grâce à la structure hiérarchique de LDAP et aux cookies Syncrepl, permettant la synchronisation en temps réel des identités entre différentes forces.