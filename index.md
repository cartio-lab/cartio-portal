---
layout: home

hero:
  name: CARTIO
  text: AGÊNCIA DE PADRONIZAÇÃO
  tagline: Regulando e governando a interoperabilidade de identidades e infraestrutura lógica para teatros de operações críticas e resposta a desastres.
  actions:
    - theme: brand
      text: Entrar na Agência
      link: /agency/manifesto
    - theme: alt
      text: Wiki do Schema
      link: /wiki/cartioPerson
    - theme: alt
      text: Especificação Técnica
      link: /spec

features:
  - icon: 🌍
    title: Padrão Global de Defesa
    details: Estrutura tática interoperável projetada para operações conjuntas de coalizão de Dia Zero, baseada no conceito NATO Federated Mission Networking (FMN).
  - icon: 🛡️
    title: Resiliência de Borda
    details: Persistência mapeada em memória local (LMDB) e sincronização oportunista para sobrevivência operacional em ambientes hostis de Guerra Eletrônica.
  - icon: ⚖️
    title: Direito Humanitário
    details: Conformidade nativa com as Convenções de Genebra e as diretrizes de proteção de dados sensíveis da ONU/OCHA.
---

<div class="custom-portal-layout">

<hr class="portal-divider" />

<section class="portal-section">
  <h2>ESTRUTURA DE INFORMAÇÃO OPERACIONAL</h2>
  <p class="section-lead">A Agência CARTIO atua na intersecção entre a Engenharia de Sobrevivência, a soberania de Defesa e a resposta a crises de alta entropia. Nossa arquitetura lógica de diretório distribui-se em três divisões críticas.</p>
  
  <div class="portal-grid">
    <div class="portal-card">
      <div class="card-tag">A AGÊNCIA</div>
      <h3>Governança & Soberania</h3>
      <p>Mecanismos institucionais de governança, o manifesto de autossuficiência do Estado e a padronização de evolução de schemas via o processo de RFC Tática.</p>
      <a class="card-link" href="/agency/manifesto">Ler Manifesto →</a>
    </div>
    
    <div class="portal-card">
      <div class="card-tag">O PROTOCOLO</div>
      <h3>Especificação & ASN.1 BER</h3>
      <p>A física do transporte de dados táticos: codificação binária tag-length-value (TLV) de baixo overhead e o protocolo de sincronização oportunista.</p>
      <a class="card-link" href="/spec">Ver Especificação →</a>
    </div>
    
    <div class="portal-card">
      <div class="card-tag">O SCHEMA</div>
      <h3>Wiki de Atributos & DIT</h3>
      <p>O dicionário enciclopédico de classes estruturais e auxiliares que traduzem a identidade, qualificação, biometria e status humanitário de pessoas e meios.</p>
      <a class="card-link" href="/wiki/cartioPerson">Explorar Wiki →</a>
    </div>
  </div>
</section>

<section class="portal-section metrics-section">
  <h2>EVIDÊNCIA EMPÍRICA DE SOBREVIVÊNCIA</h2>
  <div class="metrics-grid">
    <div class="metric-item">
      <span class="metric-val">1/6</span>
      <span class="metric-lbl">Sobrecarga de Banda</span>
      <p>Redução de 633% (padrão SCIM/JSON) para 21% de overhead protocolar usando codificação binária pura.</p>
    </div>
    <div class="metric-item">
      <span class="metric-val">100%</span>
      <span class="metric-lbl">Taxa de Sincronização</span>
      <p>Sucesso absoluto sob o cenário de caos informacional (40% de perda de pacotes), onde sistemas REST tradicionais colapsam.</p>
    </div>
    <div class="metric-item">
      <span class="metric-val">X.660</span>
      <span class="metric-lbl">Namespace Federado</span>
      <p>Estrutura hierárquica baseada em OIDs oficiais, garantindo a unicidade e federação instantânea sem colisões.</p>
    </div>
  </div>
</section>

</div>

<style>
.custom-portal-layout {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}
.portal-divider {
  border: 0;
  border-top: 3px solid var(--vp-c-brand);
  margin: 3rem 0;
}
.portal-section {
  margin-bottom: 4rem;
}
.section-lead {
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 800px;
  margin-bottom: 2rem;
}
.portal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
.portal-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s;
}
.portal-card:hover {
  border-color: var(--vp-c-brand);
}
.card-tag {
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--vp-c-brand);
  margin-bottom: 8px;
}
.portal-card h3 {
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 12px;
}
.portal-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  flex-grow: 1;
  margin-bottom: 20px;
}
.card-link {
  font-weight: bold;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.95rem;
}
.metrics-section {
  background-color: rgba(43, 117, 116, 0.05);
  border-left: 5px solid var(--vp-c-brand);
  padding: 32px 24px;
  border-radius: 4px;
}
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 2rem;
}
.metric-item {
  display: flex;
  flex-direction: column;
}
.metric-val {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  line-height: 1;
  margin-bottom: 8px;
}
.metric-lbl {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.metric-item p {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>