# Classe de Objeto: cartioPerson

A classe `cartioPerson` é o núcleo de dados de identidades do protocolo CARTIO. Ela é definida como uma classe **auxiliar** (`AUXILIARY`), permitindo que seus atributos de segurança, nacionais e humanitários sejam acoplados dinamicamente a entradas de diretórios existentes (como classes clássicas `inetOrgPerson` ou `person`).

*   **OID da Classe**: `1.3.6.1.4.1.61409.600.1.1`
*   **Superclasse**: `top`
*   **Tipo**: `AUXILIARY`

---

## Atributos Adicionais Permitidos (MAY)

A classe disponibiliza os seguintes atributos opcionais para o gerenciamento de identidades em teatros de operações e desastres:

### [cartioPersonStatus](/wiki/atributos#cartiopersonstatus)
*   **Descrição**: O papel geral do ator (ex: *Military, Civil, NGO, Volunteer*).
*   **Sintaxe**: DirectoryString (Case Insensitive)
*   **Valência**: Valor Único

### [cartioNationality](/wiki/atributos#cartionationality)
*   **Descrição**: Código de nacionalidade ISO 3166-1 alpha-2 (ex: *BR*, *US*).
*   **Sintaxe**: DirectoryString (Case Insensitive)
*   **Valência**: Valor Único

### [cartioSecurityClearance](/wiki/atributos#cartiosecurityclearance)
*   **Descrição**: Nível de habilitação de segurança tática do ator conforme normas X.841 / ACP 133 (ex: *Confidencial, Secreto*).
*   **Sintaxe**: DirectoryString
*   **Valência**: Valor Único

### [cartioEmergencyContactDN](/wiki/atributos#cartioemergencycontactdn)
*   **Descrição**: O Nome Distinto (DN) da entrada correspondente ao contato de emergência.
*   **Sintaxe**: DistinguishedName
*   **Valência**: Valor Único

### Outros Atributos de Identificação Civil:
*   `cartioFathersName`: Nome do pai do ator (DirectoryString).
*   `cartioMothersName`: Nome da mãe do ator (DirectoryString).
*   `cartioPersonalEmail`: E-mail particular (DirectoryString).