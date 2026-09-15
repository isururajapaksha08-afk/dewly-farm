# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyFarms*](#getmyfarms)
  - [*ListMyAnimals*](#listmyanimals)
  - [*ListMyFields*](#listmyfields)
  - [*ListMyCrops*](#listmycrops)
  - [*ListMyInventory*](#listmyinventory)
  - [*ListMySales*](#listmysales)
  - [*ListMyIncome*](#listmyincome)
  - [*ListMyExpenses*](#listmyexpenses)
  - [*ListMyEmployees*](#listmyemployees)
  - [*ListMyFarmEvents*](#listmyfarmevents)
  - [*ListMyNotifications*](#listmynotifications)
  - [*ListMyFarmTasks*](#listmyfarmtasks)
  - [*ListEquipment*](#listequipment)
  - [*ListEquipmentMaintenance*](#listequipmentmaintenance)
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

## GetMyFarms
You can execute the `GetMyFarms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyFarms(options?: ExecuteQueryOptions): QueryPromise<GetMyFarmsData, undefined>;

interface GetMyFarmsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyFarmsData, undefined>;
}
export const getMyFarmsRef: GetMyFarmsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyFarms(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyFarmsData, undefined>;

interface GetMyFarmsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyFarmsData, undefined>;
}
export const getMyFarmsRef: GetMyFarmsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyFarmsRef:
```typescript
const name = getMyFarmsRef.operationName;
console.log(name);
```

### Variables
The `GetMyFarms` query has no variables.
### Return Type
Recall that executing the `GetMyFarms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyFarmsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyFarmsData {
  farms: ({
    id: UUIDString;
    farmName: string;
    location: string;
    contactPhone?: string | null;
    email?: string | null;
    ownerUid?: string | null;
  } & Farm_Key)[];
}
```
### Using `GetMyFarms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyFarms } from '@dataconnect/generated';


// Call the `getMyFarms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyFarms();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyFarms(dataConnect);

console.log(data.farms);

// Or, you can use the `Promise` API.
getMyFarms().then((response) => {
  const data = response.data;
  console.log(data.farms);
});
```

### Using `GetMyFarms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyFarmsRef } from '@dataconnect/generated';


// Call the `getMyFarmsRef()` function to get a reference to the query.
const ref = getMyFarmsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyFarmsRef(dataConnect);

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

## ListMyAnimals
You can execute the `ListMyAnimals` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyAnimals(options?: ExecuteQueryOptions): QueryPromise<ListMyAnimalsData, undefined>;

interface ListMyAnimalsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyAnimalsData, undefined>;
}
export const listMyAnimalsRef: ListMyAnimalsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyAnimals(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyAnimalsData, undefined>;

interface ListMyAnimalsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyAnimalsData, undefined>;
}
export const listMyAnimalsRef: ListMyAnimalsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyAnimalsRef:
```typescript
const name = listMyAnimalsRef.operationName;
console.log(name);
```

### Variables
The `ListMyAnimals` query has no variables.
### Return Type
Recall that executing the `ListMyAnimals` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyAnimalsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyAnimalsData {
  animals: ({
    id: UUIDString;
    tagId: string;
    species: string;
    birthDate: DateString;
    status: string;
    breed?: string | null;
    gender?: string | null;
    purchaseDate?: DateString | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Animal_Key)[];
}
```
### Using `ListMyAnimals`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyAnimals } from '@dataconnect/generated';


// Call the `listMyAnimals()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyAnimals();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyAnimals(dataConnect);

console.log(data.animals);

// Or, you can use the `Promise` API.
listMyAnimals().then((response) => {
  const data = response.data;
  console.log(data.animals);
});
```

### Using `ListMyAnimals`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyAnimalsRef } from '@dataconnect/generated';


// Call the `listMyAnimalsRef()` function to get a reference to the query.
const ref = listMyAnimalsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyAnimalsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.animals);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.animals);
});
```

## ListMyFields
You can execute the `ListMyFields` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFields(options?: ExecuteQueryOptions): QueryPromise<ListMyFieldsData, undefined>;

interface ListMyFieldsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFieldsData, undefined>;
}
export const listMyFieldsRef: ListMyFieldsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFields(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFieldsData, undefined>;

interface ListMyFieldsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFieldsData, undefined>;
}
export const listMyFieldsRef: ListMyFieldsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFieldsRef:
```typescript
const name = listMyFieldsRef.operationName;
console.log(name);
```

### Variables
The `ListMyFields` query has no variables.
### Return Type
Recall that executing the `ListMyFields` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFieldsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFieldsData {
  fields: ({
    id: UUIDString;
    name: string;
    sizeAcres: number;
    location?: string | null;
    soilType?: string | null;
    irrigationType?: string | null;
    currentCrop?: string | null;
    lastHarvestDate?: DateString | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Field_Key)[];
}
```
### Using `ListMyFields`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFields } from '@dataconnect/generated';


// Call the `listMyFields()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFields();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFields(dataConnect);

console.log(data.fields);

// Or, you can use the `Promise` API.
listMyFields().then((response) => {
  const data = response.data;
  console.log(data.fields);
});
```

### Using `ListMyFields`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFieldsRef } from '@dataconnect/generated';


// Call the `listMyFieldsRef()` function to get a reference to the query.
const ref = listMyFieldsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFieldsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.fields);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.fields);
});
```

## ListMyCrops
You can execute the `ListMyCrops` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyCrops(options?: ExecuteQueryOptions): QueryPromise<ListMyCropsData, undefined>;

interface ListMyCropsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyCropsData, undefined>;
}
export const listMyCropsRef: ListMyCropsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyCrops(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyCropsData, undefined>;

interface ListMyCropsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyCropsData, undefined>;
}
export const listMyCropsRef: ListMyCropsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyCropsRef:
```typescript
const name = listMyCropsRef.operationName;
console.log(name);
```

### Variables
The `ListMyCrops` query has no variables.
### Return Type
Recall that executing the `ListMyCrops` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyCropsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyCropsData {
  crops: ({
    id: UUIDString;
    name: string;
    cropType?: string | null;
    plantingDate?: DateString | null;
    expectedHarvestDate?: DateString | null;
    description?: string | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Crop_Key)[];
}
```
### Using `ListMyCrops`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyCrops } from '@dataconnect/generated';


// Call the `listMyCrops()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyCrops();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyCrops(dataConnect);

console.log(data.crops);

// Or, you can use the `Promise` API.
listMyCrops().then((response) => {
  const data = response.data;
  console.log(data.crops);
});
```

### Using `ListMyCrops`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyCropsRef } from '@dataconnect/generated';


// Call the `listMyCropsRef()` function to get a reference to the query.
const ref = listMyCropsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyCropsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.crops);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.crops);
});
```

## ListMyInventory
You can execute the `ListMyInventory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyInventory(options?: ExecuteQueryOptions): QueryPromise<ListMyInventoryData, undefined>;

interface ListMyInventoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyInventoryData, undefined>;
}
export const listMyInventoryRef: ListMyInventoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyInventory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyInventoryData, undefined>;

interface ListMyInventoryRef {
  ...
  (dc: DataConnect): QueryRef<ListMyInventoryData, undefined>;
}
export const listMyInventoryRef: ListMyInventoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyInventoryRef:
```typescript
const name = listMyInventoryRef.operationName;
console.log(name);
```

### Variables
The `ListMyInventory` query has no variables.
### Return Type
Recall that executing the `ListMyInventory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyInventoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyInventoryData {
  inventoryItems: ({
    id: UUIDString;
    itemName: string;
    category: string;
    quantityOnHand: number;
    unit: string;
    unitPrice: number;
    reorderLevel?: number | null;
    expiryDate?: DateString | null;
    storageLocation?: string | null;
    supplier?: {
      id: UUIDString;
      name: string;
    } & Supplier_Key;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & InventoryItem_Key)[];
}
```
### Using `ListMyInventory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyInventory } from '@dataconnect/generated';


// Call the `listMyInventory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyInventory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyInventory(dataConnect);

console.log(data.inventoryItems);

// Or, you can use the `Promise` API.
listMyInventory().then((response) => {
  const data = response.data;
  console.log(data.inventoryItems);
});
```

### Using `ListMyInventory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyInventoryRef } from '@dataconnect/generated';


// Call the `listMyInventoryRef()` function to get a reference to the query.
const ref = listMyInventoryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyInventoryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inventoryItems);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItems);
});
```

## ListMySales
You can execute the `ListMySales` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMySales(options?: ExecuteQueryOptions): QueryPromise<ListMySalesData, undefined>;

interface ListMySalesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySalesData, undefined>;
}
export const listMySalesRef: ListMySalesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMySales(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySalesData, undefined>;

interface ListMySalesRef {
  ...
  (dc: DataConnect): QueryRef<ListMySalesData, undefined>;
}
export const listMySalesRef: ListMySalesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMySalesRef:
```typescript
const name = listMySalesRef.operationName;
console.log(name);
```

### Variables
The `ListMySales` query has no variables.
### Return Type
Recall that executing the `ListMySales` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMySalesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMySalesData {
  sales: ({
    id: UUIDString;
    saleDate: DateString;
    salePrice: number;
    buyerName: string;
    paymentMethod?: string | null;
    invoiceNumber?: string | null;
    animal?: {
      id: UUIDString;
      tagId: string;
      species: string;
    } & Animal_Key;
    customer?: {
      id: UUIDString;
      name: string;
    } & Customer_Key;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Sale_Key)[];
}
```
### Using `ListMySales`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMySales } from '@dataconnect/generated';


// Call the `listMySales()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMySales();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMySales(dataConnect);

console.log(data.sales);

// Or, you can use the `Promise` API.
listMySales().then((response) => {
  const data = response.data;
  console.log(data.sales);
});
```

### Using `ListMySales`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMySalesRef } from '@dataconnect/generated';


// Call the `listMySalesRef()` function to get a reference to the query.
const ref = listMySalesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMySalesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sales);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sales);
});
```

## ListMyIncome
You can execute the `ListMyIncome` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyIncome(options?: ExecuteQueryOptions): QueryPromise<ListMyIncomeData, undefined>;

interface ListMyIncomeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyIncomeData, undefined>;
}
export const listMyIncomeRef: ListMyIncomeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyIncome(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyIncomeData, undefined>;

interface ListMyIncomeRef {
  ...
  (dc: DataConnect): QueryRef<ListMyIncomeData, undefined>;
}
export const listMyIncomeRef: ListMyIncomeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyIncomeRef:
```typescript
const name = listMyIncomeRef.operationName;
console.log(name);
```

### Variables
The `ListMyIncome` query has no variables.
### Return Type
Recall that executing the `ListMyIncome` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyIncomeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyIncomeData {
  incomes: ({
    id: UUIDString;
    amount: number;
    date: DateString;
    category: string;
    description?: string | null;
    paymentMethod?: string | null;
    referenceNumber?: string | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Income_Key)[];
}
```
### Using `ListMyIncome`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyIncome } from '@dataconnect/generated';


// Call the `listMyIncome()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyIncome();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyIncome(dataConnect);

console.log(data.incomes);

// Or, you can use the `Promise` API.
listMyIncome().then((response) => {
  const data = response.data;
  console.log(data.incomes);
});
```

### Using `ListMyIncome`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyIncomeRef } from '@dataconnect/generated';


// Call the `listMyIncomeRef()` function to get a reference to the query.
const ref = listMyIncomeRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyIncomeRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.incomes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.incomes);
});
```

## ListMyExpenses
You can execute the `ListMyExpenses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyExpenses(options?: ExecuteQueryOptions): QueryPromise<ListMyExpensesData, undefined>;

interface ListMyExpensesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyExpensesData, undefined>;
}
export const listMyExpensesRef: ListMyExpensesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyExpenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyExpensesData, undefined>;

interface ListMyExpensesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyExpensesData, undefined>;
}
export const listMyExpensesRef: ListMyExpensesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyExpensesRef:
```typescript
const name = listMyExpensesRef.operationName;
console.log(name);
```

### Variables
The `ListMyExpenses` query has no variables.
### Return Type
Recall that executing the `ListMyExpenses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyExpensesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyExpensesData {
  expenses: ({
    id: UUIDString;
    amount: number;
    date: DateString;
    category: string;
    description?: string | null;
    paymentMethod?: string | null;
    referenceNumber?: string | null;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Expense_Key)[];
}
```
### Using `ListMyExpenses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyExpenses } from '@dataconnect/generated';


// Call the `listMyExpenses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyExpenses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyExpenses(dataConnect);

console.log(data.expenses);

// Or, you can use the `Promise` API.
listMyExpenses().then((response) => {
  const data = response.data;
  console.log(data.expenses);
});
```

### Using `ListMyExpenses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyExpensesRef } from '@dataconnect/generated';


// Call the `listMyExpensesRef()` function to get a reference to the query.
const ref = listMyExpensesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyExpensesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.expenses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.expenses);
});
```

## ListMyEmployees
You can execute the `ListMyEmployees` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyEmployees(options?: ExecuteQueryOptions): QueryPromise<ListMyEmployeesData, undefined>;

interface ListMyEmployeesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyEmployeesData, undefined>;
}
export const listMyEmployeesRef: ListMyEmployeesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyEmployeesData, undefined>;

interface ListMyEmployeesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyEmployeesData, undefined>;
}
export const listMyEmployeesRef: ListMyEmployeesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyEmployeesRef:
```typescript
const name = listMyEmployeesRef.operationName;
console.log(name);
```

### Variables
The `ListMyEmployees` query has no variables.
### Return Type
Recall that executing the `ListMyEmployees` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyEmployeesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyEmployeesData {
  employees: ({
    id: UUIDString;
    employeeId: string;
    name: string;
    role: string;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    hireDate?: DateString | null;
    salary?: number | null;
    status: string;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Employee_Key)[];
}
```
### Using `ListMyEmployees`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyEmployees } from '@dataconnect/generated';


// Call the `listMyEmployees()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyEmployees();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyEmployees(dataConnect);

console.log(data.employees);

// Or, you can use the `Promise` API.
listMyEmployees().then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

### Using `ListMyEmployees`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyEmployeesRef } from '@dataconnect/generated';


// Call the `listMyEmployeesRef()` function to get a reference to the query.
const ref = listMyEmployeesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyEmployeesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.employees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

## ListMyFarmEvents
You can execute the `ListMyFarmEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFarmEvents(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmEventsData, undefined>;

interface ListMyFarmEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmEventsData, undefined>;
}
export const listMyFarmEventsRef: ListMyFarmEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFarmEvents(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmEventsData, undefined>;

interface ListMyFarmEventsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFarmEventsData, undefined>;
}
export const listMyFarmEventsRef: ListMyFarmEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFarmEventsRef:
```typescript
const name = listMyFarmEventsRef.operationName;
console.log(name);
```

### Variables
The `ListMyFarmEvents` query has no variables.
### Return Type
Recall that executing the `ListMyFarmEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFarmEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFarmEventsData {
  farmEvents: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    eventType: string;
    eventDate: DateString;
    priority: string;
    completed: boolean;
    animal?: {
      id: UUIDString;
      tagId: string;
      species: string;
    } & Animal_Key;
    field?: {
      id: UUIDString;
      name: string;
    } & Field_Key;
    crop?: {
      id: UUIDString;
      name: string;
    } & Crop_Key;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & FarmEvent_Key)[];
}
```
### Using `ListMyFarmEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFarmEvents } from '@dataconnect/generated';


// Call the `listMyFarmEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFarmEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFarmEvents(dataConnect);

console.log(data.farmEvents);

// Or, you can use the `Promise` API.
listMyFarmEvents().then((response) => {
  const data = response.data;
  console.log(data.farmEvents);
});
```

### Using `ListMyFarmEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFarmEventsRef } from '@dataconnect/generated';


