<h1 align="center">Sistema de login</h1>
<p align="center">Criação de contas com senhas armazenadas utilizando hash no banco de dados, login gerando um token e um refresh token para autenticação do usuário, redefinição de senha sendo enviado um token ao email (utilizei serviço do mailtrap).</p>

<p align="center">
  <a href="#instalacao">Instalação</a>
  <a href="#como-usar">Como usar</a>
</p>

<h2 id="instalacao">Instalação</h2>
<p>Tenha instalado na máquina: visual studio code, node.js, mongodb, thunder client</p>
<p>Crie conta no mailtrap</p>
<p>Baixe a pasta do projeto</p>
<p>Inicie a instância do banco de dados</p>
<p>Configure as variáveis de ambiente</p>
<p>No terminal bash rode: npm install, depois rode: npm run start:dev</p>

<h2 id="como-usar">Como usar</h2>
<p>No Thunder Client suba o arquivo das variáveis de ambiente</p>
<p>Faça requisições post: {{BASE_URL}}/createUser enviando exemplo: { "firstName": "nome", "lastName": "sobrenome", "email": "email@gmail.com", "password": "Client" } SERÁ CRIADA A CONTA NO BANCO DE DADOS</p>
<p>Faça requisições post: {{BASE_URL}}/loginUser enviando exemplo: { "email": "email@gmail.com", "password": "Client" } RETORNARÁ UM TOKEN PARA AUTENTICAÇÃO</p>
<p>Faça requisições post: {{BASE_URL}}/forgotPasswordUser enviando exemplo: { "email": "email@gmail.com" } SERÁ ENVIADO UM TOKEN AO EMAIL (MAILTRAP), SALVE ESTE TOKEN PARA ALTERAR A SENHA</p>
<p>Faça requisições post: {{BASE_URL}}/resetPasswordUser NO HEADER DA REQUISIÇÃO ENVIE O: x-access-token E NO VALUE COLOQUE O TOKEN, NO CORPO DA REQUISIÇÃO ENVIE { "newPassword": "novaSenha", "confirmNewPassword": "novaSenha" }</p>
