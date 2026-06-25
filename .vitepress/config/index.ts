import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CARTIO Agency & Protocol",
  description: "Portal Oficial da Autoridade do Protocolo CARTIO - Padrões de Identidade Tática e Resiliência em Redes Degradadas",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://cartio.org',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#2B7574' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'pt-BR' }],
    ['meta', { name: 'og:site_name', content: 'CARTIO Protocol Agency' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar na Agência...', buttonAriaLabel: 'Buscar' },
          modal: { noResultsText: 'Nenhum resultado encontrado', resetButtonTitle: 'Limpar busca' }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wagner-calazans/transcartio' },
    ],
    nav: [
      { text: 'A Agência', link: '/agency/manifesto' },
      { text: 'Wiki do Schema', link: '/wiki/cartioPerson' },
      { text: 'Especificação', link: '/spec' },
      { text: 'Experimentos', link: '/experiments' }
    ],
    sidebar: [
      {
        text: 'A Agência & Governança',
        items: [
          { text: 'Manifesto de Defesa', link: '/agency/manifesto' },
          { text: 'Setores de Emprego', link: '/agency/sectors' },
          { text: 'Governança e Padrões (RFC Tática)', link: '/agency/framework' }
        ]
      },
      {
        text: 'Especificação do Protocolo',
        items: [
          { text: 'Visão Geral', link: '/spec' },
          { text: 'Conformidade Internacional', link: '/compliance' }
        ]
      },
      {
        text: 'Wiki do Schema (Central)',
        items: [
          { text: 'Classe cartioPerson', link: '/wiki/cartioPerson' },
          { text: 'Classe cartioMilitaryPerson', link: '/wiki/cartioMilitaryPerson' },
          { text: 'Classe cartioOrganization', link: '/wiki/cartioOrganization' },
          { text: 'Dicionário de Atributos', link: '/wiki/atributos' },
          { text: 'Árvore de Diretório (DIT)', link: '/wiki/DIT' }
        ]
      },
      {
        text: 'Validação Científica',
        items: [
          { text: 'Experimentos e Benchmarks', link: '/experiments' }
        ]
      },
      {
        text: 'Código do Schema',
        items: [
          { text: 'Código LDIF (cn=config)', link: '/schema/cartio-schema-ldif' },
          { text: 'Código Schema Clássico', link: '/schema/cartio-schema-code' }
        ]
      }
    ],
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },
    footer: {
      message: 'CARTIO - Autoridade de Padronização de Identidades Táticas',
      copyright: '© 2025 Wagner Calazans / Instituto Militar de Engenharia (IME). Licenciado sob Creative Commons 4.0.',
    },
  }
})