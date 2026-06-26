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
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Script de detecção automática e redirecionamento de idioma (i18n inteligente)
    ['script', {}, `
      (function() {
        var path = window.location.pathname;
        // Só redireciona se estiver acessando a raiz absoluta do portal
        if (path === '/' || path === '/index.html') {
          // Se o visitante veio navegando de dentro do próprio site, não redireciona
          if (document.referrer && document.referrer.indexOf(window.location.origin) === 0) {
            return;
          }
          // Se houver uma preferência de idioma manualmente salva no localStorage, respeita ela
          var savedLang = localStorage.getItem('pref-lang');
          if (savedLang) {
            if (savedLang !== 'pt' && ['en', 'es', 'it', 'fr', 'de'].indexOf(savedLang) !== -1) {
              window.location.replace('/' + savedLang + '/');
            }
            return;
          }
          // Caso contrário, detecta a preferência do navegador
          var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
          var supportedLangs = ['en', 'es', 'it', 'fr', 'de'];
          for (var i = 0; i < supportedLangs.length; i++) {
            var lang = supportedLangs[i];
            if (browserLang.indexOf(lang) === 0) {
              window.location.replace('/' + lang + '/');
              break;
            }
          }
        } else {
          // Monitora a navegação do usuário e salva a preferência de idioma no localStorage
          var match = path.match(/^\\/(en|es|it|fr|de)\\//);
          if (match) {
            localStorage.setItem('pref-lang', match[1]);
          } else if (path.indexOf('/wiki/') === 0 || path.indexOf('/agency/') === 0 || path.indexOf('/spec') === 0 || path === '/') {
            localStorage.setItem('pref-lang', 'pt');
          }
        }
      })();
    `]
  ],
  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'Projeto CARTIO',
      description: 'Especificação e Wiki do Projeto CARTIO - Padronização de Dados e Gestão de Identidades para Cenários de Desastre'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'CARTIO Project',
      description: 'Specification and Wiki of the CARTIO Project - Data Standardization and Identity Management for Disaster Scenarios',
      themeConfig: {
        nav: [
          { text: 'O Projeto', link: '/en/agency/manifesto' },
          { text: 'Wiki do Schema', link: '/en/wiki/cartioPerson' },
          { text: 'Especificação', link: '/en/spec' },
          { text: 'Experimentos', link: '/en/experiments' }
        ],
        sidebar: [
          {
            text: 'The Project & Context',
            items: [
              { text: 'Validation Manifesto', link: '/en/agency/manifesto' },
              { text: 'Application Sectors', link: '/en/agency/sectors' },
              { text: 'Evolution & Tactical RFC', link: '/en/agency/framework' }
            ]
          },
          {
            text: 'Technical Spec',
            items: [
              { text: 'Overview', link: '/en/spec' },
              { text: 'International Compliance', link: '/en/compliance' }
            ]
          },
          {
            text: 'Schema Wiki (LDAP)',
            items: [
              { text: 'Class cartioPerson', link: '/en/wiki/cartioPerson' },
              { text: 'Class cartioMilitaryPerson', link: '/en/wiki/cartioMilitaryPerson' },
              { text: 'Class cartioOrganization', link: '/en/wiki/cartioOrganization' },
              { text: 'Attribute Dictionary', link: '/en/wiki/atributos' },
              { text: 'Directory Information Tree (DIT)', link: '/en/wiki/DIT' }
            ]
          },
          {
            text: 'Experimental Studies',
            items: [
              { text: 'Scenarios and Benchmarks', link: '/en/experiments' }
            ]
          },
          {
            text: 'Schema Code',
            items: [
              { text: 'LDIF Code (cn=config)', link: '/en/schema/cartio-schema-ldif' },
              { text: 'Classic Schema Code', link: '/en/schema/cartio-schema-code' }
            ]
          }
        ],
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      title: 'Proyecto CARTIO',
      description: 'Especificación y Wiki del Proyecto CARTIO - Estandarización de Datos y Gestión de Identidades para Escenarios de Desastre',
      themeConfig: {
        nav: [
          { text: 'El Proyecto', link: '/es/agency/manifesto' },
          { text: 'Wiki del Schema', link: '/es/wiki/cartioPerson' },
          { text: 'Especificación', link: '/es/spec' },
          { text: 'Experimentos', link: '/es/experiments' }
        ],
        sidebar: [
          {
            text: 'El Proyecto y Contexto',
            items: [
              { text: 'Manifiesto de Validación', link: '/es/agency/manifesto' },
              { text: 'Sectores de Aplicación', link: '/es/agency/sectors' },
              { text: 'Evolución y RFC Táctica', link: '/es/agency/framework' }
            ]
          },
          {
            text: 'Especificación Técnica',
            items: [
              { text: 'Vista General', link: '/es/spec' },
              { text: 'Cumplimiento Internacional', link: '/es/compliance' }
            ]
          },
          {
            text: 'Wiki del Schema (LDAP)',
            items: [
              { text: 'Clase cartioPerson', link: '/es/wiki/cartioPerson' },
              { text: 'Clase cartioMilitaryPerson', link: '/es/wiki/cartioMilitaryPerson' },
              { text: 'Clase cartioOrganization', link: '/es/wiki/cartioOrganization' },
              { text: 'Diccionario de Atributos', link: '/es/wiki/atributos' },
              { text: 'Árbol de Directorio (DIT)', link: '/es/wiki/DIT' }
            ]
          },
          {
            text: 'Estudios Experimentales',
            items: [
              { text: 'Escenarios y Benchmarks', link: '/es/experiments' }
            ]
          },
          {
            text: 'Código del Schema',
            items: [
              { text: 'Código LDIF (cn=config)', link: '/es/schema/cartio-schema-ldif' },
              { text: 'Código de Schema Clásico', link: '/es/schema/cartio-schema-code' }
            ]
          }
        ],
        docFooter: {
          prev: 'Página anterior',
          next: 'Siguiente página',
        }
      }
    },
    it: {
      label: 'Italiano',
      lang: 'it-IT',
      link: '/it/',
      title: 'Progetto CARTIO',
      description: 'Specifica e Wiki del Progetto CARTIO - Standardizzazione dei Dati e Gestione delle Identità per Scenari di Disastro',
      themeConfig: {
        nav: [
          { text: 'Il Progetto', link: '/it/agency/manifesto' },
          { text: 'Wiki del Schema', link: '/it/wiki/cartioPerson' },
          { text: 'Specifica', link: '/it/spec' },
          { text: 'Esperimenti', link: '/it/experiments' }
        ],
        sidebar: [
          {
            text: 'Il Progetto e Contesto',
            items: [
              { text: 'Manifesto di Validazione', link: '/it/agency/manifesto' },
              { text: 'Settori di Applicazione', link: '/it/agency/sectors' },
              { text: 'Evoluzione e RFC Tattica', link: '/it/agency/framework' }
            ]
          },
          {
            text: 'Specifica Tecnica',
            items: [
              { text: 'Panoramica', link: '/it/spec' },
              { text: 'Conformità Internazionale', link: '/it/compliance' }
            ]
          },
          {
            text: 'Wiki del Schema (LDAP)',
            items: [
              { text: 'Classe cartioPerson', link: '/it/wiki/cartioPerson' },
              { text: 'Classe cartioMilitaryPerson', link: '/it/wiki/cartioMilitaryPerson' },
              { text: 'Classe cartioOrganization', link: '/it/wiki/cartioOrganization' },
              { text: 'Dizionario degli Attributi', link: '/it/wiki/atributos' },
              { text: 'Albero delle Directory (DIT)', link: '/it/wiki/DIT' }
            ]
          },
          {
            text: 'Studi Sperimentali',
            items: [
              { text: 'Scenari e Benchmark', link: '/it/experiments' }
            ]
          },
          {
            text: 'Codice dello Schema',
            items: [
              { text: 'Codice LDIF (cn=config)', link: '/it/schema/cartio-schema-ldif' },
              { text: 'Codice Schema Classico', link: '/it/schema/cartio-schema-code' }
            ]
          }
        ],
        docFooter: {
          prev: 'Pagina precedente',
          next: 'Pagina successiva',
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      title: 'Projet CARTIO',
      description: 'Spécification et Wiki du Projet CARTIO - Standardisation des Données et Gestion des Identités pour les Scénarios de Catastrophe',
      themeConfig: {
        nav: [
          { text: 'Le Projet', link: '/fr/agency/manifesto' },
          { text: 'Wiki du Schema', link: '/fr/wiki/cartioPerson' },
          { text: 'Spécification', link: '/fr/spec' },
          { text: 'Expériences', link: '/fr/experiments' }
        ],
        sidebar: [
          {
            text: 'Le Projet & Contexte',
            items: [
              { text: 'Manifeste de Validation', link: '/fr/agency/manifesto' },
              { text: 'Secteurs d\'Application', link: '/fr/agency/sectors' },
              { text: 'Évolution et RFC Tactique', link: '/fr/agency/framework' }
            ]
          },
          {
            text: 'Spécification Technique',
            items: [
              { text: 'Vue d\'ensemble', link: '/fr/spec' },
              { text: 'Conformité Internationale', link: '/fr/compliance' }
            ]
          },
          {
            text: 'Wiki du Schema (LDAP)',
            items: [
              { text: 'Classe cartioPerson', link: '/fr/wiki/cartioPerson' },
              { text: 'Classe cartioMilitaryPerson', link: '/fr/wiki/cartioMilitaryPerson' },
              { text: 'Classe cartioOrganization', link: '/fr/wiki/cartioOrganization' },
              { text: 'Dictionnaire des Attributs', link: '/fr/wiki/atributos' },
              { text: 'Arbre de Répertoire (DIT)', link: '/fr/wiki/DIT' }
            ]
          },
          {
            text: 'Études Expérimentales',
            items: [
              { text: 'Scénarios et Benchmarks', link: '/fr/experiments' }
            ]
          },
          {
            text: 'Code du Schema',
            items: [
              { text: 'Code LDIF (cn=config)', link: '/fr/schema/cartio-schema-ldif' },
              { text: 'Code Schema Classique', link: '/fr/schema/cartio-schema-code' }
            ]
          }
        ],
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante',
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'CARTIO-Projekt',
      description: 'Spezifikation und Wiki des CARTIO-Projekts - Datenstandardisierung und Identitätsmanagement für Katastrophenszenarien',
      themeConfig: {
        nav: [
          { text: 'Das Projekt', link: '/de/agency/manifesto' },
          { text: 'Schema-Wiki', link: '/de/wiki/cartioPerson' },
          { text: 'Spezifikation', link: '/de/spec' },
          { text: 'Experimente', link: '/de/experiments' }
        ],
        sidebar: [
          {
            text: 'Das Projekt & Kontext',
            items: [
              { text: 'Validierungsmanifest', link: '/de/agency/manifesto' },
              { text: 'Anwendungsbereiche', link: '/de/agency/sectors' },
              { text: 'Evolution & Taktisches RFC', link: '/de/agency/framework' }
            ]
          },
          {
            text: 'Technische Spezifikation',
            items: [
              { text: 'Übersicht', link: '/de/spec' },
              { text: 'Internationale Konformität', link: '/de/compliance' }
            ]
          },
          {
            text: 'Schema-Wiki (LDAP)',
            items: [
              { text: 'Klasse cartioPerson', link: '/de/wiki/cartioPerson' },
              { text: 'Klasse cartioMilitaryPerson', link: '/de/wiki/cartioMilitaryPerson' },
              { text: 'Klasse cartioOrganization', link: '/de/wiki/cartioOrganization' },
              { text: 'Attribut-Lexikon', link: '/de/wiki/atributos' },
              { text: 'Verzeichnisbaum (DIT)', link: '/de/wiki/DIT' }
            ]
          },
          {
            text: 'Experimentelle Studien',
            items: [
              { text: 'Szenarien und Benchmarks', link: '/de/experiments' }
            ]
          },
          {
            text: 'Schema-Code',
            items: [
              { text: 'LDIF-Code (cn=config)', link: '/de/schema/cartio-schema-ldif' },
              { text: 'Klassischer Schema-Code', link: '/de/schema/cartio-schema-code' }
            ]
          }
        ],
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite',
        }
      }
    }
  },
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Buscar no projeto...', buttonAriaLabel: 'Buscar' },
              modal: { noResultsText: 'Nenhum resultado encontrado', resetButtonTitle: 'Limpar busca' }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search the project...', buttonAriaLabel: 'Search' },
              modal: { noResultsText: 'No results found', resetButtonTitle: 'Clear search' }
            }
          },
          es: {
            translations: {
              button: { buttonText: 'Buscar en el proyecto...', buttonAriaLabel: 'Buscar' },
              modal: { noResultsText: 'No se encontraron resultados', resetButtonTitle: 'Limpiar búsqueda' }
            }
          },
          it: {
            translations: {
              button: { buttonText: 'Cerca nel progetto...', buttonAriaLabel: 'Cerca' },
              modal: { noResultsText: 'Nessun risultato trovato', resetButtonTitle: 'Azzera ricerca' }
            }
          },
          fr: {
            translations: {
              button: { buttonText: 'Rechercher dans le projet...', buttonAriaLabel: 'Rechercher' },
              modal: { noResultsText: 'Aucun résultat trouvé', resetButtonTitle: 'Réinitialiser la recherche' }
            }
          },
          de: {
            translations: {
              button: { buttonText: 'Projekt durchsuchen...', buttonAriaLabel: 'Suchen' },
              modal: { noResultsText: 'Keine Ergebnisse gefunden', resetButtonTitle: 'Suche zurücksetzen' }
            }
          }
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