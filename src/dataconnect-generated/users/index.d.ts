import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Animal_Key {
  id: UUIDString;
  __typename?: 'Animal_Key';
}

export interface BeeHive_Key {
  id: UUIDString;
  __typename?: 'BeeHive_Key';
}

export interface Breeding_Key {
  id: UUIDString;
  __typename?: 'Breeding_Key';
}

export interface CreateUserAccessData {
  userAccess: UserAccess_Key;
}

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

export interface CreateUserData {
  user: User_Key;
}

export interface CreateUserVariables {
  name: string;
  email?: string | null;
  role: string;
  phoneNumber?: string | null;
  status: string;
  farmId: UUIDString;
}

export interface Crop_Key {
  id: UUIDString;
  __typename?: 'Crop_Key';
}

export interface Customer_Key {
  id: UUIDString;
  __typename?: 'Customer_Key';
}

export interface DeleteUserAccessData {
  userAccess_delete?: UserAccess_Key | null;
}

export interface DeleteUserAccessVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteUserVariables {
  id: UUIDString;
}

export interface Employee_Key {
  id: UUIDString;
  __typename?: 'Employee_Key';
}

export interface EquipmentMaintenance_Key {
  id: UUIDString;
  __typename?: 'EquipmentMaintenance_Key';
}

export interface Equipment_Key {
  id: UUIDString;
  __typename?: 'Equipment_Key';
}

export interface Expense_Key {
  id: UUIDString;
  __typename?: 'Expense_Key';
}

export interface FarmEvent_Key {
  id: UUIDString;
  __typename?: 'FarmEvent_Key';
}

export interface FarmTask_Key {
  id: UUIDString;
  __typename?: 'FarmTask_Key';
}

export interface Farm_Key {
  id: UUIDString;
  __typename?: 'Farm_Key';
}

export interface Field_Key {
  id: UUIDString;
  __typename?: 'Field_Key';
}

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

export interface GetUserVariables {
  id: UUIDString;
}

export interface Harvest_Key {
  id: UUIDString;
  __typename?: 'Harvest_Key';
}

export interface HealthRecord_Key {
  id: UUIDString;
  __typename?: 'HealthRecord_Key';
}

export interface HoneyHarvest_Key {
  id: UUIDString;
  __typename?: 'HoneyHarvest_Key';
}

export interface Income_Key {
  id: UUIDString;
  __typename?: 'Income_Key';
}

export interface InventoryItem_Key {
  id: UUIDString;
  __typename?: 'InventoryItem_Key';
}

export interface ListFarmsData {
  farms: ({
    id: UUIDString;
    farmName: string;
    location: string;
  } & Farm_Key)[];
}

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

export interface Notification_Key {
  id: UUIDString;
  __typename?: 'Notification_Key';
}

export interface Sale_Key {
  id: UUIDString;
  __typename?: 'Sale_Key';
}

export interface StockTransaction_Key {
  id: UUIDString;
  __typename?: 'StockTransaction_Key';
}

export interface Supplier_Key {
  id: UUIDString;
  __typename?: 'Supplier_Key';
}

export interface UserAccess_Key {
  id: UUIDString;
  __typename?: 'UserAccess_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Vaccination_Key {
  id: UUIDString;
  __typename?: 'Vaccination_Key';
}

export interface WorkRecord_Key {
  id: UUIDString;
  __typename?: 'WorkRecord_Key';
}

interface ListFarmsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListFarmsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListFarmsData, undefined>;
  operationName: string;
}
export const listFarmsRef: ListFarmsRef;

export function listFarms(options?: ExecuteQueryOptions): QueryPromise<ListFarmsData, undefined>;
export function listFarms(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListFarmsData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserAccessRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserAccessVariables): MutationRef<CreateUserAccessData, CreateUserAccessVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserAccessVariables): MutationRef<CreateUserAccessData, CreateUserAccessVariables>;
  operationName: string;
}
export const createUserAccessRef: CreateUserAccessRef;

export function createUserAccess(vars: CreateUserAccessVariables): MutationPromise<CreateUserAccessData, CreateUserAccessVariables>;
export function createUserAccess(dc: DataConnect, vars: CreateUserAccessVariables): MutationPromise<CreateUserAccessData, CreateUserAccessVariables>;

interface DeleteUserAccessRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserAccessVariables): MutationRef<DeleteUserAccessData, DeleteUserAccessVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserAccessVariables): MutationRef<DeleteUserAccessData, DeleteUserAccessVariables>;
  operationName: string;
}
export const deleteUserAccessRef: DeleteUserAccessRef;

export function deleteUserAccess(vars: DeleteUserAccessVariables): MutationPromise<DeleteUserAccessData, DeleteUserAccessVariables>;
export function deleteUserAccess(dc: DataConnect, vars: DeleteUserAccessVariables): MutationPromise<DeleteUserAccessData, DeleteUserAccessVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;
export function deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

