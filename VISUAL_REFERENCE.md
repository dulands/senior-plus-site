# Referência visual do site atual

Inventário visual medido no site público em 6 de agosto de 2026. Valores são aproximações de implementação e deverão ser confirmados por comparação visual, não tratados como especificação de marca oficial.

## 1. Direção visual

A identidade atual combina assistência humana e ambiente de saúde com uma estética contemporânea:

- verde-água/mint como cor afetiva e de destaque;
- verde-petróleo como cor institucional e de contraste;
- fundos muito claros no tema claro e carvão no tema escuro;
- títulos grandes, brancos nos heros, com tipografia sem serifa pesada;
- cartões retangulares de cantos arredondados, borda sutil e sombra suave;
- ícones lineares arredondados;
- fotografias de cuidado/saúde com sobreposição verde;
- CTAs brancos ou verde-petróleo, sem gradientes chamativos adicionais.

Não há fonte de marca externa observada. O site usa a pilha de sistema (`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`).

## 2. Paleta observada

| Uso | Cor aproximada | Observação |
| --- | --- | --- |
| Mint principal | `#95E1D3` | fundo/acentos, ícones e bordas |
| Mint intermediário | `#6DD6C2` | gradientes e destaques |
| Mint claro | `#BDECE3` | terceiro ponto do hero e badges |
| Teal de ação | `#18A89B` | botões primários |
| Teal escuro | `#167D7C` | texto de botão e gradiente escuro |
| Teal profundo | `#0F5C57` | gradientes do modo escuro |
| Carvão principal | `#2A2A2A` | cabeçalho/tema escuro |
| Carvão profundo | `#1A1A1A` | cartões/gradientes escuros |
| Rodapé escuro | `#121212` | rodapé no tema escuro |
| Off-white | `#FAFAF9` | fundo de seções claras |
| Branco | `#FFFFFF` | cartões, títulos e CTAs |
| Cinza de texto | `#6B7280` | texto secundário claro; revisar contraste no escuro |
| Cinza escuro | `#374151` | corpo de texto no tema claro |
| WhatsApp | `#25D366` | botão flutuante |
| Alerta do botão flutuante | `#EF4444` | ponto vermelho |
| Ícone de tema | amarelo próximo de `#FACC15` | sol no cabeçalho |

### Gradientes principais

- Hero inicial claro: `#95E1D3 → #6DD6C2 → #BDECE3`, diagonal.
- Heros internos e CTA claro: `#95E1D3 → #6DD6C2`, diagonal.
- Modo escuro: `#167D7C → #0F5C57` (com variações).
- Overlay do hero inicial: mint quase opaco à esquerda e transparente à direita.
- Seções neutras: transições discretas entre `#FAFAF9`/branco ou `#2A2A2A`/`#1A1A1A`.

## 3. Tipografia

| Elemento | Desktop | Tablet | Celular | Peso/altura de linha |
| --- | ---: | ---: | ---: | --- |
| Nome da marca | 24 px | 24 px | 24 px | 700 / 32 px |
| H1 principal/interno | 60 px | 60 px | 48 px | 700 / 60 px |
| H2 grande | 48 px | 48 px | 36 px | 700 / 40–48 px |
| H2 intermediário | 36 px | 36 px | 30–36 px | 700 / 40 px |
| H3 de card | 18–30 px | 18–30 px | 18–24 px | 700 |
| Corpo destacado | 18–20 px | 18–20 px | 16–18 px | 400–500 / 1.5–1.7 |
| Corpo comum | 16 px | 16 px | 16 px | 400 |
| Texto pequeno/badge | 12–14 px | 12–14 px | 12–14 px | 500–700 |

Títulos são largos e com pouco tracking aparente. O H1 móvel do início usa 48 px com `line-height` de 60 px e ocupa quatro linhas em 390 px.

## 4. Grade, largura e espaçamento

