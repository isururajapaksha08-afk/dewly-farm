import { GetMyUserData, ListMyFarmUsersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetMyUser(options?: useDataConnectQueryOptions<GetMyUserData>): UseDataConnectQueryResult<GetMyUserData, undefined>;
export function useGetMyUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyUserData>): UseDataConnectQueryResult<GetMyUserData, undefined>;

export function useListMyFarmUsers(options?: useDataConnectQueryOptions<ListMyFarmUsersData>): UseDataConnectQueryResult<ListMyFarmUsersData, undefined>;
export function useListMyFarmUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFarmUsersData>): UseDataConnectQueryResult<ListMyFarmUsersData, undefined>;
