# Planilha seletora de fundos imobiliários

Planilha que possibilita filtrar com facilidade os melhores fundos imobiliários do mercado brasileiro, utilizando conceitos que são amplamente aceitos por proficionais da hárea.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em sua conta Google.

Consulte a seção **[Copiando-planilha](#-copiando-planilha)** para saber como implantar o projeto.

### 📋 Pré-requisitos

Você precisa ter uma conta do Google para acessar a planilha com todas as suas funcionalidades.

```
exemplo@google.com
```

### 🔧 Copiando-planilha

Para obter uma cópia planilha funcional você precisará acessar o link de cópia e seguir o passo a passo para ativar a automação feita com JavaScript

Link para fazer uma cópia da planilha:

- **[Planilha Seletora de Fundos Imobiliários](https://docs.google.com/spreadsheets/d/1TqsEVithp59ttpRQ2IuAwflyIg96y3lFu88yI5-WiuY/copy)**


### 🔧 Habilitando o JavaScript

Para habilitar a automação será nescessário criar trigers de acionamento.

1. Acesse a aba extenções
2. Escolha a opção Apps Script
3. Deverá carregar uma tela como esta:

![Tela do AppScript](/img/Captura%20de%20tela%20de%202024-06-11%2019-42-36.png)

4. No menu lateral escolha a opção ***"Acionadores"***
5. Deverá carregar uma tela como esta:

![Tela de adição de acionador](/img/Captura%20de%20tela%20de%202024-06-11%2019-42-59.png)

6. Depois clique no botão ***"Adicionar acionador"***
7. Deverá carregar uma tela como esta:

![Popup de adição de acionador](/img/Captura%20de%20tela%20de%202024-06-11%2019-43-12.png)

8. Mude apenas a ***"Configurações de notificação de falha"*** se quiser receber noficações menos frequêntes
9. Clique no botão salvar e o primeiro acionador estará inserido.

![Imagem do primeiro acionador inserido](/img/Primeiro%20acionador%20inserido.png)

10. para adicionar o segundo acionador repita o passo 6
11. Na primeira opção ***"Escolha a função que será executada"*** selecione a função ***"Atualizar"***
12. Na opção: ***"Selecione o tipo de evento"*** selecione ***"Ao editar"***
13. Clique no botão salvar e o segundo acionador estará inserido

![Imagem dos dois acionadores inseridos](/img/Segundo%20acionador%20inserido.png)

Agora você ja pode testar o acionamento da automação inserida. Caso seja a primeira execução que você faça de uma automação nas planilhas Google pode ser solicitado o Login na sua conta do Google para autorizar o acesso.

Essa autenticação é realizada pelo próprio google não tendo relação direta com a planilha ou o código de automação que você está acessando.

14. No menu lateral clique em ***"Editor"***
15. Depois clique em ***"Executar"***

![Imagem do código executao](/img/Código%20executado.png)


## ⚙️ Utilizando a planilha

A planilha possui duas abas: Filtro e Base de Dados cada uma possui uma função expecífica que será exibido a seguir.

### 🔩 Aba Filtro

Esta aba permite fazer o filtro dos Fundos Imobiliários na prática, na parte superior temos os campos de filtro que você pode editar com suas preferências, porém logo a baixo em destaque há um exemplo de padrões convencionais mais usados

![Imagem da aba Filtro](/img/Aba%20Filtro.png)

### ⌨️ Aba Base de Dados

Esta aba funciona utilizando uma função que carrega os dados dos Fundos Imobiliarios a partir de do site [clubefii.com.br](http://www.clubefii.com.br/fundos_imobiliarios_ranking).

A automação JavaScript garante que a planilha será atualizada, ao abrir ou ao clicar no checkbox no canto superior direito da planilha, o tempo de carregamento da planilha pode variar de acordo com a internet e a potência do seu computador.

Caso a planilha não carregue pode ter algo errado com os acionadores do Apps Script, recomendo revisar a secção [Habilitando o JavaScript](#-habilitando-o-javascript). Caso o erro persista entre em contato comigo para enterndermos o que está acontecendo. 

![Imagem da aba Base de Dados](/img/Aba%20Base%20de%20Dados.png)


## 🛠️ Construído com

* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - Permite fazer a automação
* [Google Planilhas](https://maven.apache.org/) - Simples, completo e acessível
* [Cluve Fii](https://rometools.github.io/rome/) - A fonte de dados


## 📌 Versão

Utilizei [GitFlow](http://gist.github.com/_paulo-raoni/1a8f52138f67fd40379f454ee61aa4ce) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Deixo meu agradecimento ao canal Sheets Easy por todo conhecimento que tenho adquirido sobre as ferramentas do Google

* **Youtube** - [Sheets Ease](https://youtube.com/@SheetsEasy)

## 📄 Licença

Este projeto está sob a licença (GNU GENERAL PUBLIC LICENSE) - veja o arquivo [LICENSE.md](LICENSE) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* Entre em contato comigo [Linkedin](https://www.linkedin.com/in/antoniojhone/) 
<a href="https://www.linkedin.com/in/antoniojhone/">
  <img align="justfy" alt="Jhone Antonio | LinkedIN" width="14px" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
</a>


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊

✒️ editado por [Jhone Antonio](https://github.com/ebonyWizard4/) 😊
