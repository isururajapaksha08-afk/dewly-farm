# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listFarms, listUsers, getUser, createUser, createUserAccess, deleteUserAccess, deleteUser } from '@firebasegen/users-connector';


// Operation ListFarms: 
const { data } = await ListFarms(dataConnect);

// Operation ListUsers: 
const { data } = await ListUsers(dataConnect);

// Operation GetUser:  For variables, look at type GetUserVars in ../index.d.ts
const { data } = await GetUser(dataConnect, getUserVars);

// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation CreateUserAccess:  For variables, look at type CreateUserAccessVars in ../index.d.ts
const { data } = await CreateUserAccess(dataConnect, createUserAccessVars);

// Operation DeleteUserAccess:  For variables, look at type DeleteUserAccessVars in ../index.d.ts
const { data } = await DeleteUserAccess(dataConnect, deleteUserAccessVars);

// Operation DeleteUser:  For variables, look at type DeleteUserVars in ../index.d.ts
const { data } = await DeleteUser(dataConnect, deleteUserVars);


```