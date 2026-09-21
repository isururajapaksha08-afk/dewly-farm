import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

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

export interface Crop_Key {
  id: UUIDString;
  __typename?: 'Crop_Key';
}

export interface Customer_Key {
  id: UUIDString;
  __typename?: 'Customer_Key';
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

interface GetMyUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
  operationName: string;
}
export const getMyUserRef: GetMyUserRef;

export function getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;
export function getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface ListMyFarmUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFarmUsersData, undefined>;
  operationName: string;
}
export const listMyFarmUsersRef: ListMyFarmUsersRef;

export function listMyFarmUsers(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmUsersData, undefined>;
export function listMyFarmUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmUsersData, undefined>;