- Container principal: classe equivalente a `max-width: 1280px`, centralizado.
- Padding lateral desktop: aproximadamente 16 px dentro do container; conteúdo útil medido em 1248 px, com margem externa de cerca de 89 px em viewport útil de 1425 px.
- Padding lateral tablet/celular: 16 px.
- Espaçamento vertical recorrente: 64 px (`py-16`) e 80 px (`py-20`); hero inicial usa aproximadamente 80/128 px conforme breakpoint.
- Gaps comuns: 24–32 px em cards e 48 px entre colunas grandes.
- Bordas arredondadas: 6 px em botões, 8 px em controles, 12/16 px em cartões e imagens, 24 px em destaques maiores, círculo completo em badges/ícones.

### Sombras observadas

- Card leve: equivalente a `0 10px 15px -3px rgba(0,0,0,.10)` mais sombra curta.
- CTA/elemento elevado: equivalente a `0 20px 25px -5px rgba(0,0,0,.10)` mais sombra curta.
- Botão padrão: sombra muito curta, aproximadamente `0 1px 3px rgba(0,0,0,.10)`.
- WhatsApp flutuante: sombra grande, aproximadamente `0 25px 50px -12px rgba(0,0,0,.25)`.

## 5. Cabeçalho e navegação

### Desktop — 1440 × 900

- Faixa superior: 36 px de altura, teal escuro, conteúdo em uma linha.
- Cabeçalho: 80 px, fundo branco no claro e `#2A2A2A` no escuro; permanece no topo ao rolar.
- Logo: imagem 48 × 48 px; texto “Sênior+” 24 px; subtítulo “Cuidados com amor” 12 px.
- Menu: Início, Sobre, Serviços, Nossa Equipe, Avaliações, Contato, Carreiras.
- Item ativo: bloco mint com raio de aproximadamente 8 px.
- Ações: ícone sol/lua e CTA “Fale Conosco” de cerca de 147 × 36 px.

### Tablet e celular

- A partir de largura inferior ao breakpoint de desktop, links são substituídos por ícone hambúrguer.
- O menu aberto é um painel em fluxo, abaixo da primeira linha do cabeçalho, com links verticais e CTA de largura total.
- O painel não é modal; o hero é deslocado para baixo.
- No celular, a faixa superior mostra apenas parte das informações, priorizando “São Paulo - SP”.
- O botão do menu/fechar precisa ganhar `aria-label` na recriação.

## 6. Hero inicial

### Desktop

- Começa em `y ≈ 116 px` e mede aproximadamente 769 px de altura.
- Duas colunas de cerca de 600 px.
- Coluna esquerda: badge de localidade, H1 60/60 px, parágrafo, dois CTAs e bloco de avaliação.
- Coluna direita: foto 800 × 529 exibida em caixa de cerca de 594 × 394 px, raio 16 px.
- Cartão branco “15+ Anos de experiência” sobrepõe a base esquerda da foto.
- Uma versão ampliada da mesma fotografia é usada como fundo decorativo, com overlay verde.

### Tablet — 768 px

- Hero mede aproximadamente 677 px.
- Coluna de texto ocupa quase toda a largura (cerca de 721 px).
- H1 continua com 60 px e forma duas linhas grandes.
- A imagem em elemento próprio é ocultada; permanece o fundo fotográfico decorativo à direita.
- CTAs continuam lado a lado.

### Celular — 390 × 844 (largura útil medida: 375 px)

- Hero mede aproximadamente 797 px.
- H1 48/60 px, largura de 343 px e quatro linhas.
- CTAs empilham e ocupam quase toda a largura.
- Avaliação permanece abaixo; o selo do Base44 cobre parte dela no site atual.
- A imagem em elemento próprio e o cartão “15+” do hero não aparecem como no desktop.

## 7. Seções da Home

### Destaques de serviços

- Fundo off-white/claro ou carvão no escuro.
- Desktop: quatro colunas; tablet e celular: duas colunas.
- Ícone em círculo/bloco teal e título pequeno em negrito.
- Em 390 px, cada coluna tem cerca de 108–113 px úteis para o título, causando quebras intensas; manter fiel inicialmente e oferecer variante de uma coluna como melhoria opcional.

