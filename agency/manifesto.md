# Manifesto de Sobrevivência dos Dados

O **Projeto CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*) surge de uma necessidade de engenharia crítica: **prover resiliência informacional em ambientes caracterizados por conexões instáveis ou completamente inexistentes.**

Nas situações de catástrofes naturais ou conflitos, as redes de telecomunicações de grande velocidade (4G/5G, cabos de fibra óptica e infraestrutura em nuvem) são comumente as primeiras a sofrer interrupção. A dependência de conexões persistentes impede que equipes no campo tomem decisões rápidas sobre quem está autorizado a acessar áreas ou recursos restritos.

---

## 1. O Ponto de Ruptura Protocolar
A indústria de tecnologia da informação concentrou seus esforços em arquiteturas web altamente verbosas (HTTP/JSON/REST). Embora ótimas para redes urbanas abundantes, elas apresentam limites severos em cenários de alta entropia (perda de pacotes e alta latência):

*   **Sobrecarga de Transporte**: Mensagens em texto aberto como JSON adicionam bytes redundantes que saturam os canais de rádio degradados.
*   **Chattiness (Múltiplos Diálogos)**: O estabelecimento de conexões HTTP clássicas exige transações de handshake sucessivas, o que causa timeouts sob alta perda de dados.
*   **Colapso Local**: Sem conectividade com a nuvem, as pontas locais tornam-se incapazes de autenticar novos voluntários ou equipes de apoio, paralisando a resposta logística.

---

## 2. A Engenharia de Sobrevivência
O CARTIO propõe uma alternativa de padronização viável e eficiente:

1.  **Compactação Estrita**: Utilização do protocolo LDAP com codificação binária **ASN.1 BER** para encolher a carga útil transmitida por rádio.
2.  **Replicação Autônoma**: Mecanismo oportunista de sincronização baseado no padrão **Syncrepl**, permitindo consistência eventual entre bases de dados locais assim que um link é reestabelecido.
3.  **Compatibilidade Nativa**: Reutilização de um protocolo consolidado há mais de trinta anos e suportado de fábrica pela maioria dos ativos de rede, microcontroladores e sistemas operacionais, eliminando a dependência de middlewares pesados.