# Evolução Colaborativa: O Processo de RFC

O Projeto CARTIO foi concebido sob os preceitos de código aberto e colaboração científica. Para que o schema de identidades possa evoluir sem perder sua consistência semântica e leveza de transporte, as alterações sugeridas pela comunidade seguem um modelo inspirado nos padrões da IETF:

---

## 1. O Fluxo de Proposta de RFC
Toda modificação estrutural — seja a inclusão de um novo atributo para missões de busca e salvamento ou a adequação de sintaxe — passa pelas seguintes fases:

1.  **Draft de Proposta**: O desenvolvedor ou pesquisador propõe a mudança nos arquivos brutos do schema (pasta `schema/` do repositório GitHub) e envia o código para discussão.
2.  **Validação Experimental**: A alteração é submetida ao laboratório virtual (usando ferramentas de emulação de rede como NetEm) para medir o impacto do novo tamanho de dados sob perdas de até 40%.
3.  **Revisão do Schema**: O comitê avalia se o novo atributo obedece às restrições de valência (evitando multi-valores desnecessários) e se mantém compatibilidade retroativa.
4.  **Integração e Wiki**: A especificação é consolidada e a Wiki do Schema é atualizada para documentar o novo padrão aos futuros adotantes.

---

## 2. Como Contribuir
Desenvolvedores e pesquisadores interessados em aprimorar as capacidades de resposta a desastres do projeto podem participar diretamente:
*   Acessando o repositório em [git.cartio.org](http://git.cartio.org).
*   Abrindo discussões sobre novos atributos necessários em campo.
*   Enviando Pull Requests para corrigir descrições na wiki ou propor melhorias no schema de banco de dados.