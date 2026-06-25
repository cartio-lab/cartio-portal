# Processo de Evolução: A RFC Tática

Para manter a consistência e garantir a grandeza do ecossistema CARTIO como um padrão aberto adotado por agências governamentais e de pesquisa, toda evolução do protocolo segue um rigoroso processo de governança de padrões denominado **RFC Tática** (*Tactical Request for Comments*).

---

## 1. Ciclo de Vida da Evolução do Schema
Qualquer alteração na árvore do diretório, novos atributos de especialidades no campo ou otimizações na codificação binária devem passar pelas seguintes etapas:

```
[Proposta de Alteração (RFC)] -> [Discussão Comunitária (GitHub)]
                                     |
                                     v
[Aprovação da RFC Tática]  <- [Testes em Cenário de Caos (NetEm)]
        |
        v
[Publicação da Nova Versão do Schema (site cartio.org)]
```

1.  **Submissão (Draft)**: O autor descreve a necessidade tática do novo atributo e a especificação do OID proposto, alterando os arquivos brutos de schema na pasta `schema/` do repositório.
2.  **Validação Computacional**: O novo draft é submetido ao motor de testes `NetEm` para avaliar o impacto do novo atributo (tamanho do payload) em conexões degradadas.
3.  **Revisão do Comitê de Governança**: Membros das forças de defesa e agências humanitárias validam se a mudança obedece aos preceitos jurídicos (Convenções de Genebra).
4.  **Publicação e Registro**: O novo schema é publicado oficialmente no portal de documentação e indexado na Árvore de OIDs da agência.

---

## 2. Como Participar das Discussões
Para sugerir modificações nas especificações do CARTIO:
*   Acesse o repositório oficial no GitHub.
*   Abra uma **Issue** explicando o caso de uso militar ou humanitário que o protocolo atual não atende.
*   Submeta um **Pull Request** propondo as correções nos arquivos markdown da Wiki ou nos scripts LDIF do schema.