### Fundadora

- Desktop: seção de duas colunas; foto de Annie à esquerda e conteúdo à direita.
- Foto original observada: 737 × 1024; exibida aproximadamente em 600 × 834 no desktop, raio 24 px.
- Selo “15 anos de dedicação” sobrepõe a foto.
- Tablet: foto vira bloco de aproximadamente 721 × 1002; texto vem abaixo; seção total ≈ 1686 px.
- Celular: foto é ocultada; selo permanece e ultrapassou levemente o limite direito no teste.

### Benefícios

- Desktop: grade 3 × 2; tablet: 2 × 3; celular: 1 × 6.
- Cards com ícone mint, título 20 px e texto secundário.
- Altura aproximada de 172–204 px por card conforme viewport.

### CTA final

- Gradiente mint/teal, ícone grande de coração, título central e dois botões brancos.
- Desktop/tablet: cerca de 428 px; celular: cerca de 580 px.
- Botões ficam empilhados no celular.

## 8. Páginas internas

### Hero interno compartilhado

- Inicia após os 116 px de topbar+cabeçalho.
- Altura de cerca de 309–477 px no desktop, conforme presença de ícone/CTA.
- Fundo com gradiente verde e foto de ambiente médico (`photo-1576091160399-112ba8d25d1d`) coberta por overlay.
- Título 60 px central; subtítulo 18–20 px, largura máxima aproximada de 864 px.
- Ícones brancos de 48–64 px em Avaliações, Contato e Carreiras.

### Sobre

- Missão/visão: duas colunas, cards escuros/claros de mesma altura.
- Valores: um card central em destaque e seis cards menores em grade.
- Diferenciais: três cards em linha.

### Serviços

- Seis cards principais em grade de três colunas no desktop, com linha teal no topo.
- Ícone em quadrado arredondado teal, subtítulo mint e lista com checks.
- Processo numerado com seis etapas e bloco de garantia.
- Comunicação integrada em composição de duas colunas.

### Equipe

- Blocos de duas colunas alternadas, imagens com cerca de 608 × 400 px no desktop.
- Enfermeiros: foto Unsplash `photo-1559839734-2b71ea197ec2`.
- Técnicos e cuidadores: imagens hospedadas no bucket do projeto, com licença a confirmar.
- Bloco de liderança: fotografia de Annie em aproximadamente 600 × 834 px.

### Avaliações

- Três cards de indicadores em uma linha.
- Depoimentos em cards repetidos, com cinco estrelas, aspas, nome, parentesco e localização.
- Nenhum retrato de cliente é usado.
- Todos os indicadores/depoimentos ficam condicionados à comprovação.

### Contato

- Três cards informativos em linha.
- Abaixo, duas colunas: formulário e contatos rápidos.
- Inputs têm 48 px de altura; textarea cerca de 128 px; botão de envio 48 px.
- Bordas discretas e fundo `#1A1A1A` no escuro.

### Carreiras

- Hero inclui botão branco.
- Benefícios em grade 3 × 2.
- Vagas em três cards com requisitos.
- Processo seletivo em composição de imagem/texto e sequência numerada.

## 9. Botões, links e estados

- Botões principais: altura 36 ou 48 px; raio 6 px; peso 500–600.
- Botões brancos sobre teal: texto `#167D7C`/`#18A89B`, sombra média.
- Botão teal: fundo `#18A89B`, texto branco, hover aproximado `#6DD6C2`.
- Links do menu usam transição de 200 ms e item ativo com fundo mint.
- Cartões e imagens apresentam transformações/sombras discretas no hover.
- Alternância de tema e fundos usa cerca de 300 ms.
- WhatsApp flutuante: 60 × 60 px no desktop/tablet; círculo verde e ponto vermelho de status.
- A recriação deve manter movimento discreto e respeitar `prefers-reduced-motion`.

## 10. Temas claro e escuro

O site suporta ambos e a preferência é aplicada pela classe `dark` no elemento raiz.

