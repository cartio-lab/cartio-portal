import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Projeto CARTIO",
  description: "Especificação e Wiki do Projeto CARTIO - Padronização de Dados e Gestão de Identidades para Cenários de Desastre",
  lastUpdated: true,
  cleanUrls: true,
  appearance: true, // Segue o tema do sistema, permitindo alternância manual
  sitemap: {
    hostname: 'https://cartio.org',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#2B7574' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'pt-BR' }],
    ['meta', { name: 'og:site_name', content: 'Projeto CARTIO' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar no projeto...', buttonAriaLabel: 'Buscar' },
          modal: { noResultsText: 'Nenhum resultado encontrado', resetButtonTitle: 'Limpar busca' }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'http://git.cartio.org' },
    ],
    nav: [
      { text: 'O Projeto', link: '/agency/manifesto' },
      { text: 'Wiki do Schema', link: '/wiki/cartioPerson' },
      { text: 'Especificação', link: '/spec' },
      { text: 'Experimentos', link: '/experiments' }
    ],
    sidebar: [
      {
        text: 'O Projeto & Contexto',
        items: [
          { text: 'Manifesto de Validação', link: '/agency/manifesto' },
          { text: 'Setores de Aplicação', link: '/agency/sectors' },
          { text: 'Evolução e RFC Tática', link: '/agency/framework' }
        ]
      },
      {
        text: 'Especificação Técnica',
        items: [
          { text: 'Visão Geral', link: '/spec' },
          { text: 'Conformidade Internacional', link: '/compliance' }
        ]
      },
      {
        text: 'Wiki do Schema (LDAP)',
        items: [
          { text: 'Classe cartioPerson', link: '/wiki/cartioPerson' },
          { text: 'Classe cartioMilitaryPerson', link: '/wiki/cartioMilitaryPerson' },
          { text: 'Classe cartioOrganization', link: '/wiki/cartioOrganization' },
          { text: 'Dicionário de Atributos', link: '/wiki/atributos' },
          { text: 'Árvore de Diretório (DIT)', link: '/wiki/DIT' }
        ]
      },
      {
        text: 'Estudos Experimentais',
        items: [
          { text: 'Cenários e Benchmarks', link: '/experiments' }
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
    }
  }
})