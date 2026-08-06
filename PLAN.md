# Plano de recriação do site Sênior Plus

## 1. Escopo e limites desta fase

Este documento registra a análise do site público `https://seniorplus.base44.app/` realizada em 6 de agosto de 2026 e propõe a implementação futura. Nesta fase não foi criado código do site, não foram baixados ativos, não houve publicação e nenhum formulário foi enviado.

Diretriz principal: reproduzir com fidelidade a identidade e a estrutura atuais, corrigindo problemas técnicos sem transformar o trabalho em um redesign. Qualquer mudança visual ou comercial marcada como opcional depende de aprovação.

### Atualização de escopo — confirmações da proprietária

Em 6 de agosto de 2026, a proprietária confirmou e autorizou a reprodução dos textos, logotipo, fotografias, ativos visuais, oito depoimentos, indicadores numéricos e informações profissionais/empresariais presentes no site original. Para a implementação, deixam de existir bloqueios de autorização sobre esses elementos.

Também foram confirmados:

- uso das marcas “Sênior Plus” e “Sênior+” com a lógica visual atual;
- slogans “Cuidados com amor” e “Saúde de quem você mais ama em boas mãos”;
- contatos de Annie Uno e Fabiano/Sênior Plus;
- atendimento em São Paulo, capital, sem ampliação automática da área;
- atendimento 24 horas, 7 dias por semana, inclusive feriados;
- seis serviços atuais e suas descrições;
- conteúdo profissional e texto de supervisão de Annie Uno;
- indicadores 150+, 98%, nota 5.0 e cinco estrelas;
- autenticidade e autorização dos oito depoimentos;
- permanência do Google Form de carreiras e de sua autenticação atual;
- inclusão do Instagram `@seniorplus.sp` no rodapé;
- contato comercial enviado diretamente ao WhatsApp, sem backend ou armazenamento.

Correção posterior confirmada pela proprietária: toda menção profissional deve usar
“com pós-graduação em Gerontologia”, e não “especialista em Gerontologia”. O texto
de supervisão autorizado passa a ser:

> Toda nossa equipe trabalha sob a supervisão direta de Annie Uno, enfermeira com
> 15 anos de experiência, com pós-graduação em Gerontologia e Terapias Integrativas,
> além de MBA em Gestão Hospitalar.
>
> Esta coordenação garante que todos os cuidadores sigam os mais altos padrões de
> qualidade e humanização no atendimento aos nossos clientes em São Paulo - SP.

O escopo aprovado para a próxima implementação é somente a estrutura técnica, componentes compartilhados e Home completa. As páginas internas poderão existir apenas como stubs `noindex`, fora do sitemap. A área futura “Guias” receberá apenas tipos, dados desativados e documentação, sem rota pública nem item de menu.

## 2. Cobertura da análise

Foram acessadas e inspecionadas estas rotas públicas:

| Rota | Título/objetivo atual |
| --- | --- |
| `/` e `/home` | Página inicial e apresentação da empresa |
| `/sobre` | História, missão, visão, valores e diferenciais |
| `/servicos` | Serviços, planos, processo de seleção e comunicação |
| `/equipe` | Enfermeiros, técnicos, cuidadores e supervisão |
| `/avaliacoes` | Indicadores e oito depoimentos |
| `/contato` | Telefones, área/horário, formulário e WhatsApp |
| `/carreiras` | Benefícios, vagas, processo seletivo e candidatura |

A análise visual cobriu 1440 × 900, largura aproximada de 768 px e 390 × 844. Também foram testados o menu móvel, o alternador claro/escuro, a navegação interna, os dois links de WhatsApp e o link externo de candidatura. Não foi executado Lighthouse nesta fase; as observações de desempenho abaixo são diagnósticos estruturais, não pontuações simuladas.

## 3. Estrutura encontrada

### Elementos compartilhados

1. Faixa superior verde-petróleo com localidade, disponibilidade e dois telefones.
2. Cabeçalho fixo no fluxo com logotipo, menu de sete itens, alternador de tema e CTA “Fale Conosco”.
3. Conteúdo principal por rota.
4. Botão flutuante circular de WhatsApp no canto inferior direito.
5. Rodapé em quatro colunas: marca, links rápidos, serviços e contatos.
6. Selo flutuante “Edit with Base44”, que não pertence à marca e não deverá existir na recriação.

### Página inicial

Ordem observada:

1. Hero com selo “São Paulo - SP”, título “Saúde de quem você mais ama em boas mãos”, texto sobre 15 anos, CTAs para Annie e Serviços, avaliação visual e cartão “15+”.
2. Quatro destaques: Consultoria Especializada, Acompanhamento Integral, Procedimentos de Enfermagem e Planos Flexíveis.
3. Apresentação da fundadora Annie Uno, fotografia, credenciais e CTA para a história.
4. Grade de seis benefícios.
5. CTA final “Pronto para começar?” com WhatsApp de Annie e Fabiano.

