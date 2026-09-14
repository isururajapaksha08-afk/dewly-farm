# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListEquipment*](#listequipment)
  - [*ListEquipmentMaintenance*](#listequipmentmaintenance)
- [**Mutations**](#mutations)
  - [*CreateEquipment*](#createequipment)
  - [*CreateEquipmentMaintenance*](#createequipmentmaintenance)

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

## ListEquipment
You can execute the `ListEquipment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEquipment(options?: ExecuteQueryOptions): QueryPromise<ListEquipmentData, undefined>;

interface ListEquipmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEquipmentData, undefined>;
}
export const listEquipmentRef: ListEquipmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEquipment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEquipmentData, undefined>;

interface ListEquipmentRef {
  ...
  (dc: DataConnect): QueryRef<ListEquipmentData, undefined>;
}
export const listEquipmentRef: ListEquipmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEquipmentRef:
```typescript
const name = listEquipmentRef.operationName;
console.log(name);
```

### Variables
The `ListEquipment` query has no variables.
### Return Type
Recall that executing the `ListEquipment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEquipmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEquipmentData {
  equipments: ({
    id: UUIDString;
    name: string;
    equipmentType: string;
    serialNumber?: string | null;
    purchaseDate?: DateString | null;
    purchasePrice?: number | null;
    status: string;
    location?: string | null;
    lastServiceDate?: DateString | null;
    nextServiceDate?: DateString | null;
    notes?: string | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Equipment_Key)[];
}
```
### Using `ListEquipment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEquipment } from '@dataconnect/generated';


// Call the `listEquipment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEquipment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEquipment(dataConnect);

console.log(data.equipments);

// Or, you can use the `Promise` API.
listEquipment().then((response) => {
  const data = response.data;
  console.log(data.equipments);
});
```

### Using `ListEquipment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEquipmentRef } from '@dataconnect/generated';


// Call the `listEquipmentRef()` function to get a reference to the query.
const ref = listEquipmentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEquipmentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.equipments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.equipments);
});
```

## ListEquipmentMaintenance
You can execute the `ListEquipmentMaintenance` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEquipmentMaintenance(options?: ExecuteQueryOptions): QueryPromise<ListEquipmentMaintenanceData, undefined>;

interface ListEquipmentMaintenanceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEquipmentMaintenanceData, undefined>;
}
export const listEquipmentMaintenanceRef: ListEquipmentMaintenanceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEquipmentMaintenance(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEquipmentMaintenanceData, undefined>;

interface ListEquipmentMaintenanceRef {
  ...
  (dc: DataConnect): QueryRef<ListEquipmentMaintenanceData, undefined>;
}
export const listEquipmentMaintenanceRef: ListEquipmentMaintenanceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEquipmentMaintenanceRef:
```typescript
const name = listEquipmentMaintenanceRef.operationName;
console.log(name);
```

### Variables
The `ListEquipmentMaintenance` query has no variables.
### Return Type
Recall that executing the `ListEquipmentMaintenance` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEquipmentMaintenanceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEquipmentMaintenanceData {
  equipmentMaintenances: ({
    id: UUIDString;
    serviceDate: DateString;
    description: string;
    cost?: number | null;
    nextServiceDate?: DateString | null;
    technician?: string | null;
    notes?: string | null;
    equipment: {
      id: UUIDString;
      name: string;
      equipmentType: string;
      serialNumber?: string | null;
    } & Equipment_Key;
  } & EquipmentMaintenance_Key)[];
}
```
### Using `ListEquipmentMaintenance`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEquipmentMaintenance } from '@dataconnect/generated';


// Call the `listEquipmentMaintenance()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEquipmentMaintenance();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEquipmentMaintenance(dataConnect);

console.log(data.equipmentMaintenances);

