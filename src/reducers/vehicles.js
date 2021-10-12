const vehiclesData = require('../vehicles.json');

const vehiclesReducer = (state = vehiclesData, action) => {
  switch(action.type){
    case "REMOVEVEHICLE":
      let indexRemove = 0;
      state.forEach((item, i) => {
        if (item.id === action.payload){
          indexRemove = i;
        }
      });
      let newStateRemove = [...state];
      newStateRemove.splice(indexRemove, 1);
      return newStateRemove;
    case "ADDVEHICLE":
      const vehicleObjAdd = getVehicleData(state, action.payload);
      let newStateAdd = [...state, vehicleObjAdd];
      return newStateAdd;
    case "EDITVEHICLE":
      const vehicleObjEdit = getVehicleData(state, action.payload, false);
      let indexEdit = 0;
      state.forEach((item, i) => {
        if (item.id === action.payload.id){
          indexEdit = i;
        }
      });
      let newstateEdit = [...state];
      newstateEdit[indexEdit] = vehicleObjEdit;
      return newstateEdit
    default:
      return state;
  }
}

const getVehicleData = (state, payload, add=true) => {
  let id = "";
  if (add) {
    id = "v" + (parseInt(state[state.length-1].id.slice(1)) + 1).toString();
  }
  else {
    id = payload.id;
  }
  const status = payload.isActive ? "active" : "inactive";
  var equipments = [];
  const equipmentsBool = [payload.hasCrane,
    payload.hasTacho, payload.hasFireExt,
    payload.hasHook, payload.hasCustomEquip];

  equipmentsBool.forEach((element, i) => {
    if (element) {
      equipments.push(i+1);
    }
  });

  const vehicleObj = {
    "id": id,
    "name": payload.vName,
    "driver": payload.dName,
    "status": status,
    "fuelType": payload.fuel,
    "equipments": equipments
  }
  return vehicleObj;
}

export default vehiclesReducer
