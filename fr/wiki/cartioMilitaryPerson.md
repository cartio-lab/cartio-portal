# Classe d'Objet : cartioMilitaryPerson

La classe `cartioMilitaryPerson` étend l'identité tactique au personnel des forces de défense et de sécurité, permettant le mappage des grades, des branches de service et des spécialités tactiques au sein de l'annuaire.

*   **OID de la Classe** : `1.3.6.1.4.1.61409.600.1.2`
*   **Super-classe** : `top`
*   **Type** : `AUXILIARY`

---

## Attributs Additionnels Autorisés (MAY)

### [cartioMilitaryRank](/fr/wiki/atributos#cartiomilitaryrank)
*   **Description** : Grade ou rang militaire (ex : *Lieutenant, Major, Sergent*).
*   **Syntaxe** : DirectoryString
*   **Valence** : Valeur Unique

### [cartioBranchOfService](/fr/wiki/atributos#cartiobranchofservice)
*   **Description** : Branche de la force armée ou de la sécurité publique (ex : *Armée de Terre, Marine, Armée de l'Air*).
*   **Syntaxe** : DirectoryString
*   **Valence** : Valeur Unique

### [cartioMilitarySpecialty](/fr/wiki/atributos#cartiomilitaryspecialty)
*   **Description** : Spécialité militaire professionnelle ou qualification (ex : *Transmissions, Infanterie, Santé*).
*   **Syntaxe** : DirectoryString
*   **Valence** : Multi-valeur (l'acteur peut avoir plusieurs qualifications)

### Autres Attributs :
*   `cartioServiceNumber` : Numéro d'enregistrement militaire / identité fonctionnelle.
*   `cartioMilitaryUnitDN` : DN d'identification de l'Organisation Militaire à laquelle il appartient.