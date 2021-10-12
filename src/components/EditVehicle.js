import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEditVehicle, showEditVehicle } from '../actions/';

const EditVehicle = ({ vehicle }) => {
  const [vName, setVehicleName] = useState(vehicle.name);
  const [dName, setDriverName] = useState(vehicle.driver);
  const [isActive, setIsActive] = useState(vehicle.status === "active" ? true : false);
  const [fuel, setFuel] = useState(vehicle.fuelType);
  const [hasCrane, setHasCrane] =
  useState(vehicle.equipments.some((element) => element === 1 ? true : false));
  const [hasTacho, setHasTacho] =
  useState(vehicle.equipments.some((element) => element === 2 ? true : false));
  const [hasFireExt, setHasFireExt] =
  useState(vehicle.equipments.some((element) => element === 3 ? true : false));
  const [hasHook, setHasHook] =
  useState(vehicle.equipments.some((element) => element === 4 ? true : false));
  const [hasCustomEquip, setHasCustomEquip] =
  useState(vehicle.equipments.some((element) => element === 5 ? true : false));

  const dispatch = useDispatch();

  const id = vehicle.id;

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(saveEditVehicle({
      id, vName, dName, isActive, fuel, hasCrane,
      hasTacho, hasFireExt, hasHook, hasCustomEquip
    }));

    dispatch(showEditVehicle(id));
  }
  return (
    <form className='add-form'
      onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Vehicle Name</label>
        <input type='text'
          placeholder='New Vehicle Name'
          value={vName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Driver</label>
        <input type='text'
          placeholder="Driver's name"
          value={dName}
          onChange={(e) => setDriverName(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Active</label>
        <input type="checkbox"
          checked={isActive}
          value={isActive}
          onChange={(e) => setIsActive(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control'>
        <label>Fuel Type</label>
        <input type='text'
          placeholder='Diesel/LNG/CNG/Electrical'
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
      </div>
      <h4>Equipments</h4>
      <div className='form-control form-control-check'>
        <label>Crane</label>
        <input type="checkbox"
          checked={hasCrane}
          value={hasCrane}
          onChange={(e) => setHasCrane(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Tachograph</label>
        <input type="checkbox"
          checked={hasTacho}
          value={hasTacho}
          onChange={(e) => setHasTacho(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Fire Extinguisher</label>
        <input type="checkbox"
          checked={hasFireExt}
          value={hasFireExt}
          onChange={(e) => setHasFireExt(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Hook</label>
        <input type="checkbox"
          checked={hasHook}
          value={hasHook}
          onChange={(e) => setHasHook(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Custom equipment</label>
        <input type="checkbox"
          checked={hasCustomEquip}
          value={hasCustomEquip}
          onChange={(e) => setHasCustomEquip(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Vehicle' className='btn btn-block'/>
    </form>
  )
}

export default EditVehicle
