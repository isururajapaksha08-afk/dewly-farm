# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `users`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListFarms*](#listfarms)
  - [*ListUsers*](#listusers)
  - [*GetUser*](#getuser)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateUserAccess*](#createuseraccess)
  - [*DeleteUserAccess*](#deleteuseraccess)
  - [*DeleteUser*](#deleteuser)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `users`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@firebasegen/users-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/users-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/users-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `users` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListFarms
You can execute the `ListFarms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
listFarms(options?: ExecuteQueryOptions): QueryPromise<ListFarmsData, undefined>;

interface ListFarmsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListFarmsData, undefined>;
}
export const listFarmsRef: ListFarmsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listFarms(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListFarmsData, undefined>;

interface ListFarmsRef {
  ...
  (dc: DataConnect): QueryRef<ListFarmsData, undefined>;
}
export const listFarmsRef: ListFarmsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listFarmsRef:
```typescript
const name = listFarmsRef.operationName;
console.log(name);
```

### Variables
The `ListFarms` query has no variables.
### Return Type
Recall that executing the `ListFarms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListFarmsData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListFarmsData {
  farms: ({
    id: UUIDString;
    farmName: string;
    location: string;
  } & Farm_Key)[];
}
```
### Using `ListFarms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listFarms } from '@firebasegen/users-connector';


// Call the `listFarms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listFarms();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listFarms(dataConnect);

console.log(data.farms);

// Or, you can use the `Promise` API.
listFarms().then((response) => {
  const data = response.data;
  console.log(data.farms);
});
```

### Using `ListFarms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listFarmsRef } from '@firebasegen/users-connector';


// Call the `listFarmsRef()` function to get a reference to the query.
const ref = listFarmsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listFarmsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.farms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.farms);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    id: UUIDString;
    name: string;
    email?: string | null;
    role: string;
    phoneNumber?: string | null;
    status: string;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
    userAccesses_on_user: ({
      id: UUIDString;
      dashboard: boolean;
      animals: boolean;
      health: boolean;
      breeding: boolean;
      production: boolean;
      fields: boolean;
      crops: boolean;
      harvest: boolean;
      inventory: boolean;
      suppliers: boolean;
      equipment: boolean;
      employees: boolean;
      sales: boolean;
      customers: boolean;
      income: boolean;
      expenses: boolean;
      reports: boolean;
      notifications: boolean;
      users: boolean;
      settings: boolean;
    } & UserAccess_Key)[];
  } & User_Key)[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@firebasegen/users-connector';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@firebasegen/users-connector';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    name: string;
    email?: string | null;
    role: string;
    phoneNumber?: string | null;
    status: string;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
    userAccesses_on_user: ({
      id: UUIDString;
      dashboard: boolean;
      animals: boolean;
      health: boolean;
      breeding: boolean;
      production: boolean;
      fields: boolean;
      crops: boolean;
      harvest: boolean;
      inventory: boolean;
      suppliers: boolean;
      equipment: boolean;
      employees: boolean;
      sales: boolean;
      customers: boolean;
      income: boolean;
      expenses: boolean;
      reports: boolean;
      notifications: boolean;
      users: boolean;
      settings: boolean;
    } & UserAccess_Key)[];
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@firebasegen/users-connector';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@firebasegen/users-connector';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `users` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  name: string;
  email?: string | null;
  role: string;
  phoneNumber?: string | null;
  status: string;
  farmId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@firebasegen/users-connector';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., 
  email: ..., // optional
  role: ..., 
  phoneNumber: ..., // optional
  status: ..., 
  farmId: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ name: ..., email: ..., role: ..., phoneNumber: ..., status: ..., farmId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@firebasegen/users-connector';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., 
  email: ..., // optional
  role: ..., 
  phoneNumber: ..., // optional
  status: ..., 
  farmId: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ name: ..., email: ..., role: ..., phoneNumber: ..., status: ..., farmId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## CreateUserAccess
You can execute the `CreateUserAccess` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
createUserAccess(vars: CreateUserAccessVariables): MutationPromise<CreateUserAccessData, CreateUserAccessVariables>;

interface CreateUserAccessRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserAccessVariables): MutationRef<CreateUserAccessData, CreateUserAccessVariables>;
}
export const createUserAccessRef: CreateUserAccessRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserAccess(dc: DataConnect, vars: CreateUserAccessVariables): MutationPromise<CreateUserAccessData, CreateUserAccessVariables>;

interface CreateUserAccessRef {
  ...
  (dc: DataConnect, vars: CreateUserAccessVariables): MutationRef<CreateUserAccessData, CreateUserAccessVariables>;
}
export const createUserAccessRef: CreateUserAccessRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserAccessRef:
```typescript
const name = createUserAccessRef.operationName;
console.log(name);
```

### Variables
The `CreateUserAccess` mutation requires an argument of type `CreateUserAccessVariables`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserAccessVariables {
  userId: UUIDString;
  dashboard: boolean;
  animals: boolean;
  health: boolean;
  breeding: boolean;
  production: boolean;
  fields: boolean;
  crops: boolean;
  harvest: boolean;
  inventory: boolean;
  suppliers: boolean;
  equipment: boolean;
  employees: boolean;
  sales: boolean;
  customers: boolean;
  income: boolean;
  expenses: boolean;
  reports: boolean;
  notifications: boolean;
  users: boolean;
  settings: boolean;
}
```
### Return Type
Recall that executing the `CreateUserAccess` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserAccessData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserAccessData {
  userAccess: UserAccess_Key;
}
```
### Using `CreateUserAccess`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserAccess, CreateUserAccessVariables } from '@firebasegen/users-connector';

