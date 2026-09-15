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

interface GetMyFarmsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyFarmsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyFarmsData, undefined>;
  operationName: string;
}
export const getMyFarmsRef: GetMyFarmsRef;

export function getMyFarms(options?: ExecuteQueryOptions): QueryPromise<GetMyFarmsData, undefined>;
export function getMyFarms(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyFarmsData, undefined>;

interface ListMyAnimalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyAnimalsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyAnimalsData, undefined>;
  operationName: string;
}
export const listMyAnimalsRef: ListMyAnimalsRef;

export function listMyAnimals(options?: ExecuteQueryOptions): QueryPromise<ListMyAnimalsData, undefined>;
export function listMyAnimals(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyAnimalsData, undefined>;

interface ListMyFieldsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFieldsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFieldsData, undefined>;
  operationName: string;
}
export const listMyFieldsRef: ListMyFieldsRef;

export function listMyFields(options?: ExecuteQueryOptions): QueryPromise<ListMyFieldsData, undefined>;
export function listMyFields(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFieldsData, undefined>;

interface ListMyCropsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyCropsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyCropsData, undefined>;
  operationName: string;
}
export const listMyCropsRef: ListMyCropsRef;

export function listMyCrops(options?: ExecuteQueryOptions): QueryPromise<ListMyCropsData, undefined>;
export function listMyCrops(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyCropsData, undefined>;

interface ListMyInventoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyInventoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyInventoryData, undefined>;
  operationName: string;
}
export const listMyInventoryRef: ListMyInventoryRef;

export function listMyInventory(options?: ExecuteQueryOptions): QueryPromise<ListMyInventoryData, undefined>;
export function listMyInventory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyInventoryData, undefined>;

interface ListMySalesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySalesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMySalesData, undefined>;
  operationName: string;
}
export const listMySalesRef: ListMySalesRef;

export function listMySales(options?: ExecuteQueryOptions): QueryPromise<ListMySalesData, undefined>;
export function listMySales(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySalesData, undefined>;

interface ListMyIncomeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyIncomeData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyIncomeData, undefined>;
  operationName: string;
}
export const listMyIncomeRef: ListMyIncomeRef;

export function listMyIncome(options?: ExecuteQueryOptions): QueryPromise<ListMyIncomeData, undefined>;
export function listMyIncome(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyIncomeData, undefined>;

interface ListMyExpensesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyExpensesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyExpensesData, undefined>;
  operationName: string;
}
export const listMyExpensesRef: ListMyExpensesRef;

export function listMyExpenses(options?: ExecuteQueryOptions): QueryPromise<ListMyExpensesData, undefined>;
export function listMyExpenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyExpensesData, undefined>;

interface ListMyEmployeesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyEmployeesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyEmployeesData, undefined>;
  operationName: string;
}
export const listMyEmployeesRef: ListMyEmployeesRef;

export function listMyEmployees(options?: ExecuteQueryOptions): QueryPromise<ListMyEmployeesData, undefined>;
export function listMyEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyEmployeesData, undefined>;

interface ListMyFarmEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFarmEventsData, undefined>;
  operationName: string;
}
export const listMyFarmEventsRef: ListMyFarmEventsRef;

export function listMyFarmEvents(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmEventsData, undefined>;
export function listMyFarmEvents(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmEventsData, undefined>;

interface ListMyNotificationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyNotificationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyNotificationsData, undefined>;
  operationName: string;
}
export const listMyNotificationsRef: ListMyNotificationsRef;

export function listMyNotifications(options?: ExecuteQueryOptions): QueryPromise<ListMyNotificationsData, undefined>;
export function listMyNotifications(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyNotificationsData, undefined>;

interface ListMyFarmTasksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFarmTasksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFarmTasksData, undefined>;
  operationName: string;
}
export const listMyFarmTasksRef: ListMyFarmTasksRef;

export function listMyFarmTasks(options?: ExecuteQueryOptions): QueryPromise<ListMyFarmTasksData, undefined>;
export function listMyFarmTasks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFarmTasksData, undefined>;

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

