# Sênior Plus

Recriação independente do site institucional da Sênior Plus. O projeto contém a
Home e as páginas Sobre, Serviços, Nossa Equipe, Avaliações, Contato, Guia e Carreiras,
geradas estaticamente com Astro.

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

Quando `PUBLIC_SITE_URL` estiver configurada, o build gera `dist/sitemap.xml` com as
oito páginas públicas. A página 404 usa `noindex` e não entra no sitemap.

## Guia

Os dados do Guia Prático do Cuidado Domiciliar ficam centralizados em
`src/data/guides.ts`. A rota pública `/guia/` apresenta o material e direciona para
a página de vendas oficial. O site não hospeda PDF, não exibe preço e não implementa
checkout próprio.

## Eventos de conversão

Os nomes estáveis ficam em `src/lib/events.ts`; os CTAs usam `data-event`,
`data-contact`, `data-location` e `data-cta`. A camada local em
`src/scripts/events.js` está explicitamente desativada e não envia dados. Ela não
coleta nome, telefone digitado, mensagem ou qualquer dado pessoal.

Uma ferramenta de analytics só deverá ser conectada após aprovação dos IDs, revisão
de privacidade e definição do consentimento aplicável. A ativação futura deve ocorrer
na camada central, sem reescrever todos os componentes.

## Privacidade e publicação

Antes de ativar analytics, publicidade ou campanhas, a Política de Privacidade deve
ser revisada. O consentimento e o tratamento de dados deverão ser avaliados na fase
de publicação. Atualmente nenhuma tag de rastreamento está ativa; os contatos abrem o
WhatsApp diretamente e o site não armazena mensagens.

## Formulário e Carreiras

O formulário de contato valida os campos no navegador e abre o WhatsApp da Sênior Plus
com a mensagem codificada. Nenhum dado é armazenado ou enviado a um backend. A
página Carreiras mantém o Google Form original, inclusive sua autenticação externa.