Tema claro:

- cabeçalho/cartões brancos;
- seções `#FAFAF9`;
- texto principal quase preto;
- heros mint/teal.

Tema escuro:

- cabeçalho/seções `#2A2A2A`;
- cartões `#1A1A1A`;
- rodapé `#121212`;
- texto principal branco;
- texto secundário cinza;
- acentos mint mais claros (`#A8F0E8` aparece em alguns itens).

O rótulo do controle deve ser traduzido e refletir a ação, por exemplo “Ativar tema escuro”/“Ativar tema claro”.

## 11. Inventário de imagens e origem

| Ativo atual | Uso | Dimensão observada | Situação para uso local |
| --- | --- | ---: | --- |
| `2a98eae19_Designsemnome.png` | Logo | 200 × 200 | Bucket público do projeto; confirmar propriedade/original |
| `47c51bf16_Designsemnome.png` | Favicon/OG | render 1200 × 630 | Bucket público do projeto; confirmar propriedade e tipo correto |
| `89de8db26_AnnieUno.png` | Fundadora/liderança | 737 × 1024 | Bucket público do projeto; confirmar consentimento e original |
| `e6e48c598_duas-enfermeiras-que-trabalham-na-clinica-em-uniformes.jpg` | Técnicos | 1024 × 683 | Origem/licença não clara; bloqueado até comprovação |
| `c2af82045_homem-e-mulher-sorridente-tiro-medio.jpg` | Cuidadores | 1024 × 681 | Origem/licença não clara; bloqueado até comprovação |
| Unsplash `photo-1576765608535-5f04d1e3f289` | Hero/Home | 800 × 529 + fundo 1600 | Origem identificada; registrar autor/licença antes de copiar |
| Unsplash `photo-1559839734-2b71ea197ec2` | Enfermeiros | 800 × 533 | Origem identificada; registrar autor/licença antes de copiar |
| Unsplash `photo-1576091160399-112ba8d25d1d` | Heros internos | fundo 1600 | Origem identificada; registrar autor/licença antes de copiar |
| Unsplash `photo-1522071820081-009f0129c71c` | Processo seletivo | 800 px | Origem identificada; registrar autor/licença antes de copiar |

Os ícones são SVGs lineares com classes da biblioteca Lucide. Devem ser reproduzidos por uma dependência licenciada e acessível. Imagens e SVGs do selo Base44 não serão reutilizados.

## 12. Referência responsiva resumida

| Aspecto | Desktop 1440 | Tablet 768 | Celular 390 |
| --- | --- | --- | --- |
| Navegação | menu completo | hambúrguer | hambúrguer |
| Hero Home | duas colunas | texto total + fundo | texto total + fundo |
| H1 Home | 60 px | 60 px | 48 px |
| Cards de destaque | 4 colunas | 2 colunas | 2 colunas estreitas |
| Fundadora | foto + texto | foto, depois texto | foto ocultada |
| Benefícios | 3 colunas | 2 colunas | 1 coluna |
| CTAs duplos | lado a lado | lado a lado | empilhados |
| Rodapé | 4 colunas | adaptação intermediária | 1 coluna |
| Altura Home observada | ≈ 3728 px | ≈ 4919 px | ≈ 5423 px |

## 13. Pontos de fidelidade a preservar

1. Paleta mint/teal/carvão e suporte claro/escuro.
2. Hero fotográfico com overlay verde e títulos brancos grandes.
3. Cabeçalho com faixa superior, marca à esquerda e CTA à direita.
4. Cantos arredondados e sombras suaves.
5. Alternância de blocos claros/escuros e gradientes discretos.
6. Ícones lineares em blocos teal.
7. Ordem das seções e densidade de conteúdo.
8. CTAs de WhatsApp para os dois contatos.
9. Botão flutuante de WhatsApp, sem o selo Base44.
10. Movimento curto e discreto.

Qualquer alteração fora das correções técnicas descritas em `PLAN.md` deve ser apresentada antes para aprovação.