### Sobre

1. Hero “Nossa História”.
2. Dois cartões: missão e visão.
3. Valores: Humanização em destaque, seguida de Empatia, Respeito à Individualidade, Compromisso, Qualidade, Transparência e Responsabilidade Social.
4. Diferenciais: processo seletivo rigoroso, comunicação integrada e especialização em gerontologia.

### Serviços

1. Hero “Nossos Serviços”.
2. Seis cartões: Consultoria Especializada; Acompanhamento Integral; Procedimentos de Enfermagem; Suporte em Eventos e Viagens; Planos Flexíveis; Horários Adaptáveis.
3. Processo de seleção em seis etapas.
4. Bloco de garantia de qualidade.
5. Comunicação integrada por grupo de WhatsApp.
6. CTA final com contatos de Annie e Fabiano.

### Equipe

1. Hero “Nossa Equipe”.
2. Três perfis profissionais alternando imagem e texto: Enfermeiros, Técnicos de Enfermagem e Cuidadores.
3. Três diferenciais da equipe.
4. Supervisão de Annie Uno, com fotografia, descrição e lista de benefícios.
5. CTA para avaliação gratuita.

### Avaliações

1. Hero com cinco estrelas e título “Avaliações”.
2. Indicadores: 150+ famílias, 98% de satisfação e nota 5.0.
3. Oito depoimentos nominais com parentesco e bairro.
4. CTA para solicitar avaliação.

### Contato

1. Hero “Entre em Contato”.
2. Três cartões: telefones, localização/cobertura e horário/disponibilidade.
3. Formulário com Nome, Email, Telefone e Mensagem, todos obrigatórios.
4. O envio é convertido em contato via WhatsApp; não há backend de formulário observado.
5. Contatos rápidos individuais e reforço de atendimento 24/7.

### Carreiras

1. Hero “Trabalhe Conosco” com CTA de candidatura.
2. Seis benefícios profissionais.
3. Vagas/requisitos para enfermeiros, técnicos e cuidadores.
4. Processo seletivo em sete passos.
5. CTA final com promessa de resposta em até 48 horas.

## 4. Comportamento funcional observado

- As sete rotas internas funcionaram pelo menu e também carregaram em acesso direto após aguardar o JavaScript. Em uma primeira leitura automatizada rápida, as páginas internas chegaram a exibir apenas o selo Base44 antes da aplicação; um novo teste direto carregou o conteúdo completo após cerca de cinco segundos. Isso aponta para dependência de renderização no cliente e risco de conteúdo em branco durante carga lenta, não para um link interno definitivamente quebrado.
- Os dois números de WhatsApp respondem: Annie é identificada como “Annie Uno”; o segundo número aparece como “Sênior Plus”. Confirmar se essa identificação é a desejada.
- Os telefones usam links `tel:` válidos.
- A candidatura abre um Google Form, mas visitantes não autenticados foram redirecionados para a tela de login do Google. Isso é uma barreira funcional importante.
- O formulário de contato tem validação HTML obrigatória e CTA “Enviar via WhatsApp”. Não há política de privacidade ou texto explicando o tratamento dos dados junto ao formulário.
- O tema claro/escuro funciona por troca da classe `dark` no documento. O rótulo acessível atual está em inglês: “Toggle dark mode”.
- Há transições curtas, normalmente de 150 a 300 ms, em cores, fundo, bordas, escala e sombras. O cabeçalho é `sticky` e os cartões/CTAs têm efeitos de hover discretos.

## 5. Problemas e riscos encontrados

### Conteúdo e comprovação

- Os oito depoimentos, 150+ famílias atendidas, 98% de satisfação, nota 5.0 e representação com cinco estrelas foram confirmados e autorizados pela proprietária.
- As informações profissionais e empresariais do site original, incluindo experiência, especializações, MBA, supervisão e disponibilidade, foram confirmadas. A área de atendimento aprovada é somente São Paulo, capital.
- “Melhor equipe de cuidados domiciliares de São Paulo” é um superlativo não comprovado.
- A promessa de resposta a candidaturas em 48 horas precisa ser operacionalmente verdadeira.
- O processo é descrito como seis etapas em Sobre/Serviços e sete etapas em Carreiras; a diferença precisa ser explicada ou unificada.
- Afirmações comerciais futuras que não estejam no site original continuam dependendo de confirmação; não serão inventadas.

### Acessibilidade