// Call the `listMyFarmEventsRef()` function to get a reference to the query.
const ref = listMyFarmEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFarmEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.farmEvents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.farmEvents);
});
```

## ListMyNotifications
You can execute the `ListMyNotifications` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyNotifications(options?: ExecuteQueryOptions): QueryPromise<ListMyNotificationsData, undefined>;

interface ListMyNotificationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyNotificationsData, undefined>;
}
export const listMyNotificationsRef: ListMyNotificationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyNotifications(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyNotificationsData, undefined>;

interface ListMyNotificationsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyNotificationsData, undefined>;
}
export const listMyNotificationsRef: ListMyNotificationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyNotificationsRef:
```typescript
const name = listMyNotificationsRef.operationName;
console.log(name);
```

### Variables
The `ListMyNotifications` query has no variables.
### Return Type
Recall that executing the `ListMyNotifications` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyNotificationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyNotificationsData {
  notifications: ({
    id: UUIDString;
    title: string;
    message: string;
    notificationType: string;
    priority: string;
    eventDate?: DateString | null;
    isRead: boolean;
    createdAt: TimestampString;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & Notification_Key)[];
}
```
### Using `ListMyNotifications`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyNotifications } from '@dataconnect/generated';


// Call the `listMyNotifications()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyNotifications();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyNotifications(dataConnect);

