import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeVehicle, showVehicleDetails, showEditVehicle } from '../actions/';
import VehicleDetails from './VehicleDetails';
import EditVehicle from './EditVehicle';

const Vehicle = ({ vehicle }) => {
  const dispatch = useDispatch();
  const showDetails = useSelector(state => state.showVehicleDetails[vehicle.id]);
  const showEditVehicleVal = useSelector(state => state.showEditVehicle[vehicle.id]);

  const onClickVehicle = (e) => {
    if (e.target.nodeName === "path"){
      dispatch(removeVehicle(vehicle.id));
    }
    if (e.target.nodeName === "A"){
      dispatch(showEditVehicle(vehicle.id));
    }
    else if (showEditVehicleVal === false && e.target.nodeName !== "path"){
      dispatch(showVehicleDetails(vehicle.id));
    }
  }

  return (
    <div className='vehicle' onClick={onClickVehicle}>
      <h3>{vehicle.name !== "" ? vehicle.name : 'No Name'}
        <div>
          <a className='editbtn'>Edit</a>
          <FaTimes style={{ color: 'red',
          cursor: 'pointer' }}/>
        </div>
      </h3>
      {showDetails && showEditVehicleVal === false ? <VehicleDetails vehicle={vehicle} /> : ''}
      {showEditVehicleVal ? <EditVehicle vehicle={vehicle} /> : ''}
    </div>
  )
}

export default Vehicle
