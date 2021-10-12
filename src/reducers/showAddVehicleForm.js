const showAddVehicleFormReducer = (state = false, action) => {
  switch(action.type){
    case "SHOWADDVEHICLEFORM":
      return !state
    default:
      return false
  }
}

export default showAddVehicleFormReducer
