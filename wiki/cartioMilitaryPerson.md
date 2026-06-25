# Classe de Objeto: cartioMilitaryPerson

A classe `cartioMilitaryPerson` estende a identidade tática para o pessoal de forças de defesa e segurança, permitindo o mapeamento de patentes, ramos de serviço e especialidades táticas dentro do diretório.

*   **OID da Classe**: `1.3.6.1.4.1.61409.600.1.2`
*   **Superclasse**: `top`
*   **Tipo**: `AUXILIARY`

---

## Atributos Adicionais Permitidos (MAY)

### [cartioMilitaryRank](/wiki/atributos#cartiomilitaryrank)
*   **Descrição**: Posto ou graduação militar (ex: *Tenente, Major, Sargento*).
*   **Sintaxe**: DirectoryString
*   **Valência**: Valor Único

### [cartioBranchOfService](/wiki/atributos#cartiobranchofservice)
*   **Descrição**: Ramo da força armada ou segurança pública (ex: *Exército, Marinha, Aeronáutica*).
*   **Sintaxe**: DirectoryString
*   **Valência**: Valor Único

### [cartioMilitarySpecialty](/wiki/atributos#cartiomilitaryspecialty)
*   **Descrição**: Especialidade Ocupacional Militar ou qualificação (ex: *Comunicações, Infantaria, Saúde*).
*   **Sintaxe**: DirectoryString
*   **Valência**: Multi-valorado (o ator pode ter múltiplas qualificações)

### Outros Atributos:
*   `cartioServiceNumber`: Número de registro militar / identidade funcional.
*   `cartioMilitaryUnitDN`: DN de identificação da Organização Militar à qual pertence.