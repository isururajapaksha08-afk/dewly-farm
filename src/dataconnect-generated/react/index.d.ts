import { ListEquipmentData, CreateEquipmentData, CreateEquipmentVariables, ListEquipmentMaintenanceData, CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListEquipment(options?: useDataConnectQueryOptions<ListEquipmentData>): UseDataConnectQueryResult<ListEquipmentData, undefined>;
export function useListEquipment(dc: DataConnect, options?: useDataConnectQueryOptions<ListEquipmentData>): UseDataConnectQueryResult<ListEquipmentData, undefined>;

export function useCreateEquipment(options?: useDataConnectMutationOptions<CreateEquipmentData, FirebaseError, CreateEquipmentVariables>): UseDataConnectMutationResult<CreateEquipmentData, CreateEquipmentVariables>;
export function useCreateEquipment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEquipmentData, FirebaseError, CreateEquipmentVariables>): UseDataConnectMutationResult<CreateEquipmentData, CreateEquipmentVariables>;

export function useListEquipmentMaintenance(options?: useDataConnectQueryOptions<ListEquipmentMaintenanceData>): UseDataConnectQueryResult<ListEquipmentMaintenanceData, undefined>;
export function useListEquipmentMaintenance(dc: DataConnect, options?: useDataConnectQueryOptions<ListEquipmentMaintenanceData>): UseDataConnectQueryResult<ListEquipmentMaintenanceData, undefined>;

export function useCreateEquipmentMaintenance(options?: useDataConnectMutationOptions<CreateEquipmentMaintenanceData, FirebaseError, CreateEquipmentMaintenanceVariables>): UseDataConnectMutationResult<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
export function useCreateEquipmentMaintenance(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEquipmentMaintenanceData, FirebaseError, CreateEquipmentMaintenanceVariables>): UseDataConnectMutationResult<CreateEquipmentMaintenanceData, CreateEquipmentMaintenanceVariables>;
