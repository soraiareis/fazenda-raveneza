# Fazenda Raveneza

Site estático em português para apresentação comercial da Fazenda Raveneza, com foco em conversão de visitantes em contatos pelo WhatsApp.

## Estrutura

```text
fazenda-raveneza/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── casa-sede/
│   ├── hero/
│   ├── jardins/
│   ├── lazer/
│   ├── localizacao/
│   ├── og/
│   ├── producao-rural/
│   └── recursos-naturais/
├── pictures/
│   └── fotos originais recebidas por WhatsApp
├── scripts/
│   ├── build-static.sh
│   └── deploy-cloudflare.sh
├── deploy.md
├── robots.txt
└── sitemap.xml
```

## Como editar textos

Abra `index.html` e edite o conteúdo diretamente nas seções:

- `#inicio`: título, chamada principal e botões.
- `#sobre`: apresentação geral.
- `#destaques`: cards de diferenciais.
- `#galeria`: legendas e fotos da galeria.
- `#localizacao`: texto de localização e mapa.
- `#valor`: valor de venda e negociação.

Depois de alterar, abra o `index.html` no navegador para revisar.

## Como trocar o WhatsApp

O número atual é:

```text
+55 31 99954-6727
```

Para trocar, edite `js/script.js`:

```js
const WHATSAPP_PHONE = "5531999546727";
const WHATSAPP_DISPLAY = "+55 31 99954-6727";
```

Use somente números em `WHATSAPP_PHONE`, com código do país e DDD. Exemplo:

```js
const WHATSAPP_PHONE = "5531991234567";
const WHATSAPP_DISPLAY = "+55 31 91234-5678";
```

## Como trocar fotos

As fotos usadas no site estão em `images/`. A pasta `pictures/` guarda o acervo bruto original.

Para substituir uma foto sem mexer no HTML:

1. Escolha a nova imagem.
2. Otimize ou redimensione para ficar leve.
3. Salve com o mesmo nome da imagem atual.
4. Substitua o arquivo dentro de `images/`.

Exemplo: para trocar a imagem principal, substitua:

```text
images/hero/fazenda-raveneza-casa-sede.jpg
```

Se quiser adicionar uma nova imagem à galeria, copie a foto para uma pasta em `images/` e adicione um novo bloco `.gallery-card` em `index.html`.

## Como revisar localmente

Opção simples: abra `index.html` diretamente no navegador.

Opção com servidor local:

```bash
python3 -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

## Publicação

A recomendação é usar Cloudflare Pages com o endereço gratuito:

```text
https://fazenda-raveneza.pages.dev
```

As instruções completas estão em `deploy.md`.

## Como trocar o domínio do site

O projeto está preparado com o domínio sugerido:

```text
https://fazenda-raveneza.pages.dev
```

Se o endereço final for outro, atualize esse domínio em:

- `index.html`: canonical, Open Graph, Twitter Card e JSON-LD;
- `robots.txt`: URL do sitemap;
- `sitemap.xml`: URL principal do site;
- `deploy.md`: instruções de publicação.

## Build estático

Para preparar uma pasta limpa de publicação:

```bash
sh scripts/build-static.sh
```

Isso cria a pasta `dist/` contendo apenas os arquivos necessários para publicar o site.
