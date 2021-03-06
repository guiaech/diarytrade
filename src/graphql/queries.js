/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      username
      data
      capital
      delta
      meta
      metaloss
      pobservacao
      poperacao
      resultado
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        data
        capital
        delta
        meta
        metaloss
        pobservacao
        poperacao
        resultado
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
