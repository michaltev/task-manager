/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $username: String
  ) {
    onCreateTask(filter: $filter, username: $username) {
      id
      name
      userId {
        id
        username
        email
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $username: String
  ) {
    onUpdateTask(filter: $filter, username: $username) {
      id
      name
      userId {
        id
        username
        email
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $username: String
  ) {
    onDeleteTask(filter: $filter, username: $username) {
      id
      name
      userId {
        id
        username
        email
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
      username
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
