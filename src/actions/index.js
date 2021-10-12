export const removeVehicle = (id) => {
  return {
    type: 'REMOVEVEHICLE',
    payload: id
  };
};

export const saveEditVehicle = (vehicleData) => {
  return {
    type: 'EDITVEHICLE',
    payload: vehicleData
  };
};

export const addVehicle = (vehicleData) => {
  return {
    type: 'ADDVEHICLE',
    payload: vehicleData
  };
};

export const showAddVehicleForm = () => {
  return {
    type: 'SHOWADDVEHICLEFORM'
  };
};

export const showVehicleDetails = (id) => {
  return {
    type: 'SHOWVEHICLEDETAILS',
    payload: id
  };
};

export const showEditVehicle = (id) => {
  return {
    type: 'SHOWEDITVEHICLE',
    payload: id
  };
};
