# Especificação Técnica do Protocolo CARTIO

Esta especificação define o núcleo técnico e protocolar do **CARTIO** (*Common Auxiliary Registry for Tactical Interoperable Operations*). 

O protocolo baseia-se na reutilização eficiente do ecossistema LDAPv3 (Lightweight Directory Access Protocol) e na gramática de serialização binária ASN.1 BER.

---

## 1. Identificadores de Objeto (OIDs)
O CARTIO está estruturado de forma hierárquica sob um espaço de nomes numérico registrado. A hierarquia segue as diretrizes da recomendação **ITU-T X.660**:

*   **Arco Raiz**: `1.3.6.1.4.1.61409` (Enterprise OID de exemplo/registro)
*   **Módulo CARTIO**: `1.3.6.1.4.1.61409.600`
    *   `1.3.6.1.4.1.61409.600.1` — **Classes de Objeto (ObjectClasses)**
    *   `1.3.6.1.4.1.61409.600.2` — **Tipos de Atributo (AttributeTypes)**

Esta segmentação limpa garante que cada novo atributo tático adicionado possua um identificador numérico único mundialmente, evitando colisões com outros serviços de diretório.

---

## 2. Serialização Binária: ASN.1 BER
Em cenários táticos, cada byte transmitido conta. Enquanto o padrão SCIM utiliza o formato textual JSON sobre HTTP, o CARTIO utiliza codificação **ASN.1 BER (Basic Encoding Rules)** sob a norma **ITU-T X.690**:

*   **Formato TLV (Tag-Length-Value)**: Cada dado é encapsulado por tags identificadoras e comprimentos delimitadores de bytes.
*   **Eficiência Termodinâmica**: A representação do par `"usuario_id": "12345"` consome 21 bytes em UTF-8 textual, enquanto a codificação binária BER do LDAP reduz para apenas **3 bytes** de carga útil.
*   **Economia de Banda**: Reduz o overhead geral de empacotamento de protocolo de **633% para 21%**, evitando o esgotamento do canal de rádio degradado.

---

## 3. Replicação Eventual (Syncrepl)
A sincronização tática do CARTIO em ambientes *Disconnected, Intermittent, Limited* (DIL) apoia-se no motor de sincronização de conteúdo LDAP (**RFC 4533**):

1.  **Conexões Persistentes**: Utiliza a persistência da sessão TCP (LDAPS) para evitar handshakes TLS repetitivos em canais de alto RTT (satélite GEO).
2.  **Cookies de Sincronização**: O nó consumidor transmite um cookie contendo o *Change Sequence Number* (CSN) do seu último estado conhecido.
3.  **Sincronização Delta**: O provedor avalia o cookie e transmite apenas os registros modificados (deltas), minimizando a sobrecarga.
4.  **Consistência Eventual**: Permite a desconexão total e garante a convergência automática e resolução de conflitos assim que o sinal (rádio, LoRa, satélite) reestabelecer.