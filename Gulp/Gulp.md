# Gulp

Kit de ferramentas de automoção de tarefas baseada em JavaScript

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda  evitar trabalhos lentos e repetitivo
- Criação de pipelines (Processo de trabalho, cada tarefa e executada em uma etapa)
- Você cria as configurações necessarias (flexivel)
- Tarefas escritas em JS ou plug-ins
- Aplica transformações em arquivos ainda na memoria (antes de gravar no disco)

## Porque automatizar?

- Melhor organização
- Evitar repetição de tarefas
- Mais tempo para focar no mais importante: regras de negocio e experiencia do usuario
- Usuario e sempre o nosso foco

## Principais recursos

- Minificação de arquivos
- Otimização de imagens (para melhor performance)
- Mescla de arquivos de diferentes origens

## Transpilação

- Processo de transformação (conversão) de escrita em outras linguaguens para o JAva Script. Voce podera escrver em TypeScript ou Babel que o codigo.
- Todo processo é executado a partir do node.js e gulp-cli(linha de comando)

## Global x Local

- A instalação do Node.Js é global
- Ja o Gulp e seus plugins são instalados localmente (em cada projeto)

## Gerenciadores de pacotes

- Dependências do projeto (podem ser bibliotecas ou qualquer coisa que importamos)
- NPM: Node Package Manager (gerenciador de pacote padrão do node)
- Utiliza o Node.js
- Permite a configuração rapida e facil de ambientes e plugins Node

### Instalando o Gulp

- Rodar o Node.js
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Agora na pasta do projeto, adicioanar o npm: npm init -y
- Criar o gulpfilr.js

### Trabalhando com Gulp

- Baseado em funções : tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e minificação de CSS e JS
- Diminuição do tamamnho (bytes) de imagens
