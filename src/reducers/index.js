import vehiclesReducer from './vehicles';
import equipmentsReducer from './equipments';
import showAddVehicleFormReducer from './showAddVehicleForm';
import showVehicleDetailsReducer from './showVehicleDetails';
import showEditVehicleReducer from './showEditVehicle';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  vehicles: vehiclesReducer,
  equipments: equipmentsReducer,
  showAddVehicle: showAddVehicleFormReducer,
  showVehicleDetails: showVehicleDetailsReducer,
  showEditVehicle: showEditVehicleReducer
})

export default allReducers;
