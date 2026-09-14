import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

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

export interface CreateEquipmentData {
  equipment_insert: Equipment_Key;
}

export interface CreateEquipmentMaintenanceData {
  equipmentMaintenance_insert: EquipmentMaintenance_Key;
}

export interface CreateEquipmentMaintenanceVariables {
  serviceDate: DateString;
  description: string;
  cost?: number | null;
  nextServiceDate?: DateString | null;
  technician?: string | null;
  notes?: string | null;
  equipmentId: UUIDString;
}

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

interface ListEquipmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEquipmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEquipmentData, undefined>;
  operationName: string;
}
export const listEquipmentRef: ListEquipmentRef;

export function listEquipment(options?: ExecuteQueryOptions): QueryPromise<ListEquipmentData, undefined>;
export function listEquipment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEquipmentData, undefined>;

interface CreateEquipmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEquipmentVariables): MutationRef<CreateEquipmentData, CreateEquipmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateEquipmentVariables): MutationRef<CreateEquipmentData, CreateEquipmentVariables>;
  operationName: string;
}
export const createEquipmentRef: CreateEquipmentRef;

export function createEquipment(vars: CreateEquipmentVariables): MutationPromise<CreateEquipmentData, CreateEquipmentVariables>;
export function createEquipment(dc: DataConnect, vars: CreateEquipmentVariables): MutationPromise<CreateEquipmentData, CreateEquipmentVariables>;

interface ListEquipmentMaintenanceRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEquipmentMaintenanceData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEquipmentMaintenanceData, undefined>;
  operationName: string;
}
export const listEquipmentMaintenanceRef: ListEquipmentMaintenanceRef;

export function listEquipmentMaintenance(options?: ExecuteQueryOptions): QueryPromise<ListEquipmentMaintenanceData, undefined>;
export function listEquipmentMaintenance(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEquipmentMaintenanceData, undefined>;

interface CreateEquipmentMaintenanceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEquipmentMaintenanceVariables): MutationRef<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateEquipmentMaintenanceVariables): MutationRef<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
  operationName: string;
}
export const createEquipmentMaintenanceRef: CreateEquipmentMaintenanceRef;

export function createEquipmentMaintenance(vars: CreateEquipmentMaintenanceVariables): MutationPromise<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
export function createEquipmentMaintenance(dc: DataConnect, vars: CreateEquipmentMaintenanceVariables): MutationPromise<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;

