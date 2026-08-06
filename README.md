# Sênior Plus

Recriação independente do site institucional da Sênior Plus. Esta etapa contém a
estrutura estática em Astro e a Home; as páginas internas permanecem como stubs
marcados com `noindex`.

## Desenvolvimento local

Requisitos: Node.js 20 ou mais recente e pnpm.

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm test
```

O projeto usa geração estática e não possui backend, banco de dados ou autenticação.
O resultado de `pnpm build` fica em `dist/` e é compatível com Cloudflare Pages.

## Domínio, canonical e sitemap

A URL pública deve ser definida no futuro por `PUBLIC_SITE_URL`, conforme
`.env.example`. Enquanto não existir um domínio aprovado:

- nenhuma canonical falsa é emitida;
- o arquivo `robots.txt` não anuncia uma URL de sitemap inventada;
- `scripts/generate-sitemap.mjs` não cria o sitemap.

Quando `PUBLIC_SITE_URL` estiver configurada, o build gera `dist/sitemap.xml` somente
com a Home, a única página finalizada nesta etapa. Os stubs internos não entram no
sitemap e usam `noindex, nofollow`.

## Área futura “Guias”

Os tipos estão em `src/types/guide.ts` e a lista central em `src/data/guides.ts`.
`guidesFeature.enabled` está definido como `false` e `guides` começa vazio. Para uma
etapa futura:

1. cadastrar produtos com todos os campos confirmados;
2. manter `published: false` até a aprovação individual;
3. implementar `/guias` e `/guias/[slug]`;
4. ativar a feature e adicionar “Guias” ao menu somente quando houver produto público;
5. fornecer URLs de checkout reais e metadados próprios.

Nenhum PDF completo, preço ou link de checkout foi incluído nesta etapa.

## Eventos de conversão

Os nomes estáveis ficam em `src/lib/events.ts`; os CTAs usam `data-event`,
`data-contact`, `data-location` e `data-cta`. A camada local em
`public/scripts/events.js` está explicitamente desativada e não envia dados. Ela não
coleta nome, telefone digitado, mensagem ou qualquer dado pessoal.

Uma ferramenta de analytics só deverá ser conectada após aprovação dos IDs, revisão
de privacidade e definição do consentimento aplicável. A ativação futura deve ocorrer
na camada central, sem reescrever todos os componentes.

## Privacidade e publicação

Antes de ativar analytics, publicidade ou campanhas, a Política de Privacidade deve
ser revisada. O consentimento e o tratamento de dados deverão ser avaliados na fase
de publicação. Atualmente nenhuma tag de rastreamento está ativa; os contatos abrem o
WhatsApp diretamente e o site não armazena mensagens.

## Conteúdo futuro

As rotas Sobre, Serviços, Nossa Equipe, Avaliações, Contato e Carreiras são stubs de
desenvolvimento. Elas não representam páginas concluídas. O link externo do Google
Form de Carreiras será mantido sem alterações quando essa página for implementada.
