# Contexto
Construir uma aplicação web com as seguintes funcionalidades:

* Exibição de fotos em formato de galeria (grid);
* Responsividade para visualização entre dispositivos mobile e desktop;
* O design e disposição dos elementos em forma de grid é livre.

# Tech Stack

* NextJS;

* Tailwind;

* Shadcn ou MUI;

* Zustand (se necessário);

* React Hook Form (para o CRUD da sessão avançada).

# Escolha de APIs
Você terá a opção de utilizar uma API nossa (avançado) ou utilizar a API de imagens picsum (simplificado).

Fica a seu critério o uso de cada uma delas. Use a que se adequar melhor ao que você desejar demonstrar.

## Simplificado

Utilizar API de imagens: https://picsum.photos/ 

## Avançado

Ao invés de utilizar o picsum, integrar com um backend gerado por nós para duas tarefas:

Gerar uma URL assinada para realizar o upload de imagens;

Para isso, utilize a URL https://frontend-challenge-backend-842303020925.us-east1.run.app

Para referência, para utilizar a URL assinada podemos seguir aqui: https://cloud.google.com/storage/docs/performing-resumable-uploads 

Obs.: para upload de imagens usando URL assinada é necessário utilizar a XML API.

Após gerar a URL assinada e realizar o envio da imagem, deverá ser feito um POST para o endpoint https://frontend-challenge-backend-842303020925.us-east1.run.app/api/v1/images

Listar as imagens armazenadas;

Para isso, realize um GET para https://frontend-challenge-backend-842303020925.us-east1.run.app/api/v1/images

Uma listagem de arquivos será gerada com a url assinada de cada um deles onde você poderá renderizar a mesma.

Todos esses endpoints deverão ser acessados enviando um Bearer Token no header, utilizando o header authorization. Pode ser o valor que quiser, contanto que siga o mesmo valor sempre, visto que ele será o guia para o acesso às imagens enviadas.

Os endpoints e seus payloads podem ser consultados [aqui](https://frontend-challenge-backend-842303020925.us-east1.run.app).