//import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAddVehicleForm } from '../actions';
import Vehicle from './Vehicle';
import Button from './Button';
import AddVehicle from './AddVehicle';

const Vehicles = () => {
  const vehicles = useSelector(state => state.vehicles);
  const dispatch = useDispatch();

  const showAddVehicle = useSelector(state => state.showAddVehicle);

  return (
    <>
      {vehicles.map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
      {showAddVehicle ?
        <>
          <Button color='#f4f4f4' textColor='red' text='Cancel'
          onClick={() => dispatch(showAddVehicleForm())} classes='btn cancel'/>
          <AddVehicle />
        </> :
        <Button color='#f4f4f4' textColor='#000' text='+'
        onClick={() => dispatch(showAddVehicleForm())}/>}
    </>
  )
}

export default Vehicles
