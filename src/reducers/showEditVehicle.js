const vehiclesData = require('../vehicles.json');

var showingVehicles = {};
vehiclesData.forEach((item, i) => {
  showingVehicles[item.id] = false;
});

const showEditVehicleReducer = (state = showingVehicles, action) => {
  switch(action.type){
    case "SHOWEDITVEHICLE":
      let newstate = state;
      newstate[action.payload] = !newstate[action.payload];
      return {
                ...state,
                newstate: {
                    ...state.newstate
                }
              };
    default:
        return state;
  }
}

export default showEditVehicleReducer
