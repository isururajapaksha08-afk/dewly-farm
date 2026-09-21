# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyUser*](#getmyuser)
  - [*ListMyFarmUsers*](#listmyfarmusers)
- [**Mutations**](#mutations)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

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

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyUser
You can execute the `GetMyUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyUserRef:
```typescript
const name = getMyUserRef.operationName;
console.log(name);
```

### Variables
The `GetMyUser` query has no variables.
### Return Type
Recall that executing the `GetMyUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyUserData {
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
      location: string;
      contactPhone?: string | null;
      email?: string | null;
      ownerUid?: string | null;
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
### Using `GetMyUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyUser } from '@dataconnect/generated';


// Call the `getMyUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyUser(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
getMyUser().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetMyUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyUserRef } from '@dataconnect/generated';


// Call the `getMyUserRef()` function to get a reference to the query.
const ref = getMyUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyUserRef(dataConnect);

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

## ListMyFarmUsers
You can execute the `ListMyFarmUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFarmUsers(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmUsersData, undefined>;

interface ListMyFarmUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmUsersData, undefined>;
}
export const listMyFarmUsersRef: ListMyFarmUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFarmUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmUsersData, undefined>;

interface ListMyFarmUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFarmUsersData, undefined>;
}
export const listMyFarmUsersRef: ListMyFarmUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFarmUsersRef:
```typescript
const name = listMyFarmUsersRef.operationName;
console.log(name);
```

### Variables
The `ListMyFarmUsers` query has no variables.
### Return Type
Recall that executing the `ListMyFarmUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFarmUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFarmUsersData {
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
### Using `ListMyFarmUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFarmUsers } from '@dataconnect/generated';


// Call the `listMyFarmUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFarmUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFarmUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listMyFarmUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListMyFarmUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFarmUsersRef } from '@dataconnect/generated';


// Call the `listMyFarmUsersRef()` function to get a reference to the query.
const ref = listMyFarmUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFarmUsersRef(dataConnect);

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

# Mutations

No mutations were generated for the `example` connector.

If you want to learn more about how to use mutations in Data Connect, you can follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

