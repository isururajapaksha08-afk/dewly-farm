# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useListEquipment, useCreateEquipment, useListEquipmentMaintenance, useCreateEquipmentMaintenance } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useListEquipment();

const { data, isPending, isSuccess, isError, error } = useCreateEquipment(createEquipmentVars);

const { data, isPending, isSuccess, isError, error } = useListEquipmentMaintenance();

const { data, isPending, isSuccess, isError, error } = useCreateEquipmentMaintenance(createEquipmentMaintenanceVars);

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
import { listEquipment, createEquipment, listEquipmentMaintenance, createEquipmentMaintenance } from '@dataconnect/generated';


// Operation ListEquipment: 
const { data } = await ListEquipment(dataConnect);

// Operation CreateEquipment:  For variables, look at type CreateEquipmentVars in ../index.d.ts
const { data } = await CreateEquipment(dataConnect, createEquipmentVars);

// Operation ListEquipmentMaintenance: 
const { data } = await ListEquipmentMaintenance(dataConnect);

// Operation CreateEquipmentMaintenance:  For variables, look at type CreateEquipmentMaintenanceVars in ../index.d.ts
const { data } = await CreateEquipmentMaintenance(dataConnect, createEquipmentMaintenanceVars);


```