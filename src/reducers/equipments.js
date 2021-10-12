const equipmentsData = require('../equipments.json');

const equipmentsReducer = (state = equipmentsData, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default equipmentsReducer
