# Conformidade Humanitária e Soberania de Defesa

O protocolo CARTIO foi projetado para atuar em cenários onde a vida humana e a segurança das comunicações operam sob condições extremas. Por isso, a especificação atende a normas de direito humanitário e interoperabilidade internacional:

---

## 1. Convenções de Genebra (Anexo I ao Protocolo I)
O Anexo I ao Protocolo I das Convenções de Genebra rege os meios de identificação de pessoal de saúde e de defesa civil em conflitos armados. 

O CARTIO modela formalmente a salvaguarda de pessoal em seu Schema através de atributos específicos:
*   `cartioGenevaRole`: Define a classificação protegida do profissional (ex: *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus`: Status do direito internacional humanitário que garante a imunidade (ex: *Protected*).

---

## 2. Diretrizes da ONU / OCHA
O Escritório das Nações Unidas para a Coordenação de Assuntos Humanitários (**OCHA**) estabelece diretrizes rígidas sobre a governança de dados em crises para proteger a privacidade de vítimas e voluntários. 

O CARTIO integra:
*   **Controle de Acesso Granular (ACLs)**: Bloqueio estrito de leitura de metadados biométricos e níveis de liberação por meio de ACLs dinâmicas configuradas em Run-Time no daemon OpenLDAP.
*   **Soberania Tecnológica**: Uso de padrões abertos não proprietários, garantindo a autossuficiência do Estado sem dependência lógica de provedores de nuvem estrangeiros.

---

## 3. NATO FMN (Federated Mission Networking)
O FMN é a especificação da OTAN para permitir a federação imediata de redes em operações de coalizão multinacionais. O CARTIO implementa a federação no "Dia Zero" através da estrutura hierárquica do LDAP e cookies Syncrepl, permitindo a sincronização em tempo real de identidades entre forças distintas.