// Or, you can use the `Promise` API.
listEquipmentMaintenance().then((response) => {
  const data = response.data;
  console.log(data.equipmentMaintenances);
});
```

### Using `ListEquipmentMaintenance`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEquipmentMaintenanceRef } from '@dataconnect/generated';


// Call the `listEquipmentMaintenanceRef()` function to get a reference to the query.
const ref = listEquipmentMaintenanceRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEquipmentMaintenanceRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.equipmentMaintenances);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.equipmentMaintenances);
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

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateEquipment
You can execute the `CreateEquipment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEquipment(vars: CreateEquipmentVariables): MutationPromise<CreateEquipmentData, CreateEquipmentVariables>;

interface CreateEquipmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEquipmentVariables): MutationRef<CreateEquipmentData, CreateEquipmentVariables>;
}
export const createEquipmentRef: CreateEquipmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEquipment(dc: DataConnect, vars: CreateEquipmentVariables): MutationPromise<CreateEquipmentData, CreateEquipmentVariables>;

interface CreateEquipmentRef {
  ...
  (dc: DataConnect, vars: CreateEquipmentVariables): MutationRef<CreateEquipmentData, CreateEquipmentVariables>;
}
export const createEquipmentRef: CreateEquipmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEquipmentRef:
```typescript
const name = createEquipmentRef.operationName;
console.log(name);
```

### Variables
The `CreateEquipment` mutation requires an argument of type `CreateEquipmentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateEquipmentVariables {
  name: string;
  equipmentType: string;
  serialNumber?: string | null;
  purchaseDate?: DateString | null;
  purchasePrice?: number | null;
  status: string;
  location?: string | null;
  lastServiceDate?: DateString | null;
  nextServiceDate?: DateString | null;
  notes?: string | null;
  farmId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateEquipment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEquipmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEquipmentData {
  equipment_insert: Equipment_Key;
}
```
### Using `CreateEquipment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEquipment, CreateEquipmentVariables } from '@dataconnect/generated';

// The `CreateEquipment` mutation requires an argument of type `CreateEquipmentVariables`:
const createEquipmentVars: CreateEquipmentVariables = {
  name: ..., 
  equipmentType: ..., 
  serialNumber: ..., // optional
  purchaseDate: ..., // optional
  purchasePrice: ..., // optional
  status: ..., 
  location: ..., // optional
  lastServiceDate: ..., // optional
  nextServiceDate: ..., // optional
  notes: ..., // optional
  farmId: ..., 
};

// Call the `createEquipment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEquipment(createEquipmentVars);
// Variables can be defined inline as well.
const { data } = await createEquipment({ name: ..., equipmentType: ..., serialNumber: ..., purchaseDate: ..., purchasePrice: ..., status: ..., location: ..., lastServiceDate: ..., nextServiceDate: ..., notes: ..., farmId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEquipment(dataConnect, createEquipmentVars);

console.log(data.equipment_insert);

// Or, you can use the `Promise` API.
createEquipment(createEquipmentVars).then((response) => {
  const data = response.data;
  console.log(data.equipment_insert);
});
```

### Using `CreateEquipment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEquipmentRef, CreateEquipmentVariables } from '@dataconnect/generated';

// The `CreateEquipment` mutation requires an argument of type `CreateEquipmentVariables`:
const createEquipmentVars: CreateEquipmentVariables = {
  name: ..., 
  equipmentType: ..., 
  serialNumber: ..., // optional
  purchaseDate: ..., // optional
  purchasePrice: ..., // optional
  status: ..., 
  location: ..., // optional
  lastServiceDate: ..., // optional
  nextServiceDate: ..., // optional
  notes: ..., // optional
  farmId: ..., 
};

// Call the `createEquipmentRef()` function to get a reference to the mutation.
const ref = createEquipmentRef(createEquipmentVars);
// Variables can be defined inline as well.
const ref = createEquipmentRef({ name: ..., equipmentType: ..., serialNumber: ..., purchaseDate: ..., purchasePrice: ..., status: ..., location: ..., lastServiceDate: ..., nextServiceDate: ..., notes: ..., farmId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEquipmentRef(dataConnect, createEquipmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.equipment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.equipment_insert);
});
```

## CreateEquipmentMaintenance
You can execute the `CreateEquipmentMaintenance` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEquipmentMaintenance(vars: CreateEquipmentMaintenanceVariables): MutationPromise<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;

interface CreateEquipmentMaintenanceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEquipmentMaintenanceVariables): MutationRef<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
}
export const createEquipmentMaintenanceRef: CreateEquipmentMaintenanceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEquipmentMaintenance(dc: DataConnect, vars: CreateEquipmentMaintenanceVariables): MutationPromise<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;

interface CreateEquipmentMaintenanceRef {
  ...
  (dc: DataConnect, vars: CreateEquipmentMaintenanceVariables): MutationRef<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
}
export const createEquipmentMaintenanceRef: CreateEquipmentMaintenanceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEquipmentMaintenanceRef:
```typescript
const name = createEquipmentMaintenanceRef.operationName;
console.log(name);
```

### Variables
The `CreateEquipmentMaintenance` mutation requires an argument of type `CreateEquipmentMaintenanceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateEquipmentMaintenanceVariables {
  serviceDate: DateString;
  description: string;
  cost?: number | null;
  nextServiceDate?: DateString | null;
  technician?: string | null;
  notes?: string | null;
  equipmentId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateEquipmentMaintenance` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEquipmentMaintenanceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEquipmentMaintenanceData {
  equipmentMaintenance_insert: EquipmentMaintenance_Key;
}
```
### Using `CreateEquipmentMaintenance`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEquipmentMaintenance, CreateEquipmentMaintenanceVariables } from '@dataconnect/generated';

// The `CreateEquipmentMaintenance` mutation requires an argument of type `CreateEquipmentMaintenanceVariables`:
const createEquipmentMaintenanceVars: CreateEquipmentMaintenanceVariables = {
  serviceDate: ..., 
  description: ..., 
  cost: ..., // optional
  nextServiceDate: ..., // optional
  technician: ..., // optional
  notes: ..., // optional
  equipmentId: ..., 
};

// Call the `createEquipmentMaintenance()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEquipmentMaintenance(createEquipmentMaintenanceVars);
// Variables can be defined inline as well.
const { data } = await createEquipmentMaintenance({ serviceDate: ..., description: ..., cost: ..., nextServiceDate: ..., technician: ..., notes: ..., equipmentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEquipmentMaintenance(dataConnect, createEquipmentMaintenanceVars);

console.log(data.equipmentMaintenance_insert);

// Or, you can use the `Promise` API.
createEquipmentMaintenance(createEquipmentMaintenanceVars).then((response) => {
  const data = response.data;
  console.log(data.equipmentMaintenance_insert);
});
```

### Using `CreateEquipmentMaintenance`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEquipmentMaintenanceRef, CreateEquipmentMaintenanceVariables } from '@dataconnect/generated';

// The `CreateEquipmentMaintenance` mutation requires an argument of type `CreateEquipmentMaintenanceVariables`:
const createEquipmentMaintenanceVars: CreateEquipmentMaintenanceVariables = {
  serviceDate: ..., 
  description: ..., 
  cost: ..., // optional
  nextServiceDate: ..., // optional
  technician: ..., // optional
  notes: ..., // optional
  equipmentId: ..., 
};

// Call the `createEquipmentMaintenanceRef()` function to get a reference to the mutation.
const ref = createEquipmentMaintenanceRef(createEquipmentMaintenanceVars);
// Variables can be defined inline as well.
const ref = createEquipmentMaintenanceRef({ serviceDate: ..., description: ..., cost: ..., nextServiceDate: ..., technician: ..., notes: ..., equipmentId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEquipmentMaintenanceRef(dataConnect, createEquipmentMaintenanceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.equipmentMaintenance_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.equipmentMaintenance_insert);
});
```