// The `CreateUserAccess` mutation requires an argument of type `CreateUserAccessVariables`:
const createUserAccessVars: CreateUserAccessVariables = {
  userId: ..., 
  dashboard: ..., 
  animals: ..., 
  health: ..., 
  breeding: ..., 
  production: ..., 
  fields: ..., 
  crops: ..., 
  harvest: ..., 
  inventory: ..., 
  suppliers: ..., 
  equipment: ..., 
  employees: ..., 
  sales: ..., 
  customers: ..., 
  income: ..., 
  expenses: ..., 
  reports: ..., 
  notifications: ..., 
  users: ..., 
  settings: ..., 
};

// Call the `createUserAccess()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserAccess(createUserAccessVars);
// Variables can be defined inline as well.
const { data } = await createUserAccess({ userId: ..., dashboard: ..., animals: ..., health: ..., breeding: ..., production: ..., fields: ..., crops: ..., harvest: ..., inventory: ..., suppliers: ..., equipment: ..., employees: ..., sales: ..., customers: ..., income: ..., expenses: ..., reports: ..., notifications: ..., users: ..., settings: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserAccess(dataConnect, createUserAccessVars);

console.log(data.userAccess);

// Or, you can use the `Promise` API.
createUserAccess(createUserAccessVars).then((response) => {
  const data = response.data;
  console.log(data.userAccess);
});
```

### Using `CreateUserAccess`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserAccessRef, CreateUserAccessVariables } from '@firebasegen/users-connector';

// The `CreateUserAccess` mutation requires an argument of type `CreateUserAccessVariables`:
const createUserAccessVars: CreateUserAccessVariables = {
  userId: ..., 
  dashboard: ..., 
  animals: ..., 
  health: ..., 
  breeding: ..., 
  production: ..., 
  fields: ..., 
  crops: ..., 
  harvest: ..., 
  inventory: ..., 
  suppliers: ..., 
  equipment: ..., 
  employees: ..., 
  sales: ..., 
  customers: ..., 
  income: ..., 
  expenses: ..., 
  reports: ..., 
  notifications: ..., 
  users: ..., 
  settings: ..., 
};

// Call the `createUserAccessRef()` function to get a reference to the mutation.
const ref = createUserAccessRef(createUserAccessVars);
// Variables can be defined inline as well.
const ref = createUserAccessRef({ userId: ..., dashboard: ..., animals: ..., health: ..., breeding: ..., production: ..., fields: ..., crops: ..., harvest: ..., inventory: ..., suppliers: ..., equipment: ..., employees: ..., sales: ..., customers: ..., income: ..., expenses: ..., reports: ..., notifications: ..., users: ..., settings: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserAccessRef(dataConnect, createUserAccessVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userAccess);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userAccess);
});
```

## DeleteUserAccess
You can execute the `DeleteUserAccess` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
deleteUserAccess(vars: DeleteUserAccessVariables): MutationPromise<DeleteUserAccessData, DeleteUserAccessVariables>;

interface DeleteUserAccessRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserAccessVariables): MutationRef<DeleteUserAccessData, DeleteUserAccessVariables>;
}
export const deleteUserAccessRef: DeleteUserAccessRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUserAccess(dc: DataConnect, vars: DeleteUserAccessVariables): MutationPromise<DeleteUserAccessData, DeleteUserAccessVariables>;

interface DeleteUserAccessRef {
  ...
  (dc: DataConnect, vars: DeleteUserAccessVariables): MutationRef<DeleteUserAccessData, DeleteUserAccessVariables>;
}
export const deleteUserAccessRef: DeleteUserAccessRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserAccessRef:
```typescript
const name = deleteUserAccessRef.operationName;
console.log(name);
```

### Variables
The `DeleteUserAccess` mutation requires an argument of type `DeleteUserAccessVariables`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserAccessVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteUserAccess` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserAccessData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserAccessData {
  userAccess_delete?: UserAccess_Key | null;
}
```
### Using `DeleteUserAccess`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUserAccess, DeleteUserAccessVariables } from '@firebasegen/users-connector';

// The `DeleteUserAccess` mutation requires an argument of type `DeleteUserAccessVariables`:
const deleteUserAccessVars: DeleteUserAccessVariables = {
  id: ..., 
};

// Call the `deleteUserAccess()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUserAccess(deleteUserAccessVars);
// Variables can be defined inline as well.
const { data } = await deleteUserAccess({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUserAccess(dataConnect, deleteUserAccessVars);

console.log(data.userAccess_delete);

// Or, you can use the `Promise` API.
deleteUserAccess(deleteUserAccessVars).then((response) => {
  const data = response.data;
  console.log(data.userAccess_delete);
});
```

### Using `DeleteUserAccess`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserAccessRef, DeleteUserAccessVariables } from '@firebasegen/users-connector';

// The `DeleteUserAccess` mutation requires an argument of type `DeleteUserAccessVariables`:
const deleteUserAccessVars: DeleteUserAccessVariables = {
  id: ..., 
};

// Call the `deleteUserAccessRef()` function to get a reference to the mutation.
const ref = deleteUserAccessRef(deleteUserAccessVars);
// Variables can be defined inline as well.
const ref = deleteUserAccessRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserAccessRef(dataConnect, deleteUserAccessVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userAccess_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userAccess_delete);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [users/index.d.ts](./index.d.ts):
```typescript
deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [users/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser, DeleteUserVariables } from '@firebasegen/users-connector';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  id: ..., 
};

// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser(deleteUserVars);
// Variables can be defined inline as well.
const { data } = await deleteUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect, deleteUserVars);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser(deleteUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef, DeleteUserVariables } from '@firebasegen/users-connector';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  id: ..., 
};

// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef(deleteUserVars);
// Variables can be defined inline as well.
const ref = deleteUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect, deleteUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

