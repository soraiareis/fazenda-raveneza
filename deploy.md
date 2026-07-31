# Guia de publicação

## Plataforma recomendada

Recomendo publicar no Cloudflare Pages.

Motivos:

- plano gratuito forte para site estático;
- CDN global rápida;
- SSL automático;
- endereço gratuito `pages.dev`;
- possibilidade de conectar domínio próprio no futuro;
- deploy por GitHub ou por upload direto.

Endereço sugerido:

```text
fazenda-raveneza.pages.dev
```

Alternativas:

- GitHub Pages: bom se o projeto ficar em um repositório público.
- Netlify: simples para upload manual e deploy por Git.
- Vercel: excelente, mas mais orientado a aplicações com build moderno.

## Opção 1: Cloudflare Pages por upload direto

1. Crie uma conta gratuita em Cloudflare.
2. Entre em Workers & Pages.
3. Escolha Create application.
4. Escolha Pages.
5. Escolha Upload assets ou Drag and drop.
6. Rode o build local:

```bash
sh scripts/build-static.sh
```

7. Envie a pasta `dist/`.
8. Escolha o nome do projeto, por exemplo:

```text
fazenda-raveneza
```

O site ficará em:

```text
https://fazenda-raveneza.pages.dev
```

## Opção 2: Cloudflare Pages por linha de comando

Instale ou use o Wrangler com `npx` e rode:

```bash
sh scripts/deploy-cloudflare.sh
```

Se quiser usar outro nome de projeto:

```bash
CLOUDFLARE_PROJECT_NAME=fazendaraveneza sh scripts/deploy-cloudflare.sh
```

Na primeira execução, o Cloudflare pode pedir login no navegador.

## Opção 3: GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos do projeto.
3. Nas configurações do repositório, abra Pages.
4. Publique a partir da branch principal.

Para ter o endereço:

```text
fazendaraveneza.github.io
```

seria necessário criar a conta ou organização `fazendaraveneza` e publicar o site no repositório `fazendaraveneza.github.io`.

## Atualizar o site depois

1. Edite textos, fotos ou WhatsApp.
2. Revise localmente no navegador.
3. Rode:

```bash
sh scripts/build-static.sh
```

4. Publique novamente a pasta `dist/` no Cloudflare Pages ou rode:

```bash
sh scripts/deploy-cloudflare.sh
```

## O que não publicar

Não é necessário publicar a pasta `pictures/`. Ela contém fotos e vídeos originais pesados, usados como acervo bruto.

A publicação deve usar a pasta `dist/`, que contém apenas:

- `index.html`;
- `css/`;
- `js/`;
- `images/`;
- `robots.txt`;
- `sitemap.xml`.
