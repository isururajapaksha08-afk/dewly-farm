# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useGetMyFarms, useListMyAnimals, useListMyFields, useListMyCrops, useListMyInventory, useListMySales, useListMyIncome, useListMyExpenses, useListMyEmployees, useListMyFarmEvents } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useGetMyFarms();

const { data, isPending, isSuccess, isError, error } = useListMyAnimals();

const { data, isPending, isSuccess, isError, error } = useListMyFields();

const { data, isPending, isSuccess, isError, error } = useListMyCrops();

const { data, isPending, isSuccess, isError, error } = useListMyInventory();

const { data, isPending, isSuccess, isError, error } = useListMySales();

const { data, isPending, isSuccess, isError, error } = useListMyIncome();

const { data, isPending, isSuccess, isError, error } = useListMyExpenses();

const { data, isPending, isSuccess, isError, error } = useListMyEmployees();

const { data, isPending, isSuccess, isError, error } = useListMyFarmEvents();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getMyFarms, listMyAnimals, listMyFields, listMyCrops, listMyInventory, listMySales, listMyIncome, listMyExpenses, listMyEmployees, listMyFarmEvents } from '@dataconnect/generated';


// Operation GetMyFarms: 
const { data } = await GetMyFarms(dataConnect);

// Operation ListMyAnimals: 
const { data } = await ListMyAnimals(dataConnect);

// Operation ListMyFields: 
const { data } = await ListMyFields(dataConnect);

// Operation ListMyCrops: 
const { data } = await ListMyCrops(dataConnect);

// Operation ListMyInventory: 
const { data } = await ListMyInventory(dataConnect);

// Operation ListMySales: 
const { data } = await ListMySales(dataConnect);

// Operation ListMyIncome: 
const { data } = await ListMyIncome(dataConnect);

// Operation ListMyExpenses: 
const { data } = await ListMyExpenses(dataConnect);

// Operation ListMyEmployees: 
const { data } = await ListMyEmployees(dataConnect);

// Operation ListMyFarmEvents: 
const { data } = await ListMyFarmEvents(dataConnect);


```