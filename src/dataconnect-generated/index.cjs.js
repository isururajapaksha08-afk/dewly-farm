const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'webapp',
  location: 'asia-southeast1'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const listEquipmentRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEquipment');
}
listEquipmentRef.operationName = 'ListEquipment';
exports.listEquipmentRef = listEquipmentRef;

exports.listEquipment = function listEquipment(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listEquipmentRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createEquipmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEquipment', inputVars);
}
createEquipmentRef.operationName = 'CreateEquipment';
exports.createEquipmentRef = createEquipmentRef;

exports.createEquipment = function createEquipment(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createEquipmentRef(dcInstance, inputVars));
}
;

const listEquipmentMaintenanceRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEquipmentMaintenance');
}
listEquipmentMaintenanceRef.operationName = 'ListEquipmentMaintenance';
exports.listEquipmentMaintenanceRef = listEquipmentMaintenanceRef;

exports.listEquipmentMaintenance = function listEquipmentMaintenance(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listEquipmentMaintenanceRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createEquipmentMaintenanceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEquipmentMaintenance', inputVars);
}
createEquipmentMaintenanceRef.operationName = 'CreateEquipmentMaintenance';
exports.createEquipmentMaintenanceRef = createEquipmentMaintenanceRef;

exports.createEquipmentMaintenance = function createEquipmentMaintenance(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createEquipmentMaintenanceRef(dcInstance, inputVars));
}
;
