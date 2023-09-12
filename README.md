# Market-with-NodeJS
Marketplace Node.js API

Visão Geral
Esta API Node.js permite a gestão de clientes, compras, produtos e usuários para um marketplace online. A seguir, estão detalhadas as funcionalidades e endpoints disponíveis:

#Clientes

##Recursos: Gerenciamento de informações de clientes.

#GET /api/clientes
##Descrição: Obtém uma lista de todos os clientes cadastrados.
##Exemplo de Uso: Para pegar todos clientes do mercado.


#GET /api/:id/recomendados
##Descrição: Obtém a lista de produtos recomendados para um cliente com base no ID fornecido.
##Parâmetros: id (ID do cliente).
##Exemplo de Uso: Pegar os produtos recomendados de acordo com o ID do cliente.


#PUT /api/cliente/:id
##Descrição: Atualiza as informações de um cliente com base no ID fornecido.
##Parâmetros: id (ID do cliente).
##Exemplo de Uso: Quando você quiser atualizar algum dado do cliente.


#DELETE /api/cliente/:id
##Descrição: Deleta um cliente com base no ID fornecido.
##Parâmetros: id (ID do cliente).
##Exemplo de Uso: Usuário não quer mais a conta no mercado.


#Compras
##Recursos: Gestão de compras dos clientes.


#POST /api/compras
##Descrição: Realiza uma nova compra.
##Parâmetros: ID do produto / ID do usuario, e a data da compra.


#Produtos
##Recursos: Gerenciamento de informações de produtos.


#GET /api/produtos
##Descrição: Obtém uma lista de todos os produtos disponíveis.
##Exemplo de Uso: Retornar todos produtos em estoque do mercado.

#PUT /api/produtos/:id
##Descrição: Atualiza as informações de um produto com base no ID fornecido.
##Parâmetros: id (ID do produto).
##Exemplo de Uso: Alterar algum dado de algum produto.

#POST /api/produtos
##Descrição: Cria um novo produto.

#DELETE /api/produtos/:id1/:id2
##Descrição: Deleta um produto com base no ID fornecido. id1 é o ID do funcionário que realiza a operação e id2 é o ID do produto a ser deletado.
##Parâmetros: id1 (ID do funcionário), id2 (ID do produto).
##Eu passo esses 2 ID's por que, não vi sentido em um cliente poder apagar um produto do estoque, então vc passa o ID do funcionario se não for um funcionario o código vai notificar.


#Usuários
##Recursos: Gerenciamento de usuários da plataforma.


#POST /api/login
##Descrição: Permite que um usuário faça login na plataforma.
##Parâmetros: Login e password

#POST /api/register
##Descrição: Permite que um usuário crie uma nova conta na plataforma.
##Parâmetros: Login,Password,nome,email e o tipo dele para saber se é um cliente ou não.