console.log(data.notifications);

// Or, you can use the `Promise` API.
listMyNotifications().then((response) => {
  const data = response.data;
  console.log(data.notifications);
});
```

### Using `ListMyNotifications`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyNotificationsRef } from '@dataconnect/generated';


// Call the `listMyNotificationsRef()` function to get a reference to the query.
const ref = listMyNotificationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyNotificationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.notifications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.notifications);
});
```

## ListMyFarmTasks
You can execute the `ListMyFarmTasks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFarmTasks(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmTasksData, undefined>;

interface ListMyFarmTasksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmTasksData, undefined>;
}
export const listMyFarmTasksRef: ListMyFarmTasksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFarmTasks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmTasksData, undefined>;

interface ListMyFarmTasksRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFarmTasksData, undefined>;
}
export const listMyFarmTasksRef: ListMyFarmTasksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFarmTasksRef:
```typescript
const name = listMyFarmTasksRef.operationName;
console.log(name);
```

### Variables
The `ListMyFarmTasks` query has no variables.
### Return Type
Recall that executing the `ListMyFarmTasks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFarmTasksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFarmTasksData {
  farmTasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    taskDate: DateString;
    priority: string;
    status: string;
    employee?: {
      id: UUIDString;
      name: string;
    } & Employee_Key;
    animal?: {
      id: UUIDString;
      tagId: string;
    } & Animal_Key;
    field?: {
      id: UUIDString;
      name: string;
    } & Field_Key;
    farm: {
      id: UUIDString;
      farmName: string;
    } & Farm_Key;
  } & FarmTask_Key)[];
}
```
### Using `ListMyFarmTasks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFarmTasks } from '@dataconnect/generated';


// Call the `listMyFarmTasks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFarmTasks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFarmTasks(dataConnect);

console.log(data.farmTasks);

// Or, you can use the `Promise` API.
listMyFarmTasks().then((response) => {
  const data = response.data;
  console.log(data.farmTasks);
});
```

### Using `ListMyFarmTasks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFarmTasksRef } from '@dataconnect/generated';


// Call the `listMyFarmTasksRef()` function to get a reference to the query.
const ref = listMyFarmTasksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFarmTasksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.farmTasks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.farmTasks);
});
```

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

No mutations were generated for the `example` connector.

If you want to learn more about how to use mutations in Data Connect, you can follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

