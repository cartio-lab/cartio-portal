# Árvore de Informações do Diretório (DIT CARTIO)

A Árvore de Diretório (**DIT** — *Directory Information Tree*) define a estrutura organizacional de nomes para evitar colisões no namespace em operações de federação:

```
                  dc=cartio,dc=org
                    /         \
           ou=Pessoas        ou=Organizacoes
             /      \               |
   uid=militar1   uid=militar2   o=HospitalCentral
```

### Arquivo LDIF Base de Inicialização
Para criar as Unidades Organizacionais (OUs) iniciais no diretório, utiliza-se a estrutura padrão:

```ldif
dn: dc=cartio,dc=org
objectClass: top
objectClass: dcObject
objectClass: organization
o: CARTIO Protocol
dc: cartio

dn: ou=Pessoas,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Pessoas

dn: ou=Organizacoes,dc=cartio,dc=org
objectClass: top
objectClass: organizationalUnit
ou: Organizacoes
```