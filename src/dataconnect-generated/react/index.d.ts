import { GetMyFarmsData, ListMyAnimalsData, ListMyFieldsData, ListMyCropsData, ListMyInventoryData, ListMySalesData, ListMyIncomeData, ListMyExpensesData, ListMyEmployeesData, ListMyFarmEventsData, ListMyNotificationsData, ListMyFarmTasksData, ListEquipmentData, ListEquipmentMaintenanceData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetMyFarms(options?: useDataConnectQueryOptions<GetMyFarmsData>): UseDataConnectQueryResult<GetMyFarmsData, undefined>;
export function useGetMyFarms(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyFarmsData>): UseDataConnectQueryResult<GetMyFarmsData, undefined>;

export function useListMyAnimals(options?: useDataConnectQueryOptions<ListMyAnimalsData>): UseDataConnectQueryResult<ListMyAnimalsData, undefined>;
export function useListMyAnimals(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyAnimalsData>): UseDataConnectQueryResult<ListMyAnimalsData, undefined>;

export function useListMyFields(options?: useDataConnectQueryOptions<ListMyFieldsData>): UseDataConnectQueryResult<ListMyFieldsData, undefined>;
export function useListMyFields(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFieldsData>): UseDataConnectQueryResult<ListMyFieldsData, undefined>;

export function useListMyCrops(options?: useDataConnectQueryOptions<ListMyCropsData>): UseDataConnectQueryResult<ListMyCropsData, undefined>;
export function useListMyCrops(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyCropsData>): UseDataConnectQueryResult<ListMyCropsData, undefined>;

export function useListMyInventory(options?: useDataConnectQueryOptions<ListMyInventoryData>): UseDataConnectQueryResult<ListMyInventoryData, undefined>;
export function useListMyInventory(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyInventoryData>): UseDataConnectQueryResult<ListMyInventoryData, undefined>;

export function useListMySales(options?: useDataConnectQueryOptions<ListMySalesData>): UseDataConnectQueryResult<ListMySalesData, undefined>;
export function useListMySales(dc: DataConnect, options?: useDataConnectQueryOptions<ListMySalesData>): UseDataConnectQueryResult<ListMySalesData, undefined>;

export function useListMyIncome(options?: useDataConnectQueryOptions<ListMyIncomeData>): UseDataConnectQueryResult<ListMyIncomeData, undefined>;
export function useListMyIncome(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyIncomeData>): UseDataConnectQueryResult<ListMyIncomeData, undefined>;

export function useListMyExpenses(options?: useDataConnectQueryOptions<ListMyExpensesData>): UseDataConnectQueryResult<ListMyExpensesData, undefined>;
export function useListMyExpenses(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyExpensesData>): UseDataConnectQueryResult<ListMyExpensesData, undefined>;

export function useListMyEmployees(options?: useDataConnectQueryOptions<ListMyEmployeesData>): UseDataConnectQueryResult<ListMyEmployeesData, undefined>;
export function useListMyEmployees(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyEmployeesData>): UseDataConnectQueryResult<ListMyEmployeesData, undefined>;

export function useListMyFarmEvents(options?: useDataConnectQueryOptions<ListMyFarmEventsData>): UseDataConnectQueryResult<ListMyFarmEventsData, undefined>;
export function useListMyFarmEvents(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFarmEventsData>): UseDataConnectQueryResult<ListMyFarmEventsData, undefined>;

export function useListMyNotifications(options?: useDataConnectQueryOptions<ListMyNotificationsData>): UseDataConnectQueryResult<ListMyNotificationsData, undefined>;
export function useListMyNotifications(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyNotificationsData>): UseDataConnectQueryResult<ListMyNotificationsData, undefined>;

export function useListMyFarmTasks(options?: useDataConnectQueryOptions<ListMyFarmTasksData>): UseDataConnectQueryResult<ListMyFarmTasksData, undefined>;
export function useListMyFarmTasks(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFarmTasksData>): UseDataConnectQueryResult<ListMyFarmTasksData, undefined>;

export function useListEquipment(options?: useDataConnectQueryOptions<ListEquipmentData>): UseDataConnectQueryResult<ListEquipmentData, undefined>;
export function useListEquipment(dc: DataConnect, options?: useDataConnectQueryOptions<ListEquipmentData>): UseDataConnectQueryResult<ListEquipmentData, undefined>;

export function useListEquipmentMaintenance(options?: useDataConnectQueryOptions<ListEquipmentMaintenanceData>): UseDataConnectQueryResult<ListEquipmentMaintenanceData, undefined>;
export function useListEquipmentMaintenance(dc: DataConnect, options?: useDataConnectQueryOptions<ListEquipmentMaintenanceData>): UseDataConnectQueryResult<ListEquipmentMaintenanceData, undefined>;