- O documento declara `lang="en"`, embora o conteúdo seja português; deve ser `pt-BR`.
- A marca “Sênior+” é um `h1` no cabeçalho, produzindo dois `h1` por página.
- O botão do menu móvel e o botão de fechar o menu não possuem nome acessível.
- O botão flutuante de WhatsApp não possui texto nem `aria-label` observável.
- Os rótulos do formulário são visuais, mas não usam `for`/`id`; leitores de tela não associam o rótulo ao campo.
- Campos não trazem `autocomplete` adequado; telefone usa `type="text"` em vez de `tel`.
- Há links contendo elementos `button`, uma combinação interativa inválida e problemática para teclado/leitores de tela.
- Não foi observado link “pular para o conteúdo”.
- Textos cinza no modo escuro e texto branco sobre fundos verde-claros devem passar por verificação de contraste WCAG em implementação.
- Não foi observado tratamento específico para `prefers-reduced-motion`.

### SEO

- Há títulos, descrições, canônicas e Open Graph por rota em acesso direto, o que é positivo.
- A renderização atual depende de JavaScript e mostrou estado vazio durante carga lenta; a geração estática elimina esse risco para robôs e usuários.
- `lang="en"` prejudica a indicação de idioma.
- A hierarquia duplicada de `h1` deve ser corrigida.
- O favicon aponta para um arquivo PNG, mas declara `type="image/svg+xml"`.
- Os dados estruturados incluem avaliações, números, credenciais, procedimentos e `JobPosting`; só devem ser recriados depois de validar as afirmações e os campos obrigatórios. O `JobPosting` atual descreve várias vagas em uma entrada única e não apresenta, no conteúdo inspecionado, datas de publicação/expiração.
- Não foi possível confirmar `robots.txt` e `sitemap.xml` porque o navegador bloqueou esses endpoints durante a auditoria. A nova versão deverá gerá-los explicitamente.
- Links de serviço no rodapé são texto sem navegação; não estão “quebrados”, mas perdem oportunidade de navegação interna.

### Conversão e Google Ads

- O login obrigatório no Google Form de candidatura aumenta abandono, mas sua permanência foi solicitada e não será alterada nesta etapa.
- Os links de WhatsApp receberão mensagens iniciais por contexto, sem dados pessoais em eventos de medição.
- Não há página de privacidade, aviso de tratamento de dados ou consentimento junto ao formulário. A necessidade jurídica exata deve ser validada, mas a ausência é um risco para coleta de leads e campanhas.
- Não há uma confirmação mensurável após conversão; contatos externos diretos dificultam atribuição sem eventos de clique.
- O selo Base44 cobre conteúdo/CTAs e gera barra horizontal em telas menores. Ele desaparece na versão independente.
- Telefones, área atendida e disponibilidade são repetidos de forma consistente, mas precisam ser verdadeiros para evitar reprovação de anúncio ou expectativa incorreta.

### Desempenho

- A página atual carrega um bundle JavaScript de aplicação, script/selo Base44 e chamadas de configuração, usuário e analytics da plataforma.
- O conteúdo depende de renderização no cliente. A versão Astro estática reduzirá JavaScript necessário.
- Imagens abaixo da dobra usam `loading="auto"`; devem usar carregamento tardio quando apropriado.
- A mesma foto do hero inicial é solicitada em versões de 800 e 1600 px. A nova versão deve gerar `srcset`, WebP/AVIF e dimensões explícitas.
- Há dezenas de SVGs inline repetidos. Um componente de ícone reutilizável reduz duplicação de autoria, mantendo SVG final acessível.
- Não há fonte web externa, o que é positivo para velocidade e privacidade.

### Responsividade

- Desktop: layout estável, largura máxima aproximada de 1280 px e grades de três/quatro colunas.
- Tablet: menu recolhido; cards passam a duas colunas. A foto de Annie ocupa aproximadamente 721 × 1002 px e torna a seção muito longa. O título principal permanece com 60 px.
- Celular: hero usa título de 48 px/60 px e quatro linhas; CTAs empilham; cards principais continuam em duas colunas estreitas; a foto de Annie é ocultada; benefícios viram uma coluna.
- O selo “15 anos de dedicação” ultrapassa cerca de 8 px o limite útil no teste de 390 px.
- A barra horizontal observada em tablet/celular foi causada principalmente pelo componente flutuante do Base44; o conteúdo principal ficou dentro da largura útil. A recriação deverá testar ausência total de overflow sem esse selo.

## 6. Melhorias técnicas necessárias — preservam o visual

