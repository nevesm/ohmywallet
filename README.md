📚📦💸 Projeto fintech para a faculdade FIAP - Graduação em análise e desenvolvimento de sistemas.

## Frameworks e libs utilizados
- NextJS (framework de React)
- Tailwind CSS

## Acessando codebase
Todo o HTML está escrito em [page.js](./src/app/page.js).

## Acessando estáticos
O Next.js permite iniciar como um site estático ou Aplicativo de Página Única (SPA) e, posteriormente, atualizar opcionalmente para usar recursos que exigem um servidor.

Quando em execução `next build`, Next.js gera um arquivo HTML por rota. Ao dividir um SPA estrito em arquivos HTML individuais, o Next.js pode evitar carregar código JavaScript desnecessário no lado do cliente, reduzindo o tamanho do pacote e permitindo carregamentos de página mais rápidos.

Como o Next.js suporta essa exportação estática, ele pode ser implantado e hospedado em qualquer servidor da Web que possa servir ativos estáticos HTML/CSS/JS.

Depois de rodar o `next build`, Next.js produzirá uma pasta [out](./out/) que contém os ativos HTML/CSS/JS para sua aplicação.

## Acessando o projeto na web
Caso não consiga ler o HTML, acesse via web:
https://ohmywallet.vercel.app/