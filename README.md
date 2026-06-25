# CARTIO - Especificação e Wiki do Protocolo

Esta pasta contém o portal de documentação oficial, a especificação do protocolo e a **Wiki do Schema LDAP** do projeto **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*).

O site é gerado usando o **VitePress**, convertendo os arquivos Markdown (`.md`) em um site estático moderno, rápido e otimizado para SEO.

---

## 🚀 Como Executar Localmente

Para rodar a wiki localmente em sua máquina de desenvolvimento, siga os passos abaixo:

### 1. Requisitos
*   Node.js (versão 18 ou superior) instalado.

### 2. Instalar Dependências
Navegue até esta pasta (`docs`) e instale as dependências:
```bash
npm install
# ou se preferir pnpm
pnpm install
```

### 3. Iniciar Servidor de Desenvolvimento
Inicie o servidor de testes:
```bash
npm run dev
# ou
pnpm dev
```
O console mostrará um endereço local (ex: `http://localhost:5173`). Abra-o no navegador para visualizar a wiki com suporte a atualizações automáticas em tempo real (Hot Module Replacement).

---

## 🏗️ Como Compilar (Build) para Produção

Para gerar o site estático final (que pode ser hospedado em qualquer servidor web simples, como a Hostinger):

1.  Gere os arquivos de distribuição:
    ```bash
    npm run build
    # ou
    pnpm build
    ```
2.  Os arquivos HTML, CSS e JS compilados serão gerados na pasta **`docs/.vitepress/dist/`**.
3.  Pegue todo o conteúdo de dentro de `docs/.vitepress/dist/` e suba para o diretório público de sua hospedagem (ex: `public_html` via FTP na Hostinger).

---

## 🤝 Como Contribuir para o Schema LDAP

O coração semântico do CARTIO é o seu Schema LDAP. Ele está versionado de forma aberta para que qualquer desenvolvedor possa contribuir, propor alterações e debater melhorias:

1.  **Arquivos de Código**: Os arquivos brutos do schema estão em:
    *   [`docs/schema/cartio-schema.ldif`](file:///Users/calazans/Documents/antigravity/splendid-bardeen/docs/schema/cartio-schema.ldif): Formato moderno de configuração dinâmica (`cn=config`).
    *   [`docs/schema/cartio-schema.schema`](file:///Users/calazans/Documents/antigravity/splendid-bardeen/docs/schema/cartio-schema.schema): Formato clássico de arquivo de schema (`slapd.conf`).
2.  **Como propor alterações**:
    *   Edite os arquivos brutos acima na pasta `schema/`.
    *   Edite a documentação correspondente na wiki (pasta `docs/wiki/` contendo arquivos como `cartioPerson.md` ou `atributos.md`).
    *   Faça o commit e abra um **Pull Request** no GitHub discutindo a necessidade do novo atributo ou alteração estrutural.