1. Gerar todas as rotas estaticamente com Astro e HTML semântico.
2. Usar `pt-BR`, um único `h1`, landmarks corretos, skip link, nomes acessíveis e foco visível.
3. Corrigir associação de labels, tipos e autocomplete do formulário.
4. Substituir links com botões aninhados por um único elemento interativo estilizado.
5. Produzir títulos, descrições, canônicas, Open Graph e Twitter por rota; gerar sitemap e robots.
6. Criar favicon com tipo correto e imagem social local validada.
7. Implementar imagens responsivas locais, dimensões explícitas, lazy loading abaixo da dobra e otimização de formato.
8. Manter tema claro/escuro e transições, adicionando preferência de movimento reduzido.
9. Corrigir overflow móvel e garantir alvos de toque de pelo menos 44 × 44 px.
10. Remover dependências, chamadas e selo Base44.
11. Adicionar eventos próprios e documentados para cliques em WhatsApp/telefone/formulário, somente após decisão sobre analytics e consentimento.
12. Garantir que nenhum dado estruturado publique afirmações ainda não comprovadas.
13. Definir um fluxo de formulário compatível com hospedagem estática, sem escolher serviço externo nesta fase.
14. Criar página/aviso de privacidade após receber os dados empresariais e orientação apropriada.

## 7. Mudanças visuais ou comerciais opcionais — exigem aprovação

1. Reduzir levemente o título do hero em tablet/celular para encurtar a dobra inicial.
2. Transformar os destaques de duas colunas estreitas no celular em uma coluna.
3. Exibir uma versão recortada da foto de Annie no celular, hoje ocultada.
4. Usar mensagens pré-preenchidas distintas nos CTAs de WhatsApp por página/campanha.
5. Criar uma landing page específica para Google Ads, mantendo a mesma identidade e reduzindo distrações.
6. Tornar os itens de serviços do rodapé links para âncoras/rota de Serviços.
7. Ajustar textos superlativos e promessas futuras para versões específicas e confirmadas.

## 8. Tecnologia proposta

Astro + TypeScript é apropriado e não há motivo técnico para trocar a tecnologia preferida.

Proposta:

- Astro em modo estático (`output: static`).
- TypeScript estrito para dados de conteúdo e componentes.
- Componentes `.astro` para cabeçalho, faixa superior, rodapé, hero interno, cartões, CTAs, seção de equipe, depoimentos e formulários.
- CSS global com tokens e estilos por componente/página; JavaScript mínimo apenas para tema, menu e formulário.
- Conteúdo textual em módulos TypeScript ou coleções locais para evitar duplicação.
- Ativos aprovados em `public/images` ou processados por `src/assets`.
- Integração compatível com Cloudflare Pages por saída estática; nenhuma conta ou deploy nesta etapa.

## 9. Estrutura de arquivos estimada para a implementação

Estimativa inicial: cerca de 35 a 50 arquivos, dependendo do número de variantes de imagem.

```text
/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/
│  ├─ favicon.*
│  ├─ robots.txt
│  └─ images/                 # 8–15 arquivos/variantes aprovados
├─ src/
│  ├─ assets/                 # fontes/imagens processadas, se aplicável
│  ├─ components/             # aproximadamente 12–16 componentes
│  ├─ data/                   # navegação, serviços, equipe, avaliações
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ sobre.astro
│  │  ├─ servicos.astro
│  │  ├─ equipe.astro
│  │  ├─ avaliacoes.astro
│  │  ├─ contato.astro
│  │  ├─ carreiras.astro
│  │  └─ privacidade.astro    # depende de conteúdo aprovado
│  ├─ scripts/                # tema, menu e formulário
│  └─ styles/                 # tokens, global e componentes/páginas
└─ testes/configurações       # lint, typecheck e testes de smoke/a11y
```

## 10. Etapas propostas após aprovação

1. Registrar as confirmações recebidas em `CONTENT_CHECKLIST.md` e manter pendentes apenas dados ainda não fornecidos, como domínio, e-mail profissional e política definitiva.
2. Inicializar Astro/TypeScript e configuração estática.
3. Criar tokens visuais, layout compartilhado, tema e navegação responsiva.
4. Implementar Home e validar fidelidade nos três viewports.
5. Implementar as seis páginas internas com conteúdo aprovado.
6. Implementar formulário/CTAs conforme decisão de destino e privacidade.
7. Otimizar imagens e metadados; criar sitemap, robots, favicon e dados estruturados válidos.
8. Executar typecheck, build, validação de HTML, acessibilidade, links, teclado e responsividade.
9. Fazer comparação visual final e apresentar diferenças opcionais para aprovação.
10. Preparar instruções de Cloudflare Pages e domínio, sem publicar nem criar contas.

## 11. Critérios de aceite futuros

- Fidelidade visual aprovada em 1440 × 900, 768 px e 390 × 844.
- Todas as rotas funcionam com acesso direto e navegação interna sem JavaScript desnecessário.
- Sem overflow horizontal, conteúdo coberto ou mudança cumulativa perceptível causada por imagens.
- Navegação completa por teclado e nomes acessíveis em todos os controles.
- Build estático reproduzível e compatível com Cloudflare Pages.
- Somente conteúdo e ativos comprovados/aprovados são publicados.
- Eventos de conversão e tratamento de dados documentados antes de campanhas